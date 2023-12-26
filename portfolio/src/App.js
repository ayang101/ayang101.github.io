import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';


function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </main>
  );
}

export default App;
