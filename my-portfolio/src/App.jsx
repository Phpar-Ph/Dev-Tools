import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Home";
import Tools from "./pages/Tools";
import Contact from "./pages/About";
import { Routes, Route } from "react-router";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
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
