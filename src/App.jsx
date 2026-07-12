import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MouseGlow } from "./components/MouseGlow";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Certificates } from "./pages/Certificates";
import { Hackathons } from "./pages/Hackathons";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="relative bg-grid min-h-screen text-white overflow-hidden">
        <MouseGlow className="pointer-events-none" />
        
        <div className="glow glow-blue top-[-100px] left-[-100px]" />
        <div className="glow glow-purple bottom-[-150px] right-[-100px]" />
        <div className="glow glow-cyan top-[40%] left-[40%]" />

        <div className="relative z-10">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;