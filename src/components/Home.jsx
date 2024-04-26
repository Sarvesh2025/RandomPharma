import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <div className="home-page p-6">
      <Header />
      <Welcome />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default HomePage;
