"use client"

import {  MoveRight } from "lucide-react"

import Link from "next/link"
import Image from 'next/image'

export default function Navbar({ action , target="_blank"}) {





  return (
    <nav

      className="absolute top-0 left-0 right-0  transition-all py-2 duration-300  bg-transparent z-[100]"
    >
      <div
        className="duration-300"
      >
        <div className="xl:container lg:px-10 xl:px-0 w-full mx-auto px-3 sm:px-4 md:px-6 ">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
            <Link href="/" className=" cursor-pointer">
              <Image src="/logo.png" alt="GetExposure logo" width={150} height={40} className="w-[80px] sm:w-[100px] md:w-[130px] lg:w-[150px] object-cover" />
            </Link>
            <a href={action} target={target} className="flex group items-center justify-center transition-all duration-300 ease-in-out border-gray-600 hover:bg-white hover:text-black text-white gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base font-medium border">
              <span className="">Get Started</span>
              <span className="flex items-center justify-center group-hover:translate-x-1 transition-all duration-300 ease-in-out">
                <MoveRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
              </span>
            </a>



          </div>
        </div>
      </div>
    </nav>
  )
}
