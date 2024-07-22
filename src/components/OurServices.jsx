import Section from "./Section";
import { smallSphere, stars } from "../../public/assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import Button from "./Button";
import Image from "next/image";
import { service3 } from "../../public/assets";
const OurServices = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        {/* <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div> */}

        <Heading
          tag="Our Services"
          title="Get started with NextGen"
        />
 <div class=" our-ser lg:mx-32 flex max-lg:flex-wrap justify-between px-3 py-3 mb-7 content-center items-center nav nav-pills case-studio-tabs border border-n-1/10 rounded-3xl   border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 backdrop-blur-sm " id="myTab " role="tablist">
              <div className="px-4 py-4 text-black bg-white rounded-2xl">Development</div>
              <div>Search Engine Optimization
              </div>
              <div>It support</div>
              <div>Web desgining</div>
              <div className="pr-4">Digital Marleting </div>
            </div>
        <div className="relative">
          {/* <div className="flex gap-[1rem] max-lg:flex-wrap">
           <div className="w-50">dagag</div> 
           <div className="w-50">sfgs</div> 
            </div> */}

          
           
          

          <div className="flex max-lg:flex-wrap gap-5 relative z-1 ">
            <div className="border border-n-1/10 rounded-3xl col-span-1" style={{ flex: '0 0 65%', maxWidth: '100%' }}>

              <div className="flex items-center justify-center">
                <div className="m-4 mr-2 bg-n-7 rounded-3xl relative">
                  
                <Image
                  src={service3}
                  className=" w-full h-full object-cover img-sec rounded-3xl relative mt-24"
                  width={380}
                  height={400}
                  alt="Scary robot"
                />
                <div className=" absolute top-4 left-5 bg-gradient-to-b from-slate-50/15 to-slate-50/5 backdrop-blur-sm p-3 rounded-2xl">Web Development</div>
                </div>
                
                <div className="m-4 ml-2 bg-n-7 rounded-3xl relative">
                <Image
                  src={service3}
                  className=" w-full h-full object-cover img-sec  rounded-3xl relative mt-24"
                  width={380}
                  height={400}
                  alt="Scary robot"
                />
                <div className=" absolute top-4 left-5 bg-gradient-to-b from-slate-50/15 to-slate-50/5 backdrop-blur-sm p-3 rounded-2xl">Mobile Development</div>
                </div>
              </div>
            </div>
            <div className="border border-n-1/10 rounded-3xl col-span-1" style={{ flex: '0 0 34%', maxWidth: '100%' }}>

              <div className=" p-15 p-10">

                {/* <div className="pb-7"><Image
                  src={"https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg"}
                  className=" object-cover"
                  width={50}
                  height={50}
                  alt="Scary robot"
                />
                </div> */}
                <h4 className="h4 mb-4">Development</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.
                </p>
                <Button>Read More</Button>
                {/* <div className="text-sm/[17px] leading-5 text-[#aaa8b0]">Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.</div> */}
              </div>
            </div>
          </div>

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



