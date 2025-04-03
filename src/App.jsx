import React from "react";
import Hero from "./pages/Home";
import Tools from "./pages/Tools";
import Contact from "./pages/About";
import { Routes, Route } from "react-router";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
