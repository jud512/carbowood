import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Carbowood from "./pages/carbowood/Carbowood";
import Reference from "./pages/reference/Reference";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
import Gallery from "./pages/gallery/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carbowood" element={<Carbowood />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
