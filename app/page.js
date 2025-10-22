'use client'
import { MoveRight } from 'lucide-react';
import Position from '@/components/Position'
import RealisticCustomerMachine from "@/components/RealisticCustomerMachine"
import Type from "@/components/Type"
import LogoMarquee from '@/components/LogoMarquee'
import Navbar from '@/components/Navbar';
export default function HomePage() {

  const logos = [
    '/brands/1.png',
    '/brands/2.png',
    '/brands/3.png',
    '/brands/4.png',
    '/brands/5.png',
    '/brands/6.png',
    '/brands/7.png',
    '/brands/8.png'
  ]
  return (
    <>
      <Navbar action={'#journey'} target={'_self'} />
      <div className="xl:h-auto md:min-h-screen relative ">




        <main className="relative  z-50">
          <div
            className="relative  bg-black w-full min-h-screen flex items-center justify-center font-poppins overflow-hidden"

          >
            {/* <div className="absolute w-full h-[200px] bg-gradient-to-t   z-[100] from-black via-black/50 to-transparent bottom-0 left-0">

            </div> */}
            <div
              className="absolute inset-0 z-0 blur-3xl"
              style={{
                background: `
            radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.4) 10%, transparent 40%), /* Indigo glow bottom-left */
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.4) 10%, transparent 40%), /* Pink glow top-right */
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%) /* Central dark fade */
          `,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>

            <div className=" mx-auto lg:px-10 pt-[80px] md:pt-0 xl:px-0 w-full px-2 min-h-screen flex items-center justify-center relative z-[100]">
              <div className="space-y-4 md:space-y-6 xl:space-y-[2vw] px-4 md:px-0"> {/* Added padding for smaller screens */}
                <div className="space-y- md:space-y-4  flex items-center justify-center flex-col">
                  <h1 className="md:text-7xl text-4xl xl:text-[5vw] text-center  font-poppins">
                    <span className="block text-white font-medium">Transform Your Ad Spend </span>
                    <span className="flex md:flex-row flex-col items-center md:gap-4 justify-center">
                      <span className="font-medium text-white">Into Real</span>
                      <span
                        className="flex md:flex-row flex-col items-center gap-2 justify-center"
                        style={{
                          backgroundImage: 'linear-gradient(to right, #6366f1, #ec4899)', // Indigo to Pink
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          color: 'transparent',
                        }}
                      >
                        <Type data={['Customer', 'Revenue', 'Profit']} loop={true} speed={100} delay={100} style="" />
                      </span>
                    </span>
                  </h1>
                </div>

                {/* <div className="space-y-2 md:space-y-10 mx-auto"> */}
                <h2 className="text-xl font-raleway md:text-[40px] xl:text-[2.5vw] font-poppins text-center text-white/95">And Bring The Growth You Deserve</h2>
                <p className="text-sm md:text-lg xl:text-[1.5vw] font-light tracking-wide text-center w-[95%] md:w-[65%] mx-auto text-white/80 font-roboto ">
                  We’ll pinpoint where you are in your advertising journey <br className='hidden md:block ' /> and deliver customized solutions that maximize your ROI
                </p>
                {/* </div> */}

                <div className="w-full flex item-center justify-center">

                  <a href='https://calendly.com/rohittangri/just-starting-out-clone' target='_blank' className="bg-linear-to-r  cursor-pointer relative z-100 mx-auto inline-flex justify-between gap-[1.1vw] items-center  from-[#6366f1]/80 to-[#ec4899]/80 text-white px-[2vw] py-[1vw] rounded-full text-[1.1vw] font-medium font-poppins  transition-all duration-300 ease-in-out shadow-lg">
                    Work With Us <MoveRight className='size-[1.4vw]' />
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2  -translate-x-1/2 bottom-0 w-full  mx-auto ">
              <LogoMarquee logos={logos} speed={40} />

              <div className="absolute left-0  z-100 top-0 h-full w-[10%] xl:w-[20vw]  bg-linear-to-r from-black from-20% via-black/50 to-transparent pointer-events-none "></div>
              <div className="absolute right-0  z-100 top-0 h-full w-[10%] xl:w-[20vw]  bg-linear-to-l  from-black via-black/50 to-transparent pointer-events-none "></div>
            </div>
          </div>

          <RealisticCustomerMachine />

          <section
            className="relative bg-black font-poppins w-full min-h-screen xl:h-[70vh] flex items-center justify-center overflow-hidden"

          >
            {/* Overlay div for the elegant gradient effect */}
            {/* Using multiple radial/linear gradients to create a subtle, layered color blend */}
            <div className="absolute w-full h-[200px] bg-gradient-to-b   z-[100] from-black via-black/40 to-transparent top-0 left-0">
            </div>

            <div className="absolute w-full h-[200px] bg-gradient-to-t   z-[100] from-black via-black/50 to-transparent bottom-0 left-0">
            </div>

            <div
              className="absolute inset-0 z-0"
              style={{
                background: `
            radial-gradient(circle at 5% 5%, rgba(255, 255, 255, 0.11) 0%, transparent 60%), /* Darker glow top-right */

            radial-gradient(circle at 10% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 100%), /* Darker glow top-right */

            radial-gradient(circle at 10% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 70%), /* Darker glow mid-left */
            radial-gradient(circle at 80% 30%, rgba(99, 102, 241, 0.4) 0%, transparent 60%), /* Darker glow top-right */
            radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%)

          `,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>

            {/* Giant background text with fade effect */}
            <h1
              className="absolute text-[120px] text-stroke text-white/5  select-non lg:text-[350px] xl:text-[25vw] font-bold select-none z-10"


            >
              $600K
            </h1>

            {/* Foreground content */}
            <div className="z-10 text-center space-y-1 md:space-y-3 text-lg md:text-4xl xl:text-[2.6vw]"> <h2 className="text-white "> Get Exposure has profitably spent over </h2> <h2 className=" "> <span className="text-gradient-animated font-semibold"> $600K in Ad spend </span>{' '} <span className="text-white"> and generated over $2.4M.</span> </h2>
            </div>
          </section>

          {/* Enhanced Where Are You Section */}
          <div className="relative  ">
            {/* <div className="absolute top-0 left-0 right-0 h-[200px]  bg-gradient-to-b from-[#090916]/ to-transparent z-10" /> */}

            <div id="solutions" className="mx-auto  px-6 mb:py-16 lg:py-16 text-center">
              <h2 id="journey" className=" text-white mb-8 font-medium font-poppins md:text-5xl lg:text-7xl xl:text-[4.5vw] ">
                <span className="">Where Are You in Your</span> <br /> <span className=" font-roboto tracking-wide font-light  " style={{
                  backgroundImage: 'linear-gradient(to right, #6366f1, #ec4899)', // Indigo to Pink
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}>Advertising Journey</span>
              </h2>
              <p className="text-sm md:text-lg xl:text-[1.3vw] mt-[2vw] font-light tracking-wide text-center   mx-auto text-[#a8a7a7] font-roboto  lg:mb-12">
                We start by pinpointing exactly where you are in your advertising journey. <br /> Every business is unique, and
                your challenges require tailored solutions.
              </p>
            </div>



            <Position />

          </div>


        </main>
      </div>
    </>

  )
}
