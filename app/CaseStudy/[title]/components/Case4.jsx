'use client'
import React from 'react';
import { motion } from 'framer-motion'

import { TrendingDown, TrendingUp, Target, Lightbulb, CheckCircle, AlertTriangle, Settings, Layers, Users, Zap, DollarSign, Award, Cog } from 'lucide-react';

const Case4 = () => {
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
              Supplements
            </h1>
            <p className="text-xl md:text-2xl xl:text-[1.6vw] text-gray-400 max-w-3xl font-roboto font-normal leading-relaxed">
              How systematic testing and multi-angle strategy scaled supplement ads from $0 to $2300+/day in 30 days
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
                <Award className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <h2 className="text-3xl md:text-5xl xl:text-[3.5vw] font-bold text-white tracking-tight">Backstory + Situation</h2>
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-8 text-base md:text-xl xl:text-[1.2vw] text-gray-300 leading-relaxed font-roboto">
            <p>
              The CEO of this offer owner is a renowned media buyer who helped scale an entire company to over $900M.
            </p>
            <p>
              Now he was looking for a media buyer for his own supplement products. But there were some conditions.
            </p>
            <p>
              He didn't just want a media buyer specifically, he wanted the media buyer to have good copywriting skills + Creative strategy skills as well. He was looking for an all rounder.
            </p>
          </div>

          {/* Requirements Grid */}
          <div className="mt-10 md:mt-12 p-8 md:p-10 bg-white/5 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">All-Rounder Requirements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Strategically test various ad angles",
                "Suggest winning angles to the backend team who will create landing pages",
                "Systematically and properly test new ads, without wasting ad dollar, so knowing my way around Facebook Ads Manager was crucial",
                "Scale to $500 a day in the first 60 days."
              ].map((requirement, index) => (
                <div key={index} className="p-6 bg-[#0a0a0a] border border-white/10">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <span className="text-base text-gray-200">{requirement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 md:mt-12 space-y-6 text-base md:text-xl xl:text-[1.2vw] text-gray-300 leading-relaxed font-roboto">
            <p className="font-medium text-white">
              I was the perfect candidate for him.
            </p>
            <p>
              Plus, he had 2 products ready to launch, and another product rolling out in about 2 weeks.
            </p>
          </div>

          {/* Client Credentials */}
          <div className="mt-10 md:mt-12 p-8 bg-white/5 border border-white/10">
            <div className="flex items-start gap-4">
              <Award className="w-7 h-7 text-white flex-shrink-0 mt-1" />
              <span className="text-lg md:text-xl xl:text-[1.3vw] text-white font-medium leading-relaxed">High-Profile Client: CEO who scaled company to $900M+ looking for elite all-rounder</span>
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
                <Settings className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl xl:text-[3.5vw] font-bold text-white tracking-tight">Challenge</h2>
            </div>
          </div>
          
          <p className="text-base md:text-xl xl:text-[1.2vw] text-gray-400 leading-relaxed font-roboto mb-12">
            I had to come up with 2 systems:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 md:p-10 bg-[#0a0a0a] border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-black">
                  1
                </div>
                <h3 className="text-xl md:text-2xl text-white font-semibold">Testing System</h3>
              </div>
              <p className="text-base text-gray-300">
                System to come up with new ad concepts, and effectively test every possible ad angle in all placements (Images, Headlines, Hooks, Body Copy)
              </p>
            </div>
            
            <div className="p-8 md:p-10 bg-[#0a0a0a] border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-black">
                  2
                </div>
                <h3 className="text-xl md:text-2xl text-white font-semibold">Evaluation System</h3>
              </div>
              <p className="text-base text-gray-300">
                Test every piece carefully and mark it as a winner or a loser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Action */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                <Cog className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <h2 className="text-3xl md:text-5xl xl:text-[3.5vw] font-bold text-white tracking-tight">Action</h2>
            </div>
          </div>
          
          <div className="space-y-10 md:space-y-12">
            <p className="text-base md:text-xl xl:text-[1.2vw] text-gray-300 leading-relaxed font-roboto">
              I started writing ads for products one by one.
            </p>
            
            <p className="text-base md:text-xl xl:text-[1.2vw] text-gray-300 leading-relaxed font-roboto">
              First product was a Sea Moss supplement. I wrote ads around these angles:
            </p>

            {/* Ad Angles Grid */}
            <div className="p-8 md:p-10 bg-white/5 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">Sea Moss Supplement - Ad Angles Strategy</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { number: 1, angle: "High blood sugar", note: "(ads for product aware, solution aware, problem aware)" },
                  { number: 2, angle: "High blood pressure", note: "(ads for product aware, solution aware, problem aware)" },
                  { number: 3, angle: "All day energy", note: "(ads for product aware, solution aware, problem aware)" },
                  { number: 4, angle: "Avoid Mid day slump", note: "(ads for product aware, solution aware, problem aware)" },
                  { number: 5, angle: "Ads on Discounts", note: "(product aware market only)" },
                  { number: 6, angle: "Ads on credibility, testimonials, highlighting proof", note: "(standalone ads, plus inserting these proofs in other ads as well)" },
                  { number: 7, angle: "Get rid of body pain", note: "" },
                  { number: 8, angle: "Ads on our USP", note: "(which was that this product had the highest bioavailability which gives it 233% enhanced nutrient absorption capacity)" }
                ].map((item) => (
                  <div key={item.number} className="p-6 bg-[#0a0a0a] border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-base font-bold text-black">
                        {item.number}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium mb-1">{item.angle}</div>
                        {item.note && <div className="text-xs text-gray-400">{item.note}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testing Strategy */}
            <div className="p-8 md:p-10 bg-white/5 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">Systematic Testing Approach</h3>
              <div className="space-y-6 text-base md:text-xl xl:text-[1.2vw] text-gray-300 leading-relaxed font-roboto">
                <p>
                  I gave each ad about $15-20/day in each adset, and tested all these ads in ad sets with 1 audience each. A few audiences I used were:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Past Buyers 1% LAL",
                    "Past Buyers 2% LAL",
                    "Past Buyers 3% LAL",
                    "Past Buyers 4% LAL",
                    "Past Buyers 5% LAL",
                    "Past Buyers 2-4% LAL",
                    "Past Buyers 4-6% LAL",
                    "Health & Wellness",
                    "Dr Saby",
                    "And a few more audiences."
                  ].map((audience, index) => (
                    <div key={index} className="p-4 bg-[#0a0a0a] border border-white/10">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-white flex-shrink-0" />
                        <span className="text-gray-200 text-sm">{audience}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <Layers className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl xl:text-[1.3vw] text-white font-medium leading-relaxed">I followed the same procedure for all products.</span>
              </div>
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

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
              <div className="text-5xl md:text-6xl xl:text-[4vw] font-bold text-white mb-4">$70-85</div>
              <div className="text-lg md:text-xl xl:text-[1.3vw] text-white font-medium mb-2">CPS (USD)</div>
              <div className="text-sm md:text-base text-gray-400">Cost Per Sale</div>
            </div>
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
              <div className="text-5xl md:text-6xl xl:text-[4vw] font-bold text-white mb-4">$2300+</div>
              <div className="text-lg md:text-xl xl:text-[1.3vw] text-white font-medium mb-2">Daily Spend</div>
              <div className="text-sm md:text-base text-gray-400">Reached in 30 days</div>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 text-white text-lg md:text-xl">
              <DollarSign className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold">CPS: $70-85 USD</span>
            </div>
            <div className="flex items-center gap-4 text-white text-lg md:text-xl">
              <TrendingUp className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold">Scaled to $2300+/day in 30 days</span>
            </div>
          </div>

          {/* Achievement Highlight */}
          <div className="p-8 bg-white/5 border border-white/10 mb-12">
            <div className="flex items-start gap-4">
              <Zap className="w-7 h-7 text-white flex-shrink-0 mt-1" />
              <span className="text-lg md:text-xl xl:text-[1.3vw] text-white font-medium leading-relaxed">Exceptional Performance: Exceeded $500/day target by 460% - reached $2300+/day in just 30 days</span>
            </div>
          </div>

          {/* Success Metrics Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 md:p-10 bg-[#0a0a0a] border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-400 font-medium mb-2">Target (60 days)</div>
                  <div className="text-4xl md:text-5xl font-bold text-white">$500/day</div>
                </div>
                <Target className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <div className="p-8 md:p-10 bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-400 font-medium mb-2">Achieved (30 days)</div>
                  <div className="text-4xl md:text-5xl font-bold text-white">$2300+/day</div>
                </div>
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case4;
