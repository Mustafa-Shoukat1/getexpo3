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

            <div className=" mx-auto lg:px-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:px-0 w-full px-2 min-h-screen flex items-center justify-center relative z-[100] pb-32 md:pb-40">
              <div className="space-y-6 md:space-y-8 xl:space-y-[3vw] px-4 md:px-0"> {/* Increased spacing */}
                <div className="space-y-4 md:space-y-6  flex items-center justify-center flex-col">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[5.5vw] text-center  font-poppins leading-tight">
                    <span className="block md:inline text-white font-semibold uppercase md:normal-case">Transform Your </span>
                    <span className="block md:inline text-white font-semibold uppercase md:normal-case">Ad Spend </span>
                    <span className="flex flex-row items-center gap-2 md:gap-4 justify-center">
                      <span className="font-semibold text-white uppercase md:normal-case">Into Real</span>
                      <span
                        className="flex flex-row items-center gap-2 justify-center font-semibold uppercase md:normal-case"
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

                {/* Sub-headline with improved spacing */}
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[2.6vw] font-poppins text-center text-white/95 font-normal leading-relaxed px-2">And Bring The Growth You Deserve</h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.4vw] font-normal tracking-wide leading-relaxed text-center w-[95%] md:w-[85%] lg:w-[65%] mx-auto text-white/75 font-roboto px-2">
                  We&apos;ll pinpoint where you are in your advertising journey <br className='hidden md:block ' /> and deliver customized solutions that maximize your ROI
                </p>

                <div className="w-full flex item-center justify-center pt-4 pb-8 md:pb-12 px-4">
                  <a href='https://calendly.com/rohittangri/just-starting-out' target='_blank' className="group relative inline-flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 md:px-10 md:py-5 xl:px-[2.5vw] xl:py-[1.2vw] bg-white hover:bg-gray-200 text-black font-medium text-sm sm:text-base md:text-lg xl:text-[1.2vw] transition-all duration-300 overflow-hidden">
                    <span className="relative z-10">Work With Us</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                      <MoveRight className='w-4 h-4 sm:w-5 sm:h-5 xl:w-[1.4vw] xl:h-[1.4vw]' />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2  -translate-x-1/2 bottom-0 w-full mx-auto py-4 md:py-6">
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
              className="absolute text-[80px] sm:text-[120px] md:text-[200px] lg:text-[300px] xl:text-[25vw] text-stroke text-white/5 select-none font-bold z-10"


            >
              $600K
            </h1>

            {/* Foreground content */}
            <div className="z-10 text-center space-y-2 md:space-y-4 px-4 text-base sm:text-xl md:text-3xl lg:text-5xl xl:text-[2.8vw] leading-relaxed"> <h2 className="text-white font-light"> Get Exposure has profitably spent over </h2> <h2 className=" "> <span className="text-white font-semibold"> $600K in Ad spend </span>{' '} <span className="text-gray-300 font-light"> and generated over $2.4M.</span> </h2>
            </div>
          </section>

          {/* Enhanced Where Are You Section */}
          <div className="relative  ">
            {/* <div className="absolute top-0 left-0 right-0 h-[200px]  bg-gradient-to-b from-[#090916]/ to-transparent z-10" /> */}

            <div id="solutions" className="mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24 text-center">
              <h2 id="journey" className="text-white mb-6 md:mb-8 font-semibold font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[4.8vw] leading-tight px-2">
                <span className="">Where Are You in Your</span> <br /> <span className="font-poppins tracking-wide font-normal text-gray-300">Advertising Journey</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.4vw] mt-4 md:mt-[3vw] font-light tracking-wide leading-relaxed text-center mx-auto text-gray-400 font-roboto lg:mb-16 max-w-4xl px-2">
                We start by pinpointing exactly where you are in your advertising journey. <br className="hidden md:block" /> Every business is unique, and
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
