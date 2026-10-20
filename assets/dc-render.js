/* Minimal renderer for the .dc.html template subset used by the Ocobo mockups.
   Works in the browser and in Node (with a jsdom document). */
(function (root) {
  var UNITLESS = { fontWeight: 1, lineHeight: 1, zIndex: 1, opacity: 1, flexGrow: 1, flexShrink: 1, order: 1, flex: 1 };
  var EVT = { onClick: 'click', onChange: 'input', onInput: 'input', onMouseEnter: 'mouseenter', onMouseLeave: 'mouseleave' };

  function lookup(expr, scope) {
    expr = expr.trim();
    if (expr === 'true') return true;
    if (expr === 'false') return false;
    if (expr === 'null') return null;
    if (/^-?\d+(\.\d+)?$/.test(expr)) return Number(expr);
    if (/^'.*'$|^".*"$/.test(expr)) return expr.slice(1, -1);
    var parts = expr.split('.'), v = scope;
    for (var i = 0; i < parts.length; i++) {
      if (v == null) return undefined;
      v = v[parts[i]];
    }
    return v;
  }
  function styleStr(o) {
    if (o == null) return '';
    if (typeof o === 'string') return o;
    return Object.keys(o).filter(function (k) { return o[k] != null && o[k] !== ''; }).map(function (k) {
      var v = o[k];
      if (typeof v === 'number' && !UNITLESS[k] && v !== 0) v = v + 'px';
      var prop = k.replace(/[A-Z]/g, function (m) { return '-' + m.toLowerCase(); });
      if (/^(webkit|moz|ms)-/.test(prop)) prop = '-' + prop;
      return prop + ': ' + v;
    }).join('; ');
  }
  var HOLE = /\{\{([^}]+)\}\}/g;
  var WHOLE = /^\s*\{\{([^}]+)\}\}\s*$/;
  function interp(str, scope) {
    return str.replace(HOLE, function (_, e) { var v = lookup(e, scope); return v == null ? '' : String(v); });
  }
  function kebabToCamel(s) { return s.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); }); }

  function Renderer(doc, loader) {
    this.doc = doc;
    this.loader = loader; // name -> {template: Element, Logic: class}
  }
  Renderer.prototype.renderChildren = function (src, scope, out) {
    var kids = src.childNodes;
    for (var i = 0; i < kids.length; i++) this.renderNode(kids[i], scope, out);
  };
  Renderer.prototype.renderNode = function (n, scope, out) {
    var doc = this.doc;
    if (n.nodeType === 3) { out.appendChild(doc.createTextNode(interp(n.nodeValue, scope))); return; }
    if (n.nodeType !== 1) return;
    var tag = n.tagName.toLowerCase();
    if (tag === 'helmet') return;
    if (tag === 'sc-for') {
      var list = lookup((n.getAttribute('list') || '').replace(/[{}]/g, ''), scope) || [];
      var as = n.getAttribute('as') || 'item';
      for (var i = 0; i < list.length; i++) {
        var s = Object.create(scope); s[as] = list[i]; s.$index = i;
        this.renderChildren(n, s, out);
      }
      return;
    }
    if (tag === 'sc-if') {
      var v = lookup((n.getAttribute('value') || '').replace(/[{}]/g, ''), scope);
      if (v) this.renderChildren(n, scope, out);
      return;
    }
    if (tag === 'dc-import') {
      var props = {};
      for (var a = 0; a < n.attributes.length; a++) {
        var at = n.attributes[a];
        if (at.name === 'name' || at.name.indexOf('hint-') === 0) continue;
        var m = WHOLE.exec(at.value);
        props[kebabToCamel(at.name)] = m ? lookup(m[1], scope) : interp(at.value, scope);
      }
      this.renderComponent(n.getAttribute('name'), props, out);
      return;
    }
    var el = n.namespaceURI && n.namespaceURI.indexOf('svg') >= 0 ? doc.createElementNS(n.namespaceURI, n.tagName) : doc.createElement(n.tagName);
    for (var b = 0; b < n.attributes.length; b++) {
      var att = n.attributes[b], name = att.name, val = att.value;
      var whole = WHOLE.exec(val);
      var evName = null;
      for (var k in EVT) if (k.toLowerCase() === name.toLowerCase()) evName = EVT[k];
      if (evName) {
        if (whole) { var fn = lookup(whole[1], scope); if (typeof fn === 'function') { el.__h = el.__h || {}; el.__h[evName] = fn; } }
        continue;
      }
      if (whole) {
        var raw = lookup(whole[1], scope);
        if (name === 'style') { el.setAttribute('style', styleStr(raw)); continue; }
        if (raw === false || raw == null) continue;
        if (raw === true) { el.setAttribute(name, ''); continue; }
        el.setAttribute(name, String(raw));
        continue;
      }
      el.setAttribute(name, val.indexOf('{{') >= 0 ? interp(val, scope) : val);
    }
    this.renderChildren(n, scope, el);
    out.appendChild(el);
  };
  Renderer.prototype.renderComponent = function (name, props, out, inst) {
    var c = this.loader(name);
    var o = inst || new c.Logic(props || {});
    var vals = o.renderVals() || {};
    this.renderChildren(c.template, vals, out);
    return o;
  };

  /* --- morph: patch live DOM to match a freshly rendered tree --- */
  function syncHandlers(live, fresh) {
    var h = fresh.__h || null;
    if (!live.__bound) live.__bound = {};
    live.__h = h;
    if (h) Object.keys(h).forEach(function (t) {
      if (!live.__bound[t]) {
        live.__bound[t] = true;
        live.addEventListener(t, function (e) { if (live.__h && live.__h[t]) live.__h[t](e); });
      }
    });
  }
  function morph(live, fresh) {
    if (live.nodeType !== fresh.nodeType || live.nodeName !== fresh.nodeName) {
      live.parentNode.replaceChild(fresh, live); bindAll(fresh); return;
    }
    if (live.nodeType === 3) { if (live.nodeValue !== fresh.nodeValue) live.nodeValue = fresh.nodeValue; return; }
    if (live.nodeType !== 1) return;
    var i, fa = fresh.attributes, la = live.attributes;
    for (i = la.length - 1; i >= 0; i--) if (!fresh.hasAttribute(la[i].name)) live.removeAttribute(la[i].name);
    for (i = 0; i < fa.length; i++) if (live.getAttribute(fa[i].name) !== fa[i].value) live.setAttribute(fa[i].name, fa[i].value);
    if (live.tagName === 'INPUT' && fresh.hasAttribute('value') && String(live.value) !== fresh.getAttribute('value')) live.value = fresh.getAttribute('value');
    syncHandlers(live, fresh);
    var lc = live.childNodes, fc = Array.prototype.slice.call(fresh.childNodes);
    for (i = 0; i < fc.length; i++) {
      if (i < lc.length) morph(lc[i], fc[i]); else { live.appendChild(fc[i]); bindAll(fc[i]); }
    }
    while (lc.length > fc.length) live.removeChild(live.lastChild);
  }
  function bindAll(node) {
    if (node.nodeType !== 1) return;
    if (node.__h) syncHandlers(node, node);
    for (var i = 0; i < node.childNodes.length; i++) bindAll(node.childNodes[i]);
  }

  root.DCRender = { Renderer: Renderer, morph: morph, bindAll: bindAll, styleStr: styleStr };
})(typeof window !== 'undefined' ? window : globalThis);
