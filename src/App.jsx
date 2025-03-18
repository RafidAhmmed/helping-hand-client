import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import News from './pages/News/News.jsx';
import NewsDetail from './pages/News/NewsDetail.jsx';
import Projects from './pages/Projects/Projects.jsx';
import ProjectDetail from './pages/Projects/ProjectDetail.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import GazaGenocide from './pages/GazaGenocide/GazaGenocide.jsx';
import Donation from './pages/Donation/Donation.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/newsDetail/:id" element={<NewsDetail/>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gaza-genocide" element={<GazaGenocide />} />
            <Route path="/donation" element={<Donation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 