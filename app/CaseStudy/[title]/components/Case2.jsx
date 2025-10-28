'use client'
import { motion } from 'framer-motion'

import React from 'react';
import { TrendingDown, TrendingUp, Target, Lightbulb, CheckCircle, AlertTriangle, Calendar, DollarSign, Users, Zap } from 'lucide-react';

const Case2 = () => {
  return (
    <div className="min-h-screen font-poppins mt-[100px] text-white bg-black">
      
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="relative container mx-auto px-6 py-20 md:py-32">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="inline-block">
              <span className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-[0.2em]">
                Case Study
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl xl:text-[6rem] font-bold text-white leading-none tracking-tight">
              MedSpa Business
            </h1>
            <p className="text-xl md:text-2xl xl:text-[1.6vw] text-gray-400 max-w-3xl font-roboto font-normal leading-relaxed">
              How we transformed evergreen webinar ads to achieve industry-leading CPL for a medspa training program
            </p>
          </div>
        </div>
      </div>

      {/* Backstory + Situation */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <h2 className="text-3xl md:text-5xl xl:text-[3.5vw] font-bold text-white tracking-tight">Backstory + Situation</h2>
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-8 text-base md:text-xl xl:text-[1.2vw] text-gray-300 leading-relaxed font-roboto">
            <p>
              I started running ads for this client last year. Her course is about helping Nurses and other women in healthcare roles open their medspa so they can experience freedom, flexibility and financial stability.
            </p>
            <p>
              Every month we used to do 1 live webinar for which we ran ads all month. And with every webinar, we used to make 5-7 sales for the $2997 product in the backend.
            </p>
            <p>
              For every $3000 spent in ads for the live webinar, we earned about $25K to $30K, which is equal to 5-6X ROAS.
            </p>
            <p>
              But things started going downhill in May 2024, when the client announced she didn't want to do live webinars anymore. She only wants to do evergreen webinars.
            </p>
            <p>
              The agency agreed and I tested ads for evergreen webinars. Initially, I rewrote our current control ad, and revised it to fit our current objective.
            </p>
            <p>
              But our CPL for the evergreen webinar ads was around $20-25. Not good. Plus everyday, the CPL was increasing so there was a clear upward trend in the CPL.
            </p>
            <p>
              For the client to be profitable, we needed 400 leads under $5-7.
            </p>
          </div>

          {/* Initial Success Metrics */}
          <div className="mt-10 md:mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 md:p-8 bg-white/5 border border-white/10 text-center">
              <div className="text-4xl md:text-5xl xl:text-[3vw] font-bold text-white mb-3">5-6X</div>
              <div className="text-lg md:text-xl text-white font-medium mb-2">Live Webinar ROAS</div>
              <TrendingUp className="w-8 h-8 text-gray-400 mx-auto mt-2" />
            </div>
            <div className="p-6 md:p-8 bg-white/5 border border-white/10 text-center">
              <div className="text-4xl md:text-5xl xl:text-[3vw] font-bold text-white mb-3">5-7</div>
              <div className="text-lg md:text-xl text-white font-medium mb-2">Monthly Sales</div>
              <Users className="w-8 h-8 text-gray-400 mx-auto mt-2" />
            </div>
            <div className="p-6 md:p-8 bg-white/5 border border-white/10 text-center">
              <div className="text-4xl md:text-5xl xl:text-[3vw] font-bold text-white mb-3">$25-30K</div>
              <div className="text-lg md:text-xl text-white font-medium mb-2">Revenue per $3K spend</div>
              <DollarSign className="w-8 h-8 text-gray-400 mx-auto mt-2" />
            </div>
          </div>

          {/* Problem Alert */}
          <div className="mt-10 md:mt-12 p-6 md:p-8 bg-[#0a0a0a] border border-white/10">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 md:w-7 md:h-7 text-white mt-1 flex-shrink-0" />
              <span className="text-lg md:text-xl xl:text-[1.3vw] text-white font-medium leading-relaxed">May 2024: Client switched to evergreen webinars - CPL jumped to $20-25</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="container mx-auto px-6 py-16 md:py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a1a1a] border border-white/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl xl:text-[3.5vw] font-bold text-white tracking-tight">Challenge</h2>
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-8 text-base md:text-xl xl:text-[1.2vw] text-gray-300 leading-relaxed font-roboto">
            <p>
              Revising the control ad didn't work. Because now the people didn't have the urgency to get them to show up and watch the entire webinar.
            </p>
            <p>
              I wrote new solution aware ads as well, and it didn't work good enough. New ads did bring down the CPL to $12-15, but it still wasn't enough.
            </p>
            <p>
              The goal was to bring down the CPL to $5.
            </p>
            <p>
              As the head media buyer, I recommended the agency to work on their landing page and target Problem aware people. But the agency refused to implement any changes in the funnel and wanted me to work on my ads
            </p>
          </div>

          {/* Challenge Metrics */}
          <div className="mt-10 md:mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 md:p-8 bg-[#0a0a0a] border border-white/10 text-center">
              <div className="text-sm md:text-base text-gray-400 mb-2">Initial Evergreen CPL</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$20-25</div>
              <div className="text-xs md:text-sm text-gray-500">Increasing daily</div>
            </div>
            <div className="p-6 md:p-8 bg-[#0a0a0a] border border-white/10 text-center">
              <div className="text-sm md:text-base text-gray-400 mb-2">After New Ads CPL</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$12-15</div>
              <div className="text-xs md:text-sm text-gray-500">Still not enough</div>
            </div>
            <div className="p-6 md:p-8 bg-white/5 border border-white/10 text-center">
              <div className="text-sm md:text-base text-gray-400 mb-2">Target CPL</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$5</div>
              <div className="text-xs md:text-sm text-gray-500">For profitability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Task */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <h2 className="text-3xl md:text-5xl xl:text-[3.5vw] font-bold text-white tracking-tight">Task</h2>
            </div>
            <p className="text-base md:text-xl xl:text-[1.2vw] text-gray-400 leading-relaxed font-roboto">
              With no support from the agency, I knew I needed to do the heavy lifting on the ads front. I need to figure out a way to …
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Reduce CPL to $5",
              "Secure high-quality leads that would convert to sales",
              "Rapidly diagnose and fix the CPL issue before the agency decides to let me go or fire the client"
            ].map((task, index) => (
              <div key={index} className="p-6 md:p-8 bg-white/5 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-base md:text-lg font-bold text-black">
                    {index + 1}
                  </div>
                  <span className="text-base md:text-lg xl:text-[1.1vw] text-gray-200 leading-relaxed font-roboto">{task}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action */}
      <section className="container mx-auto px-6 py-16 md:py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <h2 className="text-3xl md:text-5xl xl:text-[3.5vw] font-bold text-white tracking-tight">Action</h2>
            </div>
          </div>
          
          <div className="space-y-8 md:space-y-12 text-base md:text-xl xl:text-[1.2vw] text-gray-300 leading-relaxed font-roboto">
            <p>
              I remembered a concept, in which the total addressable market is made of people who will only buy after they read ads with certain angles.
            </p>
            
            <p>
              So I divided the market for this offer into 4 major pain points and their desires.
            </p>

            {/* Pain Points Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { number: 1, pain: "No freedom" },
                { number: 2, pain: "No flexibility" },
                { number: 3, pain: "Dying feeling of impact" },
                { number: 4, pain: "Not enough compensation" }
              ].map((point) => (
                <div key={point.number} className="p-6 bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-black">
                      {point.number}
                    </div>
                    <span className="text-white font-medium">Pain point {point.number}: {point.pain}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 md:p-10 bg-white/5 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">Strategic Implementation</h3>
              <div className="space-y-6 text-gray-300">
                <p>And I wrote 5 ad copy, 5 headlines, and 5 creative copy for each of these pain points.</p>
                <p>And I did this for both …</p>
                <div className="ml-6 space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Solution Aware Market</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Problem Aware Market</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p>
                I started running these ads with a $5/day budget and slowly scaled the winners to $1000/day.
              </p>
              <p>
                Right now the client has 7 ads that are individually scalable to $1000/day.
              </p>
              <p>
                The CPL now is averagely $1.7, some days it even goes down to less than $1.
              </p>
              <p className="font-medium text-white">
                The COO told me that I am bringing the lowest CPL in their entire competitor base and they are using this as a USP to stand out from the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="container mx-auto px-6 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <h2 className="text-3xl md:text-5xl xl:text-[3.5vw] font-bold text-white tracking-tight">Result</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
              <div className="text-5xl md:text-6xl xl:text-[4vw] font-bold text-white mb-4">$1.7</div>
              <div className="text-lg md:text-xl xl:text-[1.3vw] text-white font-medium mb-2">Average CPL</div>
              <div className="text-sm md:text-base text-gray-400">Sometimes &lt; $1</div>
            </div>
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
              <div className="text-5xl md:text-6xl xl:text-[4vw] font-bold text-white mb-4">5X</div>
              <div className="text-lg md:text-xl xl:text-[1.3vw] text-white font-medium mb-2">Evergreen ROAS</div>
              <div className="text-sm md:text-base text-gray-400">Consistent delivery</div>
            </div>
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
              <div className="text-5xl md:text-6xl xl:text-[4vw] font-bold text-white mb-4">$30K</div>
              <div className="text-lg md:text-xl xl:text-[1.3vw] text-white font-medium mb-2">Monthly Budget</div>
              <div className="text-sm md:text-base text-gray-400">Scaled up</div>
            </div>
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
              <div className="text-5xl md:text-6xl xl:text-[4vw] font-bold text-white mb-4">$100-120K</div>
              <div className="text-lg md:text-xl xl:text-[1.3vw] text-white font-medium mb-2">Monthly Revenue</div>
              <div className="text-sm md:text-base text-gray-400">Evergreen sales</div>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 text-white text-lg md:text-xl">
              <Zap className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold">CPL: $1.7</span>
            </div>
            <div className="flex items-center gap-4 text-white text-lg md:text-xl">
              <TrendingUp className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold">Evergreen webinar ROAS: 5X</span>
            </div>
            <div className="flex items-center gap-4 text-white text-lg md:text-xl">
              <DollarSign className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold">Monthly budget $30K</span>
            </div>
            <div className="flex items-center gap-4 text-white text-lg md:text-xl">
              <Target className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold">Monthly Revenue: About $100K - $120K in evergreen webinar sales</span>
            </div>
          </div>

          {/* Competitive Advantage */}
          <div className="p-8 bg-white/5 border border-white/10">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
              <span className="text-lg md:text-xl xl:text-[1.3vw] text-white font-medium leading-relaxed">Industry Leadership: Lowest CPL in entire competitor base - now used as competitive USP</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case2;
