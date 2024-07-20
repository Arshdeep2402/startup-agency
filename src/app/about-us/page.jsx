'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { curve, heroBackground, robot, check2, grid, loading1 } from '../../../public/assets'
import Button from '@/components/Button'
import Section from "@/components/Section";
import { BackgroundCircles, BottomLine,  } from '@/components/design/Hero'
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from '@/components/Generating'
import CompanyLogos from '@/components/CompanyLogos'
import Image from "next/image";

import Heading from '@/components/Heading'
import TagLine from '@/components/Tagline'
import { intro } from '@/constants'
import { Gradient } from '@/components/design/Roadmap'

const page = () => {

    const parallaxRef = useRef(null);

  return (
    <div>
        <Header />


        
        <Section className="overflow-hidden" id="roadmap">
            <div className="container md:pb-10">
            <Heading tag="Our Team" title="What are We !" />

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                {intro.map((item) => {
                const status = item.status === "done" ? "Done" : "In progress";

                return (
                    <div
                    className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                        item.colorful ? "bg-conic-gradient" : "bg-n-6"
                    }`}
                    key={item.id}
                    >
                    <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                        <div className="absolute top-0 left-0 max-w-full">
                        <Image
                            className="w-full"
                            src={grid}
                            width={550}
                            height={550}
                            alt="Grid"
                        />
                        </div>
                        <div className="relative z-1">
                        <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                            {/* <TagLine>{item.date}</TagLine> */}

                            {/* <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                            <Image
                                className="mr-2.5"
                                src={item.status === "done" ? check2 : loading1}
                                width={16}
                                height={16}
                                alt={status}
                            />
                            <div className="tagline">{status}</div>
                            </div> */}
                        </div>

                        <div className="mb-10 -my-10 -mx-15">
                            <Image
                            className="w-full"
                            src={item.imageUrl}
                            width={628}
                            height={426}
                            alt={item.title}
                            />
                        </div>
                        <h4 className="h4 mb-4">{item.title}</h4>
                        <p className="body-2 text-n-4">{item.text}</p>
                        </div>
                    </div>
                    </div>
                );
                })}

                <Gradient />
            </div>

            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                <Button href="/">Contact Us</Button>
            </div>
            </div>
        </Section>



        <Footer />
    </div>
  )
}

export default page