'use client'
import { motion } from 'framer-motion'

import React from 'react';
import { TrendingDown, TrendingUp, Target, Lightbulb, CheckCircle, AlertTriangle, Users, Crown, Filter, Layers, DollarSign, Award, Network } from 'lucide-react';

const Case5 = () => {
    return (
        <div className="min-h-screen mt-[100px] font-poppins text-white bg-black">
            
            {/* Header */}
            <div className="relative overflow-hidden border-b border-white/5">
                <div className="relative container mx-auto px-6 py-20 md:py-32">
                    <div className="max-w-5xl mx-auto space-y-8">
                        <div className="inline-block">
                            <span className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-[0.2em]">
                                Case Study
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl xl:text-6xl font-bold text-white leading-none tracking-tight">
                            Internet Mastermind
                        </h1>
                        <p className="text-xl md:text-2xl xl:text-2xl text-gray-400 max-w-3xl font-roboto font-normal leading-relaxed">
                            How broad targeting strategy reduced CPL by 60% while attracting high-caliber CEOs to an exclusive Vancouver mastermind
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
                                <Crown className="w-5 h-5 md:w-6 md:h-6 text-black" />
                            </div>
                            <h2 className="text-3xl md:text-5xl xl:text-4xl font-bold text-white tracking-tight">Backstory + Situation</h2>
                        </div>
                    </div>

                    <div className="space-y-6 md:space-y-8 text-base md:text-xl xl:text-lg text-gray-300 leading-relaxed font-roboto">
                        <p>
                            Internet Mastermind is one of the fastest-growing masterminds in Vancouver, known for its exclusive network of CEOs, executives, and high-level entrepreneurs. The mastermind's CEO had crafted a unique onboarding process:
                        </p>
                    </div>

                    {/* Unique Process Steps */}
                    <div className="mt-10 md:mt-12 p-8 md:p-10 bg-white/5 border border-white/10">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">Unique 3-Step Onboarding Process</h3>
                        <div className="space-y-6">
                            {[
                                { step: 1, title: "Facebook Ads", description: "Run Facebook ads to invite potential members to a dinner." },
                                { step: 2, title: "Exclusive Dinner", description: "Host the dinner with a mix of current mastermind members and new prospects." },
                                { step: 3, title: "Live Pitch", description: "During the dinner, pitch the mastermind group, allowing prospects to experience its value and culture firsthand." }
                            ].map((item) => (
                                <div key={item.step} className="flex items-start p-6 bg-[#0a0a0a] border border-white/10">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-lg font-bold text-black">
                                        {item.step}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-white font-medium text-lg mb-2">{item.title}</div>
                                        <div className="text-gray-300 text-base">{item.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 md:mt-12 space-y-6 text-base md:text-xl xl:text-lg text-gray-300 leading-relaxed font-roboto">
                        <p>
                            However, the campaign wasn't delivering the desired results. The CEO wasn't getting qualified leads—the majority of prospects were far from the target demographic of high-earning CEOs and executives.
                        </p>
                        <p>
                            Instead, he was attracting individuals who weren't financially ready or professionally aligned with the mastermind's goals.
                        </p>
                    </div>

                    {/* Problem Alert */}
                    <div className="mt-10 md:mt-12 p-8 bg-[#0a0a0a] border border-white/10">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                            <span className="text-lg md:text-xl xl:text-lg text-white font-medium leading-relaxed">Poor Lead Quality: Attracting unqualified prospects instead of high-earning CEOs and executives</span>
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
                            <h2 className="text-3xl md:text-5xl xl:text-4xl font-bold text-white tracking-tight">Challenge</h2>
                        </div>
                    </div>

                    <p className="text-base md:text-xl xl:text-lg text-gray-400 leading-relaxed font-roboto mb-12">
                        The CEO faced two critical challenges:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-8 md:p-10 bg-[#0a0a0a] border border-white/10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-black">
                                    1
                                </div>
                                <Crown className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-white font-semibold text-xl mb-3">Lead Quality Challenge</h3>
                            <p className="text-gray-300 text-base">
                                Attracting qualified leads (CEOs, executives, and high-level entrepreneurs).
                            </p>
                        </div>

                        <div className="p-8 md:p-10 bg-[#0a0a0a] border border-white/10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-black">
                                    2
                                </div>
                                <DollarSign className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-white font-semibold text-xl mb-3">Cost Challenge</h3>
                            <p className="text-gray-300 text-base">
                                Keeping the cost per lead (CPL) under $20 to ensure the campaign remained profitable.
                            </p>
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
                            <h2 className="text-3xl md:text-5xl xl:text-4xl font-bold text-white tracking-tight">Task</h2>
                        </div>

                        <p className="text-base md:text-xl xl:text-lg text-gray-400 leading-relaxed font-roboto">
                            I was brought in to:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { number: 1, task: "Optimize targeting to attract qualified leads." },
                            { number: 2, task: "Maintain a CPL under $20 while improving the quality of leads." }
                        ].map((item) => (
                            <div key={item.number} className="p-8 md:p-10 bg-white/5 border border-white/10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-black">
                                        {item.number}
                                    </div>
                                    <Filter className="w-7 h-7 text-white" />
                                </div>
                                <span className="text-base md:text-lg xl:text-lg text-gray-200 leading-relaxed font-roboto">{item.task}</span>
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
                            <h2 className="text-3xl md:text-5xl xl:text-4xl font-bold text-white tracking-tight">Action</h2>
                        </div>
                    </div>

                    <div className="space-y-10 md:space-y-12">
                        {/* Strategy 1 - Targeting */}
                        <div className="p-8 md:p-10 bg-white/5 border border-white/10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-black">
                                    1
                                </div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white">Testing Targeting Strategies</h3>
                            </div>

                            <div className="space-y-6 text-base md:text-lg xl:text-lg text-gray-300 leading-relaxed font-roboto">
                                <p>Initially, the CEO wanted to use interest-based targeting to narrow down audiences.</p>
                                <p>However, I recommended a broad targeting approach, allowing the ad copy to qualify the audience instead of relying on Facebook's interest feature.</p>

                                <div className="p-6 bg-[#0a0a0a] border border-white/10 mt-6">
                                    <h4 className="text-white font-medium text-lg mb-4">Why Broad Targeting?</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Broad targeting lets the algorithm optimize reach and identify the right audience based on behavior, not just interests.</span>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                            <span>It provides more scalability and avoids restricting the audience pool.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-[#0a0a0a] border border-white/10">
                                    <h4 className="text-white font-medium text-lg mb-4">Test Structure</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-white/5 border border-white/10">
                                            <div className="text-white font-medium mb-1">50% Budget</div>
                                            <div className="text-sm text-gray-400">Interest-based targeting (CEO's preference)</div>
                                        </div>
                                        <div className="p-4 bg-white/5 border border-white/10">
                                            <div className="text-white font-medium mb-1">50% Budget</div>
                                            <div className="text-sm text-gray-400">Broad targeting (my recommendation)</div>
                                        </div>
                                    </div>
                                </div>

                                <p className="font-medium text-white">
                                    The results were clear: Broad targeting outperformed interest-based targeting in both CPL and lead quality.
                                </p>
                            </div>
                        </div>

                        {/* Strategy 2 - Ad Copy */}
                        <div className="p-8 md:p-10 bg-white/5 border border-white/10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-black">
                                    2
                                </div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white">Crafting Persuasive Ad Copy</h3>
                            </div>

                            <div className="space-y-6 text-base md:text-lg xl:text-lg text-gray-300 leading-relaxed font-roboto">
                                <p>The success of broad targeting relied heavily on creating precise, qualifying ad copy. I wrote ad copy that:</p>

                                <div className="space-y-4">
                                    {[
                                        "Highlighted the exclusivity of the mastermind.",
                                        "Addressed pain points specific to CEOs and executives (e.g., desire for meaningful connections, high-level business discussions).",
                                        "Qualified leads by emphasizing the financial and professional criteria required to join."
                                    ].map((point, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-6 bg-[#0a0a0a] border border-white/10 mt-6">
                                    <h4 className="text-white font-medium text-lg mb-4">Example Ad Copy</h4>
                                    <div className="space-y-5">
                                        <div>
                                            <div className="text-white font-medium text-xs mb-2">Example headline:</div>
                                            <div className="italic p-4 bg-white/5 border border-white/10 text-gray-300">"Network with Vancouver's Top CEOs Over Dinner – Exclusive Invitation for Executives Only."</div>
                                        </div>
                                        <div>
                                            <div className="text-white font-medium text-xs mb-2">Example body copy:</div>
                                            <div className="italic p-4 bg-white/5 border border-white/10 text-gray-300">"This isn't your typical networking event. Join a private mastermind dinner with Vancouver's top CEOs and entrepreneurs. Share ideas, build connections, and gain access to an exclusive group that's shaping the future of business. Apply now to reserve your seat."</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Strategy 3 - Funnel */}
                        <div className="p-8 md:p-10 bg-white/5 border border-white/10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-black">
                                    3
                                </div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white">Refining the Funnel</h3>
                            </div>

                            <div className="space-y-4 text-base md:text-lg xl:text-lg text-gray-300 leading-relaxed font-roboto">
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                    <span>The ad directed prospects to a landing page with a short application form.</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                    <span>The form included qualifying questions, such as income level, industry, and job title, to filter out unqualified leads before they reached the dinner stage.</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                    <span>This ensured only prospects who met the mastermind's standards progressed further.</span>
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
                            <h2 className="text-3xl md:text-5xl xl:text-4xl font-bold text-white tracking-tight">Result</h2>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
                            <div className="text-5xl md:text-6xl xl:text-[4vw] font-bold text-white mb-4">$8-10</div>
                            <div className="text-lg md:text-xl xl:text-lg text-white font-medium mb-2">Average CPL</div>
                            <div className="text-sm md:text-base text-gray-400">Reduced from $20+</div>
                        </div>
                        <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
                            <div className="text-5xl md:text-6xl xl:text-[4vw] font-bold text-white mb-4">60%</div>
                            <div className="text-lg md:text-xl xl:text-lg text-white font-medium mb-2">CPL Reduction</div>
                            <div className="text-sm md:text-base text-gray-400">Significant savings</div>
                        </div>
                        <div className="p-8 md:p-10 bg-white/5 border border-white/10 text-center">
                            <Crown className="w-16 h-16 text-white mx-auto mb-4" />
                            <div className="text-lg md:text-xl xl:text-lg text-white font-medium mb-2">Premium Leads</div>
                            <div className="text-sm md:text-base text-gray-400">CEOs & Executives</div>
                        </div>
                    </div>

                    <div className="space-y-6 mb-12">
                        <div className="flex items-center gap-4 text-white text-lg md:text-xl">
                            <TrendingDown className="w-6 h-6 flex-shrink-0" />
                            <span className="font-semibold">CPL: Reduced the cost per lead from $20+ to an average of $8-10 per lead.</span>
                        </div>
                        <div className="flex items-center gap-4 text-white text-lg md:text-xl">
                            <Crown className="w-6 h-6 flex-shrink-0" />
                            <span className="font-semibold">Lead Quality: Attracted high-caliber prospects (CEOs, executives, and business owners) who were financially and professionally ready to join the mastermind.</span>
                        </div>
                        <div className="flex items-center gap-4 text-white text-lg md:text-xl">
                            <Award className="w-6 h-6 flex-shrink-0" />
                            <span className="font-semibold">Mastermind Growth: The mastermind gained new members from these qualified leads, boosting revenue and reinforcing its reputation as an exclusive, high-value group in Vancouver.</span>
                        </div>
                    </div>

                    {/* Success Highlight */}
                    <div className="p-8 bg-white/5 border border-white/10">
                        <div className="flex items-start gap-4">
                            <Network className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                            <span className="text-lg md:text-xl xl:text-lg text-white font-medium leading-relaxed">Strategic Success: Broad targeting + qualifying ad copy delivered both cost efficiency and premium lead quality</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Case5;
