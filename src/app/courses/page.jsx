import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import OurServices from "@/components/OurServices";
import Pricing from "@/components/Pricing";
import Section from "@/components/Section";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header />
      <Section
        className="pt-[14rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
      ></Section>
      <div className="container">
        <OurServices />
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
