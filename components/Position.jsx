import React, { useState, useEffect, useRef } from 'react'
import { TrendingUp, ArrowUpRight, Target, Rocket as RocketIcon } from "lucide-react"
import RocketScene from './RocketScene'
import PartsScene from './PartsScene'
import Station from "./Station"
import StarfieldCanvas from './StarfieldCanvas'
// import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Rocket = () => {
    return (
        <div className='relative h-[500px] w-[300px] xl:w-[30vw] xl:h-full' >
             <StarfieldCanvas />
            <RocketScene />
        </div>
    )
}

const Position = () => {
    const router = useRouter()
    const containerRef = useRef(null)
    const [selected, setSelected] = useState("rocket")

    // Define the sequence of sections
    const sections = ["rocket", "station", "parts"]

    const toSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
    }

    const handleRedirect = (title) => {
        const slug = toSlug(title)
        router.push(`/Solution/${slug}`)
    }

    const data = {
        rocket: {
            title: "Looking to Scale?",
            subtitle: "Ready to scale above $25k-$30k daily",
            description: "If you're ready to scale your campaign above 25k - 30k a day, we can do it by following our proven 6 step scaling strategy.",
        },
        station: {
            title: "Looking to Optimize?",
            subtitle: "Already spending but need better performance",
            description: "If you're spending consistently on ads but the performance has dropped, we can help you with our customized 6 step process.",
        },
        parts: {
            title: "Just Starting?",
            subtitle: "New to advertising and need guidance",
            description: "Ready to launch your first Facebook ad campaign but unsure where to begin? We'll guide you through the entire process step by step.",
        },
    }

    return (
        <div className=''>
            <div
                ref={containerRef}
                className=' mx-auto min-h-auto  '
            >
                <div className='w-auto  flex items-center justify-center'>
                    <div className="bg-[#252525] rounded-xl relative p-2 ">


                        <nav className='flex  flex-wrap md:mx-auto items-center justify-center backdrop-blur-sm   rounded-full w-full md:w-fit '>
                            {[
                                {
                                    id: "rocket",
                                    text: "Looking to Scale?",
                                    gradient: "from-green-700 to-emerald-700",
                                },
                                {
                                    id: "station",
                                    text: "Looking to Optimize?",
                                    gradient: "from-blue-700 to-cyan-800",
                                },
                                {
                                    id: "parts",
                                    text: "Just Starting?",
                                    gradient: "from-[rgb(99,102,241)] to-pink-800",
                                },
                            ].map(({ id, icon, text, gradient }) => (
                                <button
                                    key={id}
                                    onMouseEnter={() => setSelected(id)}
                                    className={`group flex items-center gap-2  px-[1.5vw] py-[1.5vw]  cursor-pointer transition-all ease-in-out duration-300
                                ${selected === id ? `bg-black text-black` : "bg-transparent hover:bg-white/10"}
                            `}
                                >
                                    <span
                                        className={`block flex-1 xl:text-[1.2vw] font-poppins  tracking-wide transition-colors duration-300 ${selected === id ? "text-white " : "text-white group-hover:text-white/80"
                                            }`}
                                    >
                                        {text}
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>

                </div>


                {/* Content sections - Keep all components mounted */}
                <div className="relative w-[70%]  flex items-center justify-center min-h-[50vh] mx-auto font-poppins py-[4vw] ">
                    {/* Rocket Section */}
                    <div
                        className={`flex lg:flex-nowrap flex-wrap flex-row-reverse items-center w-full transition-all duration-400 ${selected === 'rocket' ? 'opacity-100 visible' : 'opacity-0 invisible absolute top-0 left-0'
                            }`}
                    >
                        <div className=' relative  rotate-45'>
                            {/* <div className="absolute top-0 left-0 w-full h-[130px]  bg-gradient-to-b  rounded-full !z-[100] from-black via-black/20 to-transparent"></div> */}
                            {/* <div className="absolute top-0 right-0 w-[130px]   h-full  bg-gradient-to-l   !z-[100] from-black via-black/20 to-transparent"></div> */}
                            {/* <div className="absolute top-0 left-0 w-[130px]   h-full bg-gradient-to-r   !z-[100] from-black via-black/20 to-transparent"></div> */}
                            {/* <div className="absolute bottom-0  left-0 w-full h-[130px]  bg-gradient-to-t  rounded-full  !z-[100] from-black via-black/20 to-transparent"></div> */}

                            <Rocket />
                        </div>
                        <div className='text-start flex font-poppins  items-start flex-col mx-auto gap-10'>
                            <div className='space-y-6'>
                                <h1 className='text-2xl lg:text-5xl xl:text-[3.6vw] uppercase'>{data.rocket.title}</h1>
                                <h3 className='text-2xl xl:text-[1.5vw] text-white/70 border-b  tracking-wide uppercase '>{data.rocket.subtitle}</h3>
                            </div>
                            <p className='text-start text-xl text-white/90 italic font-roboto  xl:text-[1.5vw] font-light md:w-[90%] mt-[1vw]'>{data.rocket.description}</p>
                            <div >
                                <motion.button onClick={() => handleRedirect("Looking to Scale")} className=" group hover:bg-transparent transition-all duration-300 ease-in-out border border-[#252525] relative w-[8vw] text-[1vw] font-poppins cursor-pointer text-white overflow-hidden h-[3vw]  bg-[#252525]   ">
                                    Learn More


                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Station Section */}
                    <div
                        className={`flex justify-center   flex-row-reverse lg:flex-nowrap flex-wrap items-center w-full transition-all duration-400 ${selected === 'station' ? 'opacity-100 visible' : 'opacity-0 invisible absolute top-0 left-0'
                            }`}
                    >

                        <div className='w-[40vw] h-[20vw] '>
                            <Station />
                        </div>
                        <div className='text-start flex   font-poppins  items-start flex-col mx-auto gap-10'>
                            <div className='space-y-6'>
                                <h1 className='text-2xl lg:text-5xl xl:text-[3.6vw] uppercase'>{data.station.title}</h1>
                                <h3 className='text-2xl xl:text-[1.5vw] text-white/70 border-b  tracking-wide uppercase '>{data.station.subtitle}</h3>
                            </div>
                            <p className='text-start text-xl text-white/90 italic font-roboto  xl:text-[1.5vw] font-light md:w-[90%] mt-[1vw]'>{data.station.description}</p>
                            <div>
                                <motion.button onClick={() => handleRedirect("Looking to Optimize")} className=" group hover:bg-transparent transition-all duration-300 ease-in-out border border-[#252525] relative w-[8vw] text-[1vw] font-poppins cursor-pointer text-white overflow-hidden h-[3vw]  bg-[#252525]   ">
                                    Learn More


                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Parts Section */}
                    <div
                        className={`flex  items-start  lg:flex-nowrap flex-wrap-reverse     w-full transition-all duration-400 ${selected === 'parts' ? 'opacity-100 visible' : 'opacity-0 invisible absolute top-0 left-0'
                            }`}
                    >

                        <div className='text-start   font-poppins flex flex-wrap items-start justify-center  flex-col mx-auto  gap-10'>
                            <div className='space-y-6'>
                                <h1 className='text-2xl lg:text-5xl xl:text-[3.6vw] uppercase'>{data.parts.title}</h1>
                                <h3 className='text-2xl xl:text-[1.5vw] text-white/70 border-b  tracking-wide uppercase '>{data.parts.subtitle}</h3>
                            </div>
                            <p className='text-start text-xl text-white/90 italic font-roboto  xl:text-[1.5vw] font-light md:w-[90%] mt-[1vw]'>{data.parts.description}</p>
                            <div>

                                <motion.button onClick={() => handleRedirect("Just Starting")} className=" group hover:bg-transparent transition-all duration-300 ease-in-out border border-[#252525] relative w-[8vw] text-[1vw] font-poppins cursor-pointer text-white overflow-hidden h-[3vw]  bg-[#252525]   ">
                                    Learn More


                                </motion.button>
                            </div>
                        </div>
                        <div className='w-[40vw] h-[20vw] '>

                            <PartsScene />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Position