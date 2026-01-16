
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsletterWidget from './components/NewsletterWidget';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Method from './pages/Method';
import Studio from './pages/Studio';
import Partners from './pages/Partners';
import Stories from './pages/Stories';
import StoryDetail from './pages/StoryDetail';
import About from './pages/About';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import Resources from './pages/Resources';
import Podcast from './pages/Podcast';
import ArticleDetail from './pages/ArticleDetail';
import WebinarDetail from './pages/WebinarDetail';
import DesignSystem from './pages/design-system';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-ocobo-dark font-sans selection:bg-ocobo-yellow selection:text-ocobo-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offer" element={<Services />} />
            <Route path="/method" element={<Method />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/technology" element={<Partners />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:id" element={<StoryDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog/:slug" element={<ArticleDetail />} />
            <Route path="/webinar/:slug" element={<WebinarDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/design-system" element={<DesignSystem />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <NewsletterWidget />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
