(function () {
  function init() {
    document.querySelectorAll('.sn-nav').forEach(function (nav) {
      if (nav.__ocobo) return; nav.__ocobo = true;
      var burger = nav.querySelector('.sn-burger');
      if (burger) burger.addEventListener('click', function () {
        var open = nav.classList.toggle('sn-open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.documentElement.classList.toggle('sn-lock', open);
      });
      nav.querySelectorAll('.sn-dd > .sn-link').forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (window.matchMedia('(max-width: 1023px)').matches) btn.parentNode.classList.toggle('sn-dd-open');
        });
      });
      nav.querySelectorAll('.sn-links a, .sn-panel a').forEach(function (a) {
        a.addEventListener('click', function () { nav.classList.remove('sn-open'); document.documentElement.classList.remove('sn-lock'); });
      });
    });
  }
  function center() {
    if (!window.matchMedia('(max-width: 767px)').matches) return;
    document.querySelectorAll('[role="img"][aria-label*="cycle Revenue"], [role="img"][aria-label*="Bowtie"]').forEach(function (bow) {
      var f = bow.parentElement;
      if (f.scrollWidth > f.clientWidth) f.scrollLeft = 0;
    });
  }
  function arm(el, target, a, g, th) {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { el.classList.add(g); return; }
    el.classList.add(a);
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { el.classList.add(g); io.disconnect(); } });
    }, { threshold: th });
    io.observe(target || el);
  }
  function hzScrub(h) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) { h.classList.add('hz-go'); return; }
    h.classList.add('hz-armed'); h.classList.add('hz-scrub');
    if ('IntersectionObserver' in window) { var io8 = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { h.classList.add('hz-go'); io8.disconnect(); } }); }, { threshold: 0.2 }); io8.observe(h); } else h.classList.add('hz-go');
    var teams = h.querySelectorAll('.hz-vis'), sys = h.querySelector('.hz-sys'), clip = h.querySelector('.hz-area');
    var els = Array.prototype.slice.call(h.querySelectorAll('[data-p]'));
    var boxes = Array.prototype.slice.call(h.querySelectorAll('[data-box]'));
    function c(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
    var r0 = h.getBoundingClientRect(), vh0 = window.innerHeight, y00 = window.scrollY || window.pageYOffset || 0;
    var absTop = r0.top + y00;
    // start when the illustration enters the bottom 85% band, end when it is centred; never before the first scroll
    var y0 = Math.max(0, absTop - vh0 * 0.85), yEnd = absTop + r0.height / 2 - vh0 / 2;
    var dist = Math.max(380, yEnd - y0);
    var ticking = false;
    function upd() {
      ticking = false;
      var y = window.scrollY || window.pageYOffset || 0;
      var p = c((y - y0) / dist);
      var m = c(p / 0.18), b = c((p - 0.18) / 0.72), last = 0;
      h.querySelectorAll('[data-d0]').forEach(function (e) {
        var a0 = e.getAttribute('data-d0').match(/-?[\d.]+/g), a1 = e.getAttribute('data-d1').match(/-?[\d.]+/g), i = 0;
        e.setAttribute('d', e.getAttribute('data-d1').replace(/-?[\d.]+/g, function () { var v = (+a0[i]) + ((+a1[i]) - (+a0[i])) * m; i++; return v.toFixed(1); }));
      });
      var sys = h.querySelector('.hz-sys'), clip = h.querySelector('.hz-area');
      var ext = h.querySelector('.hz-ext'); if (ext) ext.style.opacity = String(1 - 0.78 * m);
      h.querySelectorAll('.hz-dl').forEach(function (t) { t.style.opacity = String(1 - 0.5 * m); });
      if (sys) sys.style.strokeDashoffset = String(1 - b);
      if (clip) clip.style.transform = 'scaleX(' + b + ')';
      h.querySelectorAll('[data-p]').forEach(function (e) {
        var v = parseFloat(e.getAttribute('data-p')), on = p >= v - 0.001 && (v > 0 || p > 0.02);
        e.classList.toggle('on', on);
        var mm = on && /hz-lb(\d)/.exec(e.getAttribute('class') || ''); if (mm) last = Math.max(last, +mm[1]);
      });
      h.querySelectorAll('[data-box]').forEach(function (e) { e.classList.toggle('on', p < 0.88 && +e.getAttribute('data-box') === last); });
    }
    function req() { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }
    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', req);
    upd();
  }
  function iaScrub() { ['ia8', 'th8'].forEach(function (id) { var h = document.getElementById(id); if (h) iaScrubEl(h); }); }
  function iaScrubEl(h) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    h.classList.add('ia-armed'); h.classList.add('ia-scrub');
    var els = Array.prototype.slice.call(h.querySelectorAll('[data-ia]'));
    var tk = false;
    function upd() {
      tk = false;
      var r = h.getBoundingClientRect(), vh = window.innerHeight;
      var p = (vh * 0.8 - r.top) / (vh * 0.5); p = p < 0 ? -1 : p > 1 ? 1 : p;
      els.forEach(function (e) { e.classList.toggle('on', p >= parseFloat(e.getAttribute('data-ia'))); });
    }
    window.addEventListener('scroll', function () { if (!tk) { tk = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }
  function gapScrub(h) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    h.classList.add('gap-armed'); h.classList.add('gap-scrub');
    var o = h.querySelector('.gp-o'), ls = h.querySelectorAll('.gp-l'), hs = h.querySelectorAll('.gp-h'), tk = false;
    function upd() {
      tk = false;
      var r = h.getBoundingClientRect(), vh = window.innerHeight;
      var p = (vh * 0.92 - r.top) / (vh * 0.5); p = p < 0 ? 0 : p > 1 ? 1 : p;
      if (o) o.classList.toggle('on', p > 0.08);
      var b = (p - 0.25) / 0.55; b = b < 0 ? 0 : b > 1 ? 1 : b;
      for (var i = 0; i < ls.length; i++) ls[i].style.transform = 'scaleX(' + b + ')';
      for (var j = 0; j < hs.length; j++) hs[j].classList.toggle('on', b >= 0.98);
    }
    window.addEventListener('scroll', function () { if (!tk) { tk = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }

  function hxAnim(h) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var X = [150, 400, 650, 900], AX = 250, Y0 = [118, 186, 100, 170], W = [111, 82, 162, 97];
    var COL = ['#E0BC12', '#5FC495', '#5DB8CF', '#F07A61'];
    var q = function (s) { return Array.prototype.slice.call(h.querySelectorAll(s)); };
    var teams = q('.hx-team'), guides = q('.hx-guide'), nodes = q('.hx-node'), gains = q('.hx-gain'), dots = q('.hx-dot'), grids = q('.hx-grid');
    var axis = h.querySelector('.hx-axis'), base = h.querySelector('.hx-base'), ghost = h.querySelector('.hx-ghost'), gl = h.querySelector('.hx-gl'), axl = h.querySelector('.hx-axl'), curve = h.querySelector('.hx-curve'), clip = h.querySelector('.hx-clip'), end = h.querySelector('.hx-end');
    var gpos = gains.map(function (g) { var m = /translate\(([-\d.]+),([-\d.]+)\)/.exec(g.getAttribute('transform')); return [+m[1], +m[2]]; });
    h.classList.add('hx-js');
    function c01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
    function seg(t, a, b) { return c01((t - a) / (b - a)); }
    function eio(t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
    function eo(t) { return 1 - Math.pow(1 - t, 3); }
    function ei(t) { return t * t * t; }
    function f(x) { var u = (x - 150) / 910; return 175 - 25 * u - (u > 0 ? 110 * Math.pow(u, 1.6) : 0); }
    curve.style.strokeDasharray = '1';
    var LOST = [1, 4, 7, 9], t0 = null, ticking = false;
    function frame(now) {
      if (t0 === null) t0 = now;
      var t = (now - t0) / 1000;
      var hx = 40 + 1020 * eio(seg(t, 2.3, 3.5));
      axis.setAttribute('x2', hx.toFixed(1)); axis.style.opacity = t > 2.3 ? 1 : 0;
      base.style.opacity = eio(seg(t, 2.1, 2.6));
      axl.style.opacity = eio(seg(t, 3.3, 3.8));
      var g = seg(t, 3.6, 6.6);
      grids.forEach(function (l) { l.style.opacity = eio(seg(g, 0, 0.3)); });
      for (var i = 0; i < 4; i++) {
        var a = eo(seg(t, 0.1 + i * 0.18, 0.75 + i * 0.18));
        var al = eio(seg(hx, X[i] - 80, X[i] + 140));
        var bob = (1 - al) * 4 * Math.sin(t * 1.5 + i * 1.7);
        var cy = Y0[i] + (AX - Y0[i]) * al + bob + (1 - a) * 12;
        teams[i].setAttribute('transform', 'translate(' + X[i] + ',' + cy.toFixed(1) + ')');
        teams[i].style.opacity = a;
        var gb = eio(seg(g, 0.05 + i * 0.16, 0.3 + i * 0.16));
        var top = (AX - 8) + (f(X[i]) + 5 - (AX - 8)) * gb;
        guides[i].setAttribute('y2', top.toFixed(1)); guides[i].style.opacity = gb > 0.01 ? 1 : 0;
        nodes[i].setAttribute('cy', (top - 6 * gb).toFixed(1)); nodes[i].style.opacity = eo(seg(gb, 0.6, 1));
        var gg = eo(seg(gb, 0.7, 1));
        gains[i].style.opacity = gg;
        gains[i].setAttribute('transform', 'translate(' + gpos[i][0] + ',' + (gpos[i][1] + 8 * (1 - gg)).toFixed(1) + ')');
      }
      var gc = eio(seg(g, 0.64, 0.95));
      curve.style.strokeDashoffset = (1 - gc).toFixed(4);
      clip.setAttribute('width', (1020 * gc).toFixed(1));
      var gg2 = eio(seg(g, 0.8, 1)); ghost.style.opacity = gg2; gl.style.opacity = gg2;
      var ge = eo(seg(g, 0.93, 1));
      end.style.opacity = ge; end.style.transform = 'scale(' + (0.4 + 0.6 * ge).toFixed(3) + ')';
      h.classList.toggle('hx-end-on', ge > 0.98);
      for (var k = 0; k < dots.length; k++) {
        var d = dots[k], x = -50, y = -50, op = 0;
        if (k < 10 && t < 3.1) {
          var s0 = 0.75 + k * 0.15, i2 = k % 3, lost = LOST.indexOf(k) >= 0;
          var ax = X[i2] + 14, ay = Y0[i2], bx = X[i2 + 1] - 14, by = Y0[i2 + 1];
          var mx = (ax + bx) / 2, my = Math.min(ay, by) - 70;
          var p = lost ? 0.55 * eo(seg(t, s0, s0 + 0.55)) : eio(seg(t, s0, s0 + 0.85)), u = 1 - p;
          x = u * u * ax + 2 * u * p * mx + p * p * bx; y = u * u * ay + 2 * u * p * my + p * p * by;
          if (lost) { var fl = ei(seg(t, s0 + 0.45, s0 + 1.15)); y += 140 * fl; x += 12 * fl; op = seg(t, s0, s0 + 0.1) * (1 - seg(t, s0 + 0.8, s0 + 1.15)); }
          else op = seg(t, s0, s0 + 0.1) * (1 - seg(t, s0 + 0.72, s0 + 0.85));
          d.setAttribute('fill', COL[i2]); d.setAttribute('r', '3');
        } else if (t > 3.0) {
          d.setAttribute('fill', '#212323'); d.setAttribute('r', '2.6');
          var tt = t - 3.0 - k * 0.55;
          if (tt > 0) {
            var span = 1020, ph = ((tt * 140) % span);
            x = 40 + ph; y = AX;
            op = Math.min(1, tt * 2) * seg(ph, 0, 40) * (1 - seg(ph, span - 60, span)) * 0.45;
            if (x > hx) op = 0;
          }
        }
        d.setAttribute('cx', x.toFixed(1)); d.setAttribute('cy', y.toFixed(1)); d.setAttribute('opacity', op.toFixed(3));
      }
      if (document.visibilityState !== 'hidden') requestAnimationFrame(frame); else ticking = false;
    }
    function go() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
    document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') go(); });
    if ('IntersectionObserver' in window) { var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { io.disconnect(); go(); } }); }, { threshold: 0.25 }); io.observe(h); } else go();
  }
  function hwAnim(h) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    h.classList.add('hw-armed');
    var els = Array.prototype.slice.call(h.querySelectorAll('[data-w]')), tk = false;
    var r0 = h.getBoundingClientRect(), absTop = r0.top + (window.scrollY || 0), vh = window.innerHeight;
    var y0 = Math.max(0, absTop - vh * 0.75), dist = Math.max(420, absTop + r0.height * 0.6 - vh / 2 - y0);
    function upd() {
      tk = false;
      var y = window.scrollY || 0, p = (y - y0) / dist; p = p < 0 ? 0 : p > 1 ? 1 : p;
      els.forEach(function (e, k) {
        var on = p >= parseFloat(e.getAttribute('data-w')) && y > 4;
        e.classList.toggle('on', on);
        e.style.transform = 'translateY(' + (-(k % 2 ? 18 : 30) * p).toFixed(1) + 'px)';
      });
    }
    window.addEventListener('scroll', function () { if (!tk) { tk = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }
  function pwAnim(h) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;
    h.classList.add('pw-armed');
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }); }, { threshold: 0.45 });
    Array.prototype.slice.call(h.querySelectorAll('.pw-win')).forEach(function (w) { io.observe(w); });
  }
  function dayAnim(h) {
    var st = Array.prototype.slice.call(h.querySelectorAll('.dy-st')), sc = Array.prototype.slice.call(h.querySelectorAll('.dy-sc'));
    var ch = h.querySelector('.dy-ch'), ck = h.querySelector('.dy-clock'), cur = 0, tm = null, DUR = 6000, run = false;
    var red = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    function show(i) {
      cur = i;
      st.forEach(function (e, k) { e.classList.toggle('on', k === i); e.setAttribute('aria-selected', k === i ? 'true' : 'false'); });
      sc.forEach(function (e, k) { e.classList.toggle('on', k === i); });
      if (ch) ch.textContent = sc[i].getAttribute('data-ch');
      if (ck) ck.textContent = st[i].querySelector('.dy-time').textContent;
      var p = st[i].querySelector('.dy-prog i'); if (p) { p.style.animation = 'none'; void p.offsetWidth; p.style.animation = ''; }
    }
    function next() { show((cur + 1) % st.length); }
    function start() { if (red) return; run = true; h.classList.add('dy-run'); clearInterval(tm); tm = setInterval(next, DUR); }
    st.forEach(function (e, k) { e.addEventListener('click', function () { show(k); if (run) start(); }); });
    h.addEventListener('mouseenter', function () { if (!run) return; clearInterval(tm); h.classList.add('dy-paused'); });
    h.addEventListener('mouseleave', function () { if (!run) return; h.classList.remove('dy-paused'); var p = st[cur].querySelector('.dy-prog i'); if (p) { p.style.animation = 'none'; void p.offsetWidth; p.style.animation = ''; } clearInterval(tm); tm = setInterval(next, DUR); });
    if (!('IntersectionObserver' in window)) { start(); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { show(0); start(); io.disconnect(); } }); }, { threshold: 0.4 });
    io.observe(h);
  }
  function clampPanels() {
    var dds = document.querySelectorAll('.sn-dd');
    Array.prototype.forEach.call(dds, function (dd) {
      var pn = dd.querySelector('.sn-panel'); if (!pn) return;
      function fit() {
        if (window.matchMedia('(max-width: 767px)').matches) { pn.style.marginLeft = ''; return; }
        pn.style.marginLeft = '0px';
        var r = pn.getBoundingClientRect(), vw = document.documentElement.clientWidth, lo = 16, hi = vw - 16, sh = 0;
        var nv = dd.closest('.sn-nav'); if (nv) { var b = nv.getBoundingClientRect(); if (b.right - b.left >= r.width) { lo = Math.max(lo, b.left); hi = Math.min(hi, b.right); } }
        if (r.left < lo) sh = lo - r.left; else if (r.right > hi) sh = hi - r.right;
        pn.style.marginLeft = sh ? sh + 'px' : '';
      }
      dd.addEventListener('mouseenter', fit);
      dd.addEventListener('focusin', fit);
    });
    window.addEventListener('resize', function () { Array.prototype.forEach.call(document.querySelectorAll('.sn-panel'), function (p) { p.style.marginLeft = ''; }); });
  }
  function rcScrub(h) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var line = h.querySelector('.rc-line'), fill = line && line.querySelector('i'), st = Array.prototype.slice.call(h.querySelectorAll('.rc-st')), tk = false;
    h.classList.add('rc-armed');
    function upd() {
      tk = false;
      var r = line.getBoundingClientRect(), vh = window.innerHeight, lim = vh * 0.62;
      var px = lim - r.top; px = px < 0 ? 0 : px > r.height ? r.height : px;
      if (fill) fill.style.setProperty('--p', r.height ? (px / r.height).toFixed(4) : 1);
      st.forEach(function (e) { var n = e.querySelector('.rc-node').getBoundingClientRect(); e.classList.toggle('on', n.top + n.height / 2 <= lim + 2); });
    }
    window.addEventListener('scroll', function () { if (!tk) { tk = true; requestAnimationFrame(upd); } }, { passive: true });
    window.addEventListener('resize', upd);
    upd();
  }
  function baSlide(h) {
    var rg = h.querySelector('.ba-range'); if (!rg) return;
    function set(v) { h.style.setProperty('--x', v + '%'); }
    rg.addEventListener('input', function () { h.dataset.touched = '1'; set(rg.value); });
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;
    set(88); rg.value = 88;
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) {
      if (!e.isIntersecting) return; io.disconnect();
      var t0 = null, a = 88, b = 50, D = 1600;
      function step(t) { if (h.dataset.touched) return; if (!t0) t0 = t; var k = Math.min(1, (t - t0) / D); k = 1 - Math.pow(1 - k, 3); var v = a + (b - a) * k; set(v.toFixed(2)); rg.value = Math.round(v); if (k < 1) requestAnimationFrame(step); }
      setTimeout(function () { requestAnimationFrame(step); }, 500);
    }); }, { threshold: 0.35 });
    io.observe(h);
  }
  function csFilter(h) {
    var bs = Array.prototype.slice.call(h.querySelectorAll('.cs-f')), it = Array.prototype.slice.call(h.querySelectorAll('.cs-it'));
    bs.forEach(function (b) { b.setAttribute('aria-pressed', b.classList.contains('on') ? 'true' : 'false'); b.addEventListener('click', function () {
      var f = b.getAttribute('data-f');
      bs.forEach(function (x) { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      it.forEach(function (e, k) { var show = f === 'all' || e.getAttribute('data-e') === f; e.classList.toggle('cs-hide', !show); e.classList.remove('cs-in'); if (show) { void e.offsetWidth; e.style.animationDelay = (Math.min(k, 8) * 0.03) + 's'; e.classList.add('cs-in'); } });
    }); });
  }
  function matrix() {
    arm(document.getElementById('maturite'), null, 'mx-armed', 'mx-go', 0.2);
    var m = document.getElementById('mission'), b = m && m.querySelector('.il-box');
    if (b) arm(m, b, 'il-armed', 'il-go', 0.25);
    var h8 = document.getElementById('hz8');
    if (h8) hzScrub(h8);
    var x8 = document.getElementById('hx8');
    if (x8) hxAnim(x8);
    var p8 = document.getElementById('pw8');
    if (p8) pwAnim(p8);
    var i8 = document.getElementById('iw8');
    if (i8) pwAnim(i8);
    var w8 = document.getElementById('hw8');
    if (w8) hwAnim(w8);
    iaScrub();
    var k8 = document.getElementById('stk8');
    if (k8) { if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) k8.classList.add('st-go'); else arm(k8, null, 'st-armed', 'st-go', 0.3); }
    clampPanels();
    var cs8 = document.getElementById('stories');
    if (cs8) csFilter(cs8);
    var b8 = document.getElementById('ba8');
    if (b8) baSlide(b8);
    var r8 = document.getElementById('rc8');
    if (r8) rcScrub(r8);
    var d8 = document.getElementById('day8');
    if (d8) dayAnim(d8);
    var g8 = document.getElementById('gap8');
    if (g8) gapScrub(g8);
  }
  if (document.readyState !== 'loading') matrix(); else document.addEventListener('DOMContentLoaded', matrix);
  window.__ocoboNav = init;
  window.addEventListener('load', center);
  if (document.readyState !== 'loading') init(); else document.addEventListener('DOMContentLoaded', init);
})();
