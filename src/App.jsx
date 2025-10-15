import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// SPA sections
import About from './components/Homepage.jsx';
import Projects from './components/Projects.jsx';
import Stats from './components/Stats.jsx';
import Technologies from './components/Technologies.jsx';
import Contact from './components/Contact.jsx';

// Router pages
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ProjectDetail from "./pages/ProjectDetail.jsx"

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* SPA section*/}
        <Route
        path="/"
        element={
          <>
          <About />
          <Projects />
          <Stats />
          <Technologies />
          <Contact />
          </>
        }
        />

        {/* Router-based extra pages */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
      
    </Router>

  );
}
