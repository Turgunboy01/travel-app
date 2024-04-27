import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import TourPage from "./pages/tourPage/TourPage";
import TourDetails from "./pages/tourDetails/TourDetails";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tourPage" element={<TourPage />} />
          <Route path="/tourDetails/:id" element={<TourDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
