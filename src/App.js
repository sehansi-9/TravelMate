import "./App.css";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import Narita from './pages/Narita'
import Rio from './pages/Rio'
import Amsterdam from './pages/Amsterdam'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/book/narita" element={<Narita />} />
        <Route path="/book/rio" element={<Rio />} />
        <Route path="/book/amstdm" element={<Amsterdam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
