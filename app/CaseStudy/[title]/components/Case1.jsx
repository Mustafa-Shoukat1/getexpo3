'use client'
import { motion } from 'framer-motion'

import React from 'react';
import { TrendingDown, TrendingUp, Target, Lightbulb, CheckCircle, AlertTriangle } from 'lucide-react';

const Case1 = () => {
  return (
    <div className="min-h-screen font-poppins mt-[100px] text-white bg-black">
      
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="relative container mx-auto px-6 py-20 md:py-32 max-w-7xl">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="inline-block">
              <span className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-[0.2em]">
                Case Study
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold text-white leading-none tracking-tight">
              Medical Education
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl text-gray-400 max-w-3xl font-roboto font-normal leading-relaxed">
              How we turned a failing Facebook ads campaign into a success story for an EKG training program
            </p>
          </div>
        </div>
      </div>

      {/* Backstory + Situation */}
      <section className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-black" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold text-white tracking-tight">Backstory + Situation</h2>
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-8 text-base md:text-lg lg:text-xl xl:text-lg text-gray-300 leading-relaxed font-roboto">
            <p>
              I managed Facebook ads for a client specializing in EKG interpretation for nurse practitioners—a skill where accuracy could mean the difference between life and death. She had a course in which she taught other Nurse Practitioners who wanted to learn EKGs.
            </p>
            <p>
              As the Head media buyer, my role was crucial: generate quality leads affordably. Initially, we celebrated an incredible win, slashing the cost per lead (CPL) from $8 to $5. This 62% reduction in the CPL marked the initial success at our agency.
            </p>
          </div>

          {/* Success Metric */}
          <div className="mt-10 md:mt-12 p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <TrendingDown className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white mt-1 flex-shrink-0" />
              <span className="text-base md:text-lg lg:text-xl xl:text-lg text-white font-medium leading-relaxed">Initial Success: CPL reduced from $8 to $5 (62% reduction)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="container mx-auto px-6 py-16 md:py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#1a1a1a] border border-white/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold text-white tracking-tight">Challenge</h2>
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-8 text-base md:text-lg lg:text-xl xl:text-lg text-gray-300 leading-relaxed font-roboto">
            <p>
              Six months in, my world turned upside down. Our once-stellar CPL skyrocketed past $5, and ad fatigue hit us like a huge tidal wave.
            </p>
            <p>
              Backend sales plummeted, and my stomach churned as I watched the numbers decline day after day.
            </p>
            <p>
              The client, understandably panicked, wanted to stop the ads and fire the agency. But the COO convinced her to run ads for another month where we improve our metrics and bring back the good days.
            </p>
            <p>
              After much convincing and back and forth, she finally agreed to keep running the ads for the next 4 weeks. But she slashed our ad budget by more than 70%.
            </p>
            <p className="font-medium text-white">
              Suddenly, I felt the weight of the entire campaign—and perhaps my career—on my shoulders.
            </p>
            <p>
              Every morning, I woke up with a knot in my stomach, dreading to check the ad performance. The fear of failure consumed me. What if I couldn't turn this around? Would I be known as the media buyer who lost a crucial medical education client? The thought of letting down not just the client, but potentially impacting the quality of healthcare through our training, kept me up at night.
            </p>
          </div>

          {/* Crisis Metrics */}
          <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="p-6 md:p-8 bg-[#0a0a0a] border border-white/10">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white mt-1 flex-shrink-0" />
                <span className="text-base md:text-lg lg:text-xl xl:text-lg text-white font-medium">CPL skyrocketed past $5</span>
              </div>
            </div>
            <div className="p-6 md:p-8 bg-[#0a0a0a] border border-white/10">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white mt-1 flex-shrink-0" />
                <span className="text-base md:text-lg lg:text-xl xl:text-lg text-white font-medium">Budget slashed by 70%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Task */}
      <section className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-black" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold text-white tracking-tight">Task</h2>
            </div>
            <p className="text-base md:text-lg lg:text-xl xl:text-lg text-gray-400 leading-relaxed font-roboto">
              As the head media buyer, I faced a mountain that seemed almost impossible to climb:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              "Dramatically reduce the spiraling CPL",
              "Secure high-quality leads that would convert to sales",
              "Rapidly diagnose and fix the cost issue before it was too late",
              "The clock was ticking, and I could feel the client's trust slipping away with each passing day"
            ].map((task, index) => (
              <div key={index} className="p-6 md:p-8 bg-white/5 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-base md:text-lg font-bold text-black">
                    {index + 1}
                  </div>
                  <span className="text-base md:text-lg lg:text-xl xl:text-lg text-gray-200 leading-relaxed font-roboto">{task}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action */}
      <section className="container mx-auto px-6 py-16 md:py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <h2 className="text-3xl md:text-5xl xl:text-4xl font-bold text-white tracking-tight">Action</h2>
            </div>
          </div>

          <div className="space-y-12 md:space-y-16">
            {/* Initial Frustration */}
            <div className="border-l-2 border-white/20 pl-8 md:pl-12">
              <h3 className="text-2xl md:text-3xl xl:text-2xl font-semibold text-white mb-6">Initial Frustration</h3>
              <p className="text-base md:text-xl xl:text-lg text-gray-300 leading-relaxed font-roboto">
                I revised the ads frantically. But none of those new ads worked. My heart was sinking with every day passing by. as each attempt fell flat. The feeling of helplessness was overwhelming.
              </p>
            </div>

            {/* Market Insight Epiphany */}
            <div className="border-l-2 border-white/20 pl-8 md:pl-12">
              <h3 className="text-2xl md:text-3xl xl:text-2xl font-semibold text-white mb-6">Market Insight Epiphany</h3>
              <div className="space-y-6 md:space-y-8 text-base md:text-xl xl:text-lg text-gray-300 leading-relaxed font-roboto">
                <p>
                  Obviously I wrote more new ads. But nothing worked. The copy was great, the creatives looked amazing that could stop the scroll, and based on the previous data with this client and this industry, I was writing the perfect ads and designing the perfect creatives.
                </p>
                <p>
                  But still the lead cost wasn't coming down. And another problem was, the leads that I was bringing in, the feedback loop was slow.
                </p>
                <p>
                  That is, we only had 1 live webinar a week, so even if I spent more to bring leads, I only had one shot --- 1 webinar a week --- to see if my leads bought the backend product. So the leads that came in with these new ads I wrote, they didn't buy at all.
                </p>
                <p className="font-medium text-white">
                  This is where I realized that the market has shifted.
                </p>
                <p>
                  According to Eugene Schwartz, there are many different awareness levels to the market. I looked back at my previous controls, I was primarily writing product and solution aware ads.
                </p>
                <p>
                  I felt as we churned through the entire Top of the Funnel market – that we circled around the Most aware, product aware, and solution aware market.
                </p>
                <p>
                  I noticed that none of the ads I wrote were targeting problem aware people. I pursued this idea.
                </p>
              </div>
            </div>

            {/* Pivot Strategy */}
            <div className="border-l-2 border-white/20 pl-8 md:pl-12">
              <h3 className="text-2xl md:text-3xl xl:text-2xl font-semibold text-white mb-6">Pivot to Problem-Aware Audience</h3>
              <div className="space-y-6 md:space-y-8 text-base md:text-xl xl:text-lg text-gray-300 leading-relaxed font-roboto">
                <p>
                  With renewed hope, I crafted new ads targeting problem-aware prospects.
                </p>
                <p>
                  <strong className="text-white">Creative Testing:</strong> Racing against time, I poured my energy into testing emotionally engaging images. Every day felt like walking a tightrope, balancing between innovation and the fear of further failure.
                </p>
                <p>
                  For the first week of running these problem aware ads, I saw no lift in the number of leads or reduction in lead cost. Another webinar came and went by no major movement on the ads front, BUT we did get a few backend sales.
                </p>
                <p className="font-medium text-white">
                  After about 7 days, I saw lead cost decrease from $5 to $3. Then a couple days after, I saw a CPL of $1.8 then CPL of $1.5 then a CPL of $1. I knew I've found the right audience, and the new control ads.
                </p>
                <p>
                  But the CPL wasn't stable. So that was my next goal, to stabilize the CPL. And this is where I wrote new angles for ads, and designed more images that appealed to the Problem Aware market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="container mx-auto px-6 py-16 md:py-24 border-t border-white/5 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <h2 className="text-3xl md:text-5xl xl:text-4xl font-bold text-white tracking-tight">Result</h2>
            </div>

            <p className="text-base md:text-xl xl:text-lg text-gray-400 leading-relaxed font-roboto font-medium">
              The turnaround felt nothing short of miraculous:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
              <div className="text-5xl md:text-6xl xl:text-4xl font-bold text-white mb-4">75%</div>
              <div className="text-lg md:text-xl xl:text-lg text-white font-medium mb-2">CPL Reduction</div>
              <div className="text-sm md:text-base text-gray-400">From $8 to $2</div>
            </div>
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
              <div className="text-5xl md:text-6xl xl:text-4xl font-bold text-white mb-4">4-6X</div>
              <div className="text-lg md:text-xl xl:text-lg text-white font-medium mb-2">ROAS</div>
              <div className="text-sm md:text-base text-gray-400">Consistent delivery</div>
            </div>
            <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
              <div className="text-5xl md:text-6xl xl:text-4xl font-bold text-white mb-4">✓</div>
              <div className="text-lg md:text-xl xl:text-lg text-white font-medium mb-2">Trust Renewed</div>
              <div className="text-sm md:text-base text-gray-400">Client satisfaction</div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 text-base md:text-xl xl:text-lg text-gray-300 leading-relaxed font-roboto">
            <p>
              We achieved a CPL reduction from $8 to $2—a 75% cut that seemed impossible just weeks before.
            </p>
            <p>
              Backend sales stabilized, consistently delivering a 4-6X ROAS.
            </p>
            <p>
              The client's trust renewed and which brought me professional validation. And this case study became a testament to perseverance in the face of adversity.
            </p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Case1;