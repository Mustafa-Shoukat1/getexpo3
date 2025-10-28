import React from 'react'
import Link from "next/link"


const Footer = () => {
    return (
        <footer className="px-4 sm:px-6 md:px-8 lg:px-[10vw] relative bg-[black] backdrop-blur-2xl z-10 font-raleway border-white/5 mt-12 sm:mt-16 md:mt-20 lg:mt-[10vw]">

            <div className="relative z-100 font-poppins w-full mx-auto py-8 sm:py-10 md:py-12">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:gap-0">
                    
                    <p className="text-white w-full lg:w-[40%] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[2vw] font-raleway font-normal mb-4 lg:mb-0">
                        Transform your ad spend into real customers with our data-driven approach to digital advertising.
                    </p>
                    
                    {/* Mobile: 2 columns layout, Desktop: 3 columns in a row */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:flex w-full lg:w-auto items-start justify-start gap-6 sm:gap-8 lg:ml-[6vw] lg:gap-[2vw]'>

                        <div>
                            <h4 className="text-white font-medium font-raleway text-base sm:text-lg md:text-xl lg:text-[1.5vw] xl:text-[2vw] mb-3 sm:mb-4 border-b inline-block">Services</h4>
                            <ul className="space-y-2 sm:space-y-3 lg:space-y-[1.4vw] text-xs sm:text-sm md:text-base lg:text-[0.9vw] xl:text-[1vw] text-white/80">
                                <li>Campaign Scaling</li>
                                <li>Performance Optimization</li>
                                <li>Campaign Setup</li>
                                <li>Creative Development</li>
                                <li>Cross-Channel Integration</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-medium font-raleway text-base sm:text-lg md:text-xl lg:text-[1.5vw] xl:text-[2vw] mb-3 sm:mb-4 border-b inline-block">Case Studies</h4>
                            <ul className="items-start flex flex-col gap-2 sm:gap-3 lg:gap-[1.4vw] text-xs sm:text-sm md:text-base lg:text-[0.9vw] xl:text-[1vw] text-white/80">
                                <li><Link href="/CaseStudy/case1" className='uppercase hover:text-white transition-colors'>Case Study 1</Link></li>
                                <li><Link href="/CaseStudy/case2" className='uppercase hover:text-white transition-colors'>Case Study 2</Link></li>
                                <li><Link href="/CaseStudy/case3" className='uppercase hover:text-white transition-colors'>Case Study 3</Link></li>
                                <li><Link href="/CaseStudy/case4" className='uppercase hover:text-white transition-colors'>Case Study 4</Link></li>
                                <li><Link href="/CaseStudy/case5" className='uppercase hover:text-white transition-colors'>Case Study 5</Link></li>
                            </ul>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="text-white font-medium font-raleway text-base sm:text-lg md:text-xl lg:text-[1.5vw] xl:text-[2vw] mb-3 sm:mb-4 border-b inline-block">Contact Us</h4>
                            <ul className="space-y-2 sm:space-y-3 lg:space-y-[1.4vw] text-xs sm:text-sm md:text-base lg:text-[0.9vw] xl:text-[1vw] text-white/80">
                                <li>Vancouver, BC, Canada</li>
                                <li>+1 778 712 3301</li>
                                <li>team@getexposure.ca</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="border-t text-xs sm:text-sm md:text-base lg:text-lg xl:text-[1.3vw] mt-6 sm:mt-8 lg:mt-[3vw] font-poppins tracking-wider flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-around border-white/10 pt-6 sm:pt-8 text-center text-white/90 gap-4">
                    <span>© 2025 GetExposure. All rights reserved.</span>
                    <span className='flex flex-wrap justify-center text-xs sm:text-sm md:text-base lg:text-[1.1vw] items-end gap-2'>
                        <span> Designed by </span>
                        <span className='font-medium italic pb-[0.5px] border-b-[0.5px] border-white/70 text-white font-poppins text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.4vw]'>
                            <a target='_blank' href="https://www.linkedin.com/in/maryam-fatima-rajput/" className="hover:text-white/80 transition-colors">
                                Maryam Fatima
                            </a>
                        </span>

                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
