import {Routes,Route} from "react-router-dom";  
import ScrollToTop from "./components/ScrollToTop";


import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

import Home from "./pages/Home";
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
function App() {
  return (
    <>
      <form name="contact" netlify hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <select name="projectType"></select>
        <textarea name="message"></textarea>
      </form>

      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
