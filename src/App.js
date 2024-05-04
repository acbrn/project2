// Code: Main App component
import './App.css';
import { Header, Footer, Nav } from './components';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Home, Projects, Contact, About } from './views';
import { useEffect } from 'react';

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />  
    </Router>
  );
}


export default App;
