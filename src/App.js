import React from "react";
import "./App.css";
import Navbar from "./Componentler/Navbar";
import Hero from "./Componentler/Hero";
import Features from "./Componentler/Features";
import Validation from "./Componentler/Validation";
import Manager from "./Componentler/Manager";
import Marketer from "./Componentler/Marketer";
import Need from "./Componentler/Need";
import Marketing from "./Componentler/Marketing";
import Footer from "./Componentler/Footer";
import Footerfinish from "./Componentler/Footerfinish";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Validation></Validation>
      <Manager></Manager>
      <Marketer></Marketer>
      <Need></Need>
      <Marketing></Marketing>
      <Footer></Footer>
      <Footerfinish></Footerfinish>
    </div>
  );
}

export default App;
