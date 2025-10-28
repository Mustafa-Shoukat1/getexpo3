'use client'
import React from 'react';
import { motion } from 'framer-motion'

import { TrendingDown, TrendingUp, Target, Lightbulb, CheckCircle, AlertTriangle, RefreshCw, Layers, Users, Zap, DollarSign } from 'lucide-react';

const Case3 = () => {
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
              IV Hydration
            </h1>
            <p className="text-xl md:text-2xl xl:text-[1.6vw] text-gray-400 max-w-3xl font-roboto font-normal leading-relaxed">
              How repositioning transformed an IV hydration training program from 1-2X ROAS to 5.3X ROAS
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
              I started running ads for this client last year. She helps healthcare professionals in various verticals transition into IV Hydration Businesses.
            </p>
            <p>
              Same model as above: 1 live webinar every week.
            </p>
            <p>
              Her initial offer was teaching about how to do IV drips. But after running ads for this offer, the results weren't good enough. 1-2X ROAS.
            </p>
            <p>
              Goal was to increase the ROAS to about 5-6X.
            </p>
          </div>

          {/* Initial Performance */}
          <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-8 md:p-10 bg-[#0a0a0a] border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-400 font-medium mb-2">Initial ROAS</div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">1-2X</div>
                  <div className="text-sm text-gray-500">Not good enough</div>
                </div>
                <TrendingDown className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <div className="p-8 md:p-10 bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-400 font-medium mb-2">Target ROAS</div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">5-6X</div>
                  <div className="text-sm text-gray-500">Goal to achieve</div>
                </div>
                <Target className="w-12 h-12 text-white" />
              </div>
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
              After doing a lot of research, I realized that the offer wasn't standing out. Which is why even with the proven ads, the CTR wasn't hitting the 2% mark.
            </p>
            <p>
              Rewriting ads to target different awareness levels of the market didn't work enough.
            </p>
            <p className="font-medium text-white">
              Positioning was the key issue here.
            </p>
          </div>

          {/* Challenge Indicators */}
          <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-[#0a0a0a] border border-white/10">
              <div className="flex items-start gap-4">
                <TrendingDown className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-white font-medium">CTR below 2% mark</span>
              </div>
            </div>
            <div className="p-8 bg-[#0a0a0a] border border-white/10">
              <div className="flex items-start gap-4">
                <Layers className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <span className="text-lg md:text-xl text-white font-medium">Offer not standing out</span>
              </div>
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
                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <h2 className="text-3xl md:text-5xl xl:text-[3.5vw] font-bold text-white tracking-tight">Task</h2>
            </div>

            <p className="text-base md:text-xl xl:text-[1.2vw] text-gray-400 leading-relaxed font-roboto mb-12">
              I had a few different ideas to position the offer.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <div className="p-8 bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold text-black">
                  1
                </div>
                <span className="text-base md:text-lg xl:text-[1.1vw] text-gray-200 leading-relaxed font-roboto">
                  For example, we could target a different set of audience and besides just Nurses, we could target a more niched audience.
                </span>
              </div>
            </div>
            <div className="p-8 bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold text-black">
                  2
                </div>
                <span className="text-base md:text-lg xl:text-[1.1vw] text-gray-200 leading-relaxed font-roboto">
                  Or we could position ourselves in the business category. Meaning, instead of teaching how to transition from a full time nursing role, we could teach how to open a business hydration business.
                </span>
              </div>
            </div>
          </div>

          <p className="text-base md:text-xl xl:text-[1.2vw] text-gray-400 leading-relaxed font-roboto mb-8">This lead to …</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Changing the entire landing page, OTO offer",
              "Client also made a few changes in the course",
              "I worked on the ads, and made them more about how to start an IVH business instead of how to become an IVH nurse."
            ].map((task, index) => (
              <div key={index} className="p-8 bg-white/5 border border-white/10">
                <div className="flex items-start gap-4">
                  <RefreshCw className="w-6 h-6 text-white flex-shrink-0 mt-1" />
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
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <h2 className="text-3xl md:text-5xl xl:text-[3.5vw] font-bold text-white tracking-tight">Action</h2>
            </div>
          </div>

          <div className="space-y-8 md:space-y-12">
            <p className="text-base md:text-xl xl:text-[1.2vw] text-gray-300 leading-relaxed font-roboto">
              I saw that almost no one was using this positioning of becoming an IVH business owner in ads.
            </p>

            <p className="text-base md:text-xl xl:text-[1.2vw] text-gray-300 leading-relaxed font-roboto">
              And that's what I changed in my ads.
            </p>

            {/* Strategy Breakdown */}
            <div className="p-10 bg-white/5 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">Ad Strategy Implementation</h3>
              <div className="space-y-6 text-base md:text-xl xl:text-[1.2vw] text-gray-300 leading-relaxed font-roboto">
                <p>I wrote problem aware ads, solution ware ads. Plus I wrote Product aware ads for her warm audience on IG and Tiktok.</p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 bg-[#0a0a0a] border border-white/10">
                    <h4 className="text-white font-medium text-lg mb-3">Landing Page Focus</h4>
                    <p className="text-sm md:text-base text-gray-400">
                      The landing page, that was rewritten, was targeting solution aware people – nurses who wanted to start an IVH business but don't know how to.
                    </p>
                  </div>
                  <div className="p-6 bg-[#0a0a0a] border border-white/10">
                    <h4 className="text-white font-medium text-lg mb-3">Ad Focus</h4>
                    <p className="text-sm md:text-base text-gray-400">
                      I made my ads about nurses, who realize they have a problem and want to switch their career.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 bg-white/5 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">Perfect Awareness Escalation</h3>
              <p className="text-base md:text-xl xl:text-[1.2vw] text-gray-300 leading-relaxed font-roboto mb-8">
                The combination of ads and the landing page was escalating the awareness of our reader perfectly.
              </p>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1 p-6 bg-[#0a0a0a] border border-white/10">
                  <h4 className="text-white font-medium text-lg mb-2">Ads</h4>
                  <p className="text-sm text-gray-400">(about a new and exciting opportunity)</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-xl font-bold">→</span>
                  </div>
                </div>
                <div className="flex-1 p-6 bg-[#0a0a0a] border border-white/10">
                  <h4 className="text-white font-medium text-lg mb-2">Landing Page</h4>
                  <p className="text-sm text-gray-400">(Introducing a proven strategy to open IVH business in 60 days)</p>
                </div>
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

            <p className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              It was an instant hit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
              <div className="text-4xl md:text-5xl xl:text-[3.5vw] font-bold text-white mb-4">$1.85 - 3.99</div>
              <div className="text-lg md:text-xl text-white font-medium mb-2">CPL Range</div>
              <div className="text-sm text-gray-400">Excellent performance</div>
            </div>
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
              <div className="text-4xl md:text-5xl xl:text-[3.5vw] font-bold text-white mb-4">5.3X</div>
              <div className="text-lg md:text-xl text-white font-medium mb-2">Webinar ROAS</div>
              <div className="text-sm text-gray-400">Exceeded target</div>
            </div>
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
              <div className="text-4xl md:text-5xl xl:text-[3.5vw] font-bold text-white mb-4">$30K</div>
              <div className="text-lg md:text-xl text-white font-medium mb-2">Monthly Budget</div>
              <div className="text-sm text-gray-400">Scaled investment</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white text-lg md:text-xl">
              <DollarSign className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold">CPL: $1.85 - 3.99</span>
            </div>
            <div className="flex items-center gap-4 text-white text-lg md:text-xl">
              <TrendingUp className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold">Webinar ROAS: 5.3X</span>
            </div>
            <div className="flex items-center gap-4 text-white text-lg md:text-xl">
              <Target className="w-6 h-6 flex-shrink-0" />
              <span className="font-semibold">Monthly budget $30K</span>
            </div>
          </div>

          {/* Success Highlight */}
          <div className="mt-12 p-8 bg-white/5 border border-white/10">
            <div className="flex items-start gap-4">
              <Zap className="w-7 h-7 text-white flex-shrink-0 mt-1" />
              <span className="text-lg md:text-xl xl:text-[1.3vw] text-white font-medium leading-relaxed">Transformation Success: From 1-2X ROAS to 5.3X ROAS through strategic repositioning</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case3;
