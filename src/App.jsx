import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Clases from "./pages/Clases";
import ClaseDetalle from "./pages/ClaseDetalle";
import Sobre from "./pages/Sobre";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clases" element={<Clases />} />
          <Route path="/clases/:id" element={<ClaseDetalle />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
