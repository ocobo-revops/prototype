import React from 'react';
import { Route, HashRouter as Router, Routes, useLocation } from 'react-router';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import NewsletterWidget from './components/NewsletterWidget';
import About from './pages/About';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';
import Home from './pages/Home';
import JobDetail from './pages/JobDetail';
import Jobs from './pages/Jobs';
import Method from './pages/Method';
import Partners from './pages/Partners';
import Podcast from './pages/Podcast';
import Resources from './pages/Resources';
import Services from './pages/Services';
import Stories from './pages/Stories';
import StoryDetail from './pages/StoryDetail';
import Studio from './pages/Studio';
import WebinarDetail from './pages/WebinarDetail';

const ScrollToTop = () => {
	const { pathname: _ } = useLocation();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return null;
};

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
