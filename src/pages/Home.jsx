import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";
import Banner from "../partials/Banner";
import Problems from "../partials/Problems";
import CTA from "../partials/cta";
import Navbar from "../partials/navbar";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      {/* <Header /> */}
      <main className="flex-grow">
        <HeroHome />
        <Problems />
        <FeaturesBlocks />
        <Testimonials />
        {/* <Newsletter /> */}
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
