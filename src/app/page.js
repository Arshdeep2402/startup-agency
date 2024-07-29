import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import Services from "@/components/Services";
import React from "react";
import ButtonGradient from "../../public/assets/svg/ButtonGradient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import OurServices from "@/components/OurServices";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <OurServices />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
