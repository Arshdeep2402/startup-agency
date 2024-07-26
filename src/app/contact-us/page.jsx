import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
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
      >
        <div className="container">
          <Heading tag="Contact Us" title="Feel free to ask any query !" />

          <div class="flex pb-12 items-center justify-start">
            <div class="mx-auto w-full max-w-lg">
              <form action="" class="mt-10">
                <div class="grid gap-6 sm:grid-cols-2">
                  <div class="relative z-0">
                    <input
                      type="text"
                      name="name"
                      class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-purple-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 peer-focus:dark:text-purple-500">
                      Your name
                    </label>
                  </div>
                  <div class="relative z-0">
                    <input
                      type="text"
                      name="email"
                      class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-purple-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    />
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 peer-focus:dark:text-purple-500">
                      Your email
                    </label>
                  </div>
                  <div class="relative z-0 col-span-2">
                    <textarea
                      name="message"
                      rows="5"
                      class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-purple-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    ></textarea>
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-600 peer-focus:dark:text-purple-500">
                      Your message
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="mt-5 rounded-md bg-purple-600 px-10 py-2 text-black"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Page;
