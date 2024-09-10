import React from "react";
import DisclaimerPage from "./components/about/DisclaimerPage";
import { Router, Route, Routes, Link, Outlet } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutFooter from "./components/about/AboutFooter";
import Header from "./components/header/Header";
import Services from "./pages/Services";
import ScrollProgressBar from "./components/header/ScrollProgressBar";
import Home from "./pages/Home";

const Layout = () => (
  <div className="">
    <Header />
    <ScrollProgressBar />
    <main className="">
      <Outlet />
    </main>
    <AboutFooter />
  </div>
);

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
