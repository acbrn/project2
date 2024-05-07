import './App.css';
import { Header, Footer, Nav } from './components';
import { Home, Projects, Contact } from './views';
import { useEffect } from 'react';

const App = () => {
  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  }

  return (
    <div>
      <ScrollToTop />
      <Nav />
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />  
    </div>
  );
}

export default App;
