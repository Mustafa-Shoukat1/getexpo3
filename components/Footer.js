import React from 'react'
import Link from "next/link"


const Footer = () => {
    return (
        <footer className="px-[10vw] relative bg-[black] backdrop-blur-2xl z-10   font-raleway border-white/5 mt-[10vw] ">

            <div className="relative z-100 font-poppins w-full mx-auto  py-12">
                <div className="flex items-center justify-center   ">
                    {/* <div className=""> */}

                        <p className="text-white w-[40%]   text-[2vw] font-raleway font-normal mb-4">
                            Transform your ad spend into real customers with our data-driven approach to digital advertising.
                        </p>
                    {/* </div> */}
                    <div className='flex w-full items-start justify-around ml-[6vw] gap-[2vw] flex-2'>

                        <div>
                            <h4 className="text-white font-medium font-raleway text-[2vw]  mb-13 border-b inline-block ">Services</h4>
                            <ul className="space-y-[1.4vw] text-[1vw]  text-white/80">
                                <li>Campaign Scaling</li>
                                <li>Performance Optimization</li>
                                <li>Campaign Setup</li>
                                <li>Creative Development</li>
                                <li>Cross-Channel Integration</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-medium font-raleway text-[2vw] mb-13 border-b inline-block">Case Studies</h4>
                            <ul className="items-start flex flex-col gap-[1.4vw] text-[1vw] text-white/80">
                                <li><Link href="/CaseStudy/case1" className='uppercase'>Case Study 1</Link></li>
                                <li><Link href="/CaseStudy/case2" className='uppercase'>Case Study 2</Link></li>
                                <li><Link href="/CaseStudy/case3" className='uppercase'>Case Study 3</Link></li>
                                <li><Link href="/CaseStudy/case4" className='uppercase'>Case Study 4</Link></li>
                                <li><Link href="/CaseStudy/case5" className='uppercase'>Case Study 5</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-medium font-raleway text-[2vw] mb-13 border-b inline-block">Contact Us</h4>
                            <ul className="space-y-[1.4vw] text-[1vw]  text-white/80">
                                <li>Vancouver, BC, Canada</li>
                                <li>+1 778 712 3301</li>
                                <li>team@getexposure.ca</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="border-t text-[1.3vw] mt-[3vw] font-poppins tracking-wider flex flex-wrap items-center justify-around border-white/10  pt-8 text-center text-white/90">
                    © 2025 GetExposure. All rights reserved.
                    <span className='flex flex-wrap justify-center text-[1.1vw]  items-end gap-2'>
                        <span> Designed by </span>
                        <span className='font-medium italic  pb-[0.5px] border-b-[0.5px] border-white/70 text-white font-poppins text-lg md:text-xl xl:text-[1.4vw]'>
                            <a target='_blank' href="https://www.linkedin.com/in/maryam-fatima-rajput/">
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
