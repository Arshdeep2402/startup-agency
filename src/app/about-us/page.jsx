'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { grid } from '../../../public/assets'
import Button from '@/components/Button'
import Section from "@/components/Section";

import Image from "next/image";

import Heading from '@/components/Heading'
import { intro } from '@/constants'
import { Gradient } from '@/components/design/Roadmap'

import Arrow from '../../../public/assets/svg/Arrow'
import { GradientLight } from '@/components/design/Benefits'
import ClipPath from '../../../public/assets/svg/ClipPath'
import { benefits } from '@/constants'


const page = () => {
    
  return (
    <div>
        <Header />

        <section className="container mx-auto px-5 md:px-10 h-full md:h-screen lg:pt-8 md:pt-24 sm:pt-32 pt-28">
            <div className="flex items-center relative md:flex-row flex-col gap-10 md:gap-0">
                <div className="flex-1 flex flex-col gap-5 sm:gap-8 md:gap-10 z-[1]">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-[#E6B9FF] to-[#9E89FF] capitalize text-5xl sm:text-6xl lg:text-7xl font-light">
                    GenV Webseter, we are
                </h1>
                <p className="text-xs sm:text-sm font-[300] leading-loose">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                    explicabo eius modi sunt quam nisi ea obcaecati beatae, iusto eaque
                    dolorum, qui, molestias vitae laboriosam.
                </p>
                <button type="button" className="flex items-center -ml-7">
                    <Image
                    src="/play.png"
                    width={80}
                    height={80}
                    alt="play button"
                    className="mb-0 w-[80px] h-[50px] object-top object-cover"
                    />
                    <div className="text-left mt-2">
                    <p className="font-semibold capitalize text-sm">
                        let's get started!
                    </p>
                    <p className="text-xs mt-1">Watch quick demo video</p>
                    </div>
                </button>
                </div>
                <div className="flex-1">
                    <Image
                        src="/hero.png"
                        width={450}
                        height={450}
                        alt="NFT"
                        className="object-contain mx-auto max-w-[350px] lg:max-w-[450px]"
                    />
                </div>
            </div>
            <Image
                src="/pink-gradients.png"
                width={500}
                height={500}
                alt="gradients"
                className="absolute top-0 left-0 -z-10"
            />
            <Image
                src="/blue-gradients.png"
                width={500}
                height={500}
                alt="gradients"
                className="absolute top-0 left-0 -z-20"
            />
            <Image
                src="/bg.png"
                width={500}
                height={500}
                alt="gradients"
                className="absolute top-0 left-0 -z-50 w-full h-[135%] xs:h-[130%] sm:h-[140%] md:h-screen"
            />
        </section>

        <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Discover All Features"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
        </Section>

        <Section  id="roadmap" className="pt-[14rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
        >
            <div className="container md:pb-10">
            <Heading tag="Our Team" title="Who are We !" />

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