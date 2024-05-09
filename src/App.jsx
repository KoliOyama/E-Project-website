import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Learn from "./pages/learn/Learn";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import GeoLocation from "./feature/geo-location/GeoLocation";
import Admin from "./pages/admin/admin";

function App() {
  return (
    <div className="app">
      <GeoLocation />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
