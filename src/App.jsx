import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Clases from "./pages/Clases";
import Sobre from "./pages/Sobre";
import Contacto from "./pages/Contacto";
import ScrollToTop from "./components/ScrollToTop";
import Funcional from "./pages/clases/Funcional";
import Cardio from "./pages/clases/Cardio";
import Yoga from "./pages/clases/Yoga";
import Trekking from "./pages/clases/Trekking";
import Personalizadas from "./pages/clases/Personalizadas";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/clases/funcional" element={<Funcional />} />
        <Route path="/clases/cardio" element={<Cardio />} />
        <Route path="/clases/yoga" element={<Yoga />} />
        <Route path="/clases/trekking" element={<Trekking />} />
        <Route path="/clases/personalizadas" element={<Personalizadas />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
