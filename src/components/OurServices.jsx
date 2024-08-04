"use client";
import Section from "./Section";
import { smallSphere, stars, service3 } from "../../public/assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import Button from "./Button";
import Image from "next/image";

import { useState } from "react";
const OurServices = () => {
  const serviceList = [
    "Web Designing",
    "Web Development",
    "Search Engine Optimization",
    "Logo Designing",
  ];

  const servicesContent = [
    {
      id: "0",
      title: "Web Designing",
      img1: service3,
      img2: service3,
      imgTilte1: "Web Designing",
      imgTilte2: "App Designing",
      desc: `In today’s digital environment, an online presence is essential for businesses of all sizes. A well-designed website not only acts as a digital storefront, it also builds trust, attracts potential customers, and encourages business ideas. If you offer web design services, you can become a marketing service leader by leveraging the power of an online presence.`,
    },
    {
      id: "1",
      title: "Web Development",
      img1: service3,
      img2: service3,
      imgTilte1: "Web Development",
      imgTilte2: "Mobile Development",
      desc: `We prioritize developing a website focusing on User Xperience (UX), mobile responsiveness,
and SEO friendliness, that not only looks great but performs well. Transform and make your
online business powerful in terms of engagement, growth, great ROI, and success.`,
    },
    {
      id: "2",
      title: "Search Engine Optimization",
      img1: service3,
      img2: service3,
      imgTilte1: "Search Engine Optimization",
      imgTilte2: "Search Engine Optimization",
      desc: `By optimizing your website, we drive targeted traffic, turning visitors into valuable leads. Our
strategic approach enhances your brand’s credibility and trustworthiness, leading to higher
engagement and conversion rates. With continuous improvements and adaptive strategies, we
ensure your business stays competitive and relevant in the ever-evolving digital landscape.`,
    },

    {
      id: "3",
      title: "Logo Designing",
      img1: service3,
      img2: service3,
      imgTilte1: "Logo Designing",
      imgTilte2: "Logo Designing",
      desc: `Using a blend of creativity and strategic thinking, we create logos that stand out and leave a
lasting impression. Whether you're looking for something modern and sleek or classic and
timeless, we customize our designs to align perfectly with your brand’s identity. With GenV’s
designed logo, you get a distinctive, professional brand image that sets you apart from the
competition and resonates with your audience`,
    },
  ];

  const [selectedService, setSelectedService] = useState("Web Designing");
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <Heading tag="Our Services" title="Get started with GenV" />
        <div
          className="our-ser text-center lg:mx-32  md:flex max-lg:flex-wrap justify-between px-3 py-3 mb-7 content-center items-center nav nav-pills case-studio-tabs border  rounded-3xl border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 backdrop-blur-sm"
          id="myTab"
          role="tablist"
        >
          {/* <div className="px-4 py-4 text-black bg-white rounded-2xl">Development</div>
          <div className="px-2 py-2">Search Engine Optimization</div>
          <div  className="px-2 py-2">IT Support</div>
          <div  className="px-2 py-2">Web Designing</div>
          <div className="px-2 py-2 pr-4">Digital Marketing</div> */}
          {serviceList.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer ${
                selectedService === item
                  ? "px-4 py-4 text-black bg-white rounded-2xl"
                  : "px-4 py-4"
              }`}
              onClick={() => setSelectedService(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="relative">
          {servicesContent.map(
            (item) =>
              selectedService === item.title && (
                <div
                  className="flex flex-wrap lg:flex-nowrap gap-5 relative z-1"
                  key={item.id}
                >
                  <div className="border border-n-1/10 rounded-3xl lg:w-2/3 w-full">
                    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
                      <div className="m-4 mr-2 bg-n-7 rounded-3xl relative w-full lg:w-auto">
                        <Image
                          src={item.img1}
                          className="w-full h-full object-cover img-sec rounded-3xl relative mt-24"
                          width={380}
                          height={400}
                          alt="Scary robot"
                        />
                        <div className="absolute top-4 left-5 bg-gradient-to-b from-slate-50/15 to-slate-50/5 backdrop-blur-sm p-3 rounded-2xl">
                          {item.imgTilte1}
                        </div>
                      </div>
                      <div className="m-4 ml-2 bg-n-7 rounded-3xl relative w-full lg:w-auto">
                        <Image
                          src={item.img2}
                          className="w-full h-full object-cover img-sec rounded-3xl relative mt-24"
                          width={380}
                          height={400}
                          alt="Scary robot"
                        />
                        <div className="absolute top-4 left-5 bg-gradient-to-b from-slate-50/15 to-slate-50/5 backdrop-blur-sm p-3 rounded-2xl">
                          {item.imgTilte2}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-n-1/10 rounded-3xl lg:w-1/3 w-full">
                    <div className="p-10">
                      <h4 className="h4 mb-4">{item.title}</h4>
                      <p className="body-2 mb-[2rem] text-n-3">{item.desc}</p>
                      <Button className="cursor-pointer">Read More</Button>
                    </div>
                  </div>
                </div>
              )
          )}

          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default OurServices;
