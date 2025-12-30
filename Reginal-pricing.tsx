import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Users, Fuel, Scale, FileText, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function RegionalPricing() {
  const regions = [
    { name: "West Coast", price: "$700-1,200", level: "high", position: { top: "35%", left: "10%" } },
    { name: "Northeast", price: "$700-1,200", level: "high", position: { top: "25%", right: "15%" } },
    { name: "Southwest", price: "$500-700", level: "medium", position: { top: "55%", left: "20%" } },
    { name: "Midwest", price: "$400-600", level: "low", position: { top: "35%", left: "45%" } },
    { name: "South", price: "$400-600", level: "low", position: { top: "60%", left: "55%" } }
  ];

  const factors = [
    {
      icon: Scale,
      title: "Dump/Landfill Fees",
      lowCost: "$30-60 per ton",
      lowDetail: "Rural landfills cheaper, fewer regulations",
      highCost: "$80-150+ per ton",
      highDetail: "Urban dumps + strict recycling mandates",
      action: "Call your local landfill weekly. Build 20-30% buffer into quotes."
    },
    {
      icon: Users,
      title: "Labor Costs",
      lowCost: "$15-20/hour",
      lowDetail: "Easier to find help, lower wages",
      highCost: "$25-40/hour",
      highDetail: "Union rules, higher minimum wages",
      action: "W-2 employees: Add 20-30% for taxes/benefits. 1099: $100-150/job."
    },
    {
      icon: Fuel,
      title: "Fuel & Travel",
      lowCost: "$3-4/gallon",
      lowDetail: "Shorter distances, less traffic",
      highCost: "$5+/gallon + tolls",
      highDetail: "$5-20/trip tolls, traffic delays",
      action: "Charge $1-2/mile over 20 miles. Factor parking fees ($10-50)."
    },
    {
      icon: TrendingUp,
      title: "Competition",
      lowCost: "Fewer haulers",
      lowDetail: "Can charge premium if reliable",
      highCost: "Saturated markets",
      highDetail: "Big chains undercutting prices",
      action: "Aim 10-20% above lowest. Sell value: speed, eco-friendly, no hidden fees."
    },
    {
      icon: FileText,
      title: "Regulations",
      lowCost: "Basic rules",
      lowDetail: "Fewer disposal/recycling rules",
      highCost: "Strict compliance",
      highDetail: "CA wants 75% recycling diversion",
      action: "Add $50-100/job for sorting time in strict areas. Get certified."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
            Regional Pricing Factors
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Understanding Your Market
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A full truck in rural Tennessee is NOT the same as in Seattle. What works in one market will bankrupt you in another.
          </p>
        </motion.div>

        {/* US Heat Map Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">US Regional Pricing Heat Map</h2>
          
          <div className="relative h-[400px] bg-slate-900/50 rounded-2xl overflow-hidden">
            {/* Simplified US Map representation with regions */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-3xl h-full p-8">
                {/* Region bubbles */}
                {regions.map((region, index) => (
                  <motion.div
                    key={region.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    style={region.position}
                    className="absolute"
                  >
                    <div className={`
                      px-4 py-3 rounded-2xl border-2 backdrop-blur-sm
                      ${region.level === 'high' ? 'bg-red-500/20 border-red-500/50' :
                        region.level === 'medium' ? 'bg-amber-500/20 border-amber-500/50' :
                        'bg-emerald-500/20 border-emerald-500/50'}
                    `}>
                      <div className="text-white font-semibold text-sm">{region.name}</div>
                      <div className={`font-bold ${
                        region.level === 'high' ? 'text-red-400' :
                        region.level === 'medium' ? 'text-amber-400' :
                        'text-emerald-400'
                      }`}>{region.price}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <span className="text-slate-400 text-sm">High Cost ($700-1,200)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-500" />
                <span className="text-slate-400 text-sm">Medium ($500-700)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500" />
                <span className="text-slate-400 text-sm">Low Cost ($400-600)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Big Five Factors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-8">The Big Five Factors</h2>
          
          <div className="space-y-6">
            {factors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Factor Name */}
                    <div className="lg:col-span-3 p-6 bg-slate-900/50 flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center">
                        <factor.icon className="w-6 h-6 text-slate-300" />
                      </div>
                      <span className="text-white font-semibold text-lg">{factor.title}</span>
                    </div>

                    {/* Low Cost */}
                    <div className="lg:col-span-3 p-6 bg-emerald-500/5 border-l border-slate-700/50">
                      <div className="text-emerald-400 text-sm font-medium mb-1">Low-Cost Areas</div>
                      <div className="text-white font-bold text-lg">{factor.lowCost}</div>
                      <div className="text-slate-400 text-sm mt-1">{factor.lowDetail}</div>
                    </div>

                    {/* High Cost */}
                    <div className="lg:col-span-3 p-6 bg-red-500/5 border-l border-slate-700/50">
                      <div className="text-red-400 text-sm font-medium mb-1">High-Cost Areas</div>
                      <div className="text-white font-bold text-lg">{factor.highCost}</div>
                      <div className="text-slate-400 text-sm mt-1">{factor.highDetail}</div>
                    </div>

                    {/* Action */}
                    <div className="lg:col-span-3 p-6 bg-blue-500/5 border-l border-slate-700/50">
                      <div className="text-blue-400 text-sm font-medium mb-1">What You Should Do</div>
                      <div className="text-slate-300 text-sm">{factor.action}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6">30-Minute Market Research</h3>
          <p className="text-slate-400 mb-6">When entering a new area, spend 30 minutes doing this homework:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: 1, task: "Call a landfill", detail: "Ask tipping fees. Be friendly—they give insider info on price changes." },
              { num: 2, task: "Check wage rates", detail: "Indeed or Glassdoor for your area. See if $15/hour flies or need $30." },
              { num: 3, task: "Browse competitor reviews", detail: "Google, Thumbtack—get a sense of their pricing range." },
              { num: 4, task: "Look up local rules", detail: "5 minutes on city website saves $500 fines for wrong disposal." }
            ].map((item) => (
              <div key={item.num} className="bg-slate-900/50 rounded-xl p-4 flex gap-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400 font-bold">{item.num}</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{item.task}</div>
                  <div className="text-slate-400 text-sm">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
            <p className="text-emerald-400">
              <span className="font-semibold">Pro tip:</span> Adjust base rates up or down 10-50% depending on region. Example: 1/2 load = $251-400 in low-cost areas, $350-550 in high-cost cities.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
