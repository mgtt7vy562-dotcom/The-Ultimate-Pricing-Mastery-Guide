import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  MessageSquare, 
  TrendingUp, 
  Users,
  Laptop,
  ChevronRight,
  AlertTriangle,
  Zap,
  Gift,
  Timer
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BestPractices() {
  const practices = [
    {
      number: 1,
      icon: AlertTriangle,
      title: "Always Quote Ranges, Not Fixed Prices",
      color: "red",
      description: "Never quote a single number upfront unless you've physically seen the job.",
      examples: [
        { label: "Phone/Text", text: '"Based on what you\'re describing, I\'m estimating $200-300. I\'ll confirm when I see it in person."' },
        { label: "On-site", text: '"Looks like it\'s on the higher end—about $280. Sound good?"' }
      ],
      why: "Ranges give you wiggle room. Fixed quotes lock you in. If the job is bigger than expected, you're stuck."
    },
    {
      number: 2,
      icon: Target,
      title: "Aim for 50-60% Gross Margins Minimum",
      color: "emerald",
      description: "This is your profitability target. Here's the formula:",
      formula: "(Total Costs × 2 to 2.5) = Your Charge",
      examples: [
        { label: "Dump Fee", text: "$80" },
        { label: "Fuel", text: "$20" },
        { label: "Labor (2hrs @$20)", text: "$40" },
        { label: "Total Costs", text: "$140" },
        { label: "Your Charge", text: "$280-350" }
      ],
      why: "If using W-2 employees, add 20-30% to hourly wages for taxes, benefits, and workers' comp."
    },
    {
      number: 3,
      icon: CheckCircle2,
      title: "Incorporate All Variables Every Time",
      color: "blue",
      description: "Don't forget the little things that eat into profit:",
      checklist: [
        { category: "Debris Type", items: ["Tires? +$50", "Concrete? +$100-200"] },
        { category: "Location", items: ["City permits? +$20", "No driveway? +$30"] },
        { category: "Workload", items: ["Stairs? +$50-75", "Disassembly? +$50"] }
      ],
      why: "Mental checklist: 1) What is it? 2) Where is it? 3) How hard is it?"
    },
    {
      number: 4,
      icon: Eye,
      title: "On-Site Adjustment Rules",
      color: "purple",
      description: "You've given a range. Now you're there. Here's how to handle it:",
      tips: [
        "Paint or tape lines in your truck at 1/4, 1/2, 3/4 marks",
        'Walk customer over: "See how it\'s just past the halfway line?"',
        '"This is a bit denser than we thought, so it\'s $300 instead of $250"',
        "Train your crew: Role-play objections. Say the price without flinching."
      ],
      why: "Most people respect honesty if you explain it clearly."
    },
    {
      number: 5,
      icon: MessageSquare,
      title: "Handle Confusion and Objections Like a Pro",
      color: "amber",
      scripts: [
        { situation: "Fraction confusion", response: '"Think of it like quarters of a box. This is about half full—easy to see, right?"' },
        { situation: "Price pushback", response: '"I get it, price matters. But our rate includes eco-friendly disposal, no hidden fees, and we clean up after ourselves. That\'s worth the extra $20."' }
      ],
      why: "Have scripts ready. Practice them until they feel natural."
    },
    {
      number: 6,
      icon: TrendingUp,
      title: "Competitive Research Without Undercutting",
      color: "cyan",
      description: "Check competitors on Google, Angi, Thumbtack. Note their ranges. Don't race to the bottom.",
      positioning: '"We\'re not the cheapest, but we\'re the best. We show up on time, handle everything, and leave your place spotless. That\'s our guarantee."',
      seasonalTips: [
        "Spring/summer (peak): +10-15%",
        "Midweek in winter (slow): -10% or run specials"
      ]
    },
    {
      number: 7,
      icon: Users,
      title: "Labor Smarts: 1099 vs. Payroll",
      color: "rose",
      comparison: [
        { type: "1099 Contractors", points: ["Pay per job ($100-200) or hourly ($18-25)", "20-30% cheaper than payroll", "More flexible, no commitment", "Risk: IRS reclassification if not careful"] },
        { type: "W-2 Employees", points: ["More expensive (add 20-30% for taxes/comp)", "More stable, better for core team", "Easier scheduling"] }
      ],
      approach: "Start with 1099 while growing. Switch key people to payroll once you have steady volume."
    },
    {
      number: 8,
      icon: Laptop,
      title: "Use Tech to Streamline",
      color: "indigo",
      tools: [
        { category: "Free", items: ["Google Forms for intake", "MileIQ for tracking mileage"] },
        { category: "Paid", items: ["Jobber or Housecall Pro for quotes/invoicing"] },
        { category: "Transparency", items: ["Show invoice breakdown (40% disposal, 30% labor, 30% service)"] }
      ],
      why: "Trust builds repeat business."
    }
  ];

  const upsells = [
    {
      name: "Donation Drop-Off",
      price: "+$30-75",
      pitch: '"I noticed some of this is still good - want me to drop it at Goodwill?"',
      margin: "90% profit",
      closeRate: "40-60%"
    },
    {
      name: "After-Hours Emergency",
      price: "+$75-150",
      pitch: '"The total for late-night service is $425 - includes everything."',
      margin: "80-90% profit",
      closeRate: "20-30%"
    },
    {
      name: "Disassembly/Demo",
      price: "+$75-200",
      pitch: '"Need that shed taken apart? We can handle it."',
      margin: "60-70%",
      closeRate: "30-50%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-rose-500/20 text-rose-400 border-rose-500/30">
            <Zap className="w-4 h-4 mr-1" />
            Gold Standard
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Best Practices for Charging
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            These rules work anywhere in the U.S. They're the difference between making real money and just staying busy.
          </p>
        </motion.div>

        {/* Practice Cards */}
        <div className="space-y-6 mb-16">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden">
                <div className="flex items-stretch">
                  {/* Number indicator */}
                  <div className={`w-20 flex-shrink-0 bg-${practice.color}-500/20 flex items-center justify-center`}>
                    <span className={`text-4xl font-bold text-${practice.color}-400`}>{practice.number}</span>
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-${practice.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                        <practice.icon className={`w-5 h-5 text-${practice.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{practice.title}</h3>
                        <p className="text-slate-400 mb-4">{practice.description}</p>

                        {/* Formula display */}
                        {practice.formula && (
                          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 mb-4">
                            <code className="text-emerald-400 font-mono">{practice.formula}</code>
                          </div>
                        )}

                        {/* Examples grid */}
                        {practice.examples && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                            {practice.examples.map((ex, i) => (
                              <div key={i} className="bg-slate-900/50 rounded-lg p-3">
                                <div className="text-slate-500 text-xs mb-1">{ex.label}</div>
                                <div className="text-slate-300 text-sm">{ex.text}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Checklist */}
                        {practice.checklist && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            {practice.checklist.map((group, i) => (
                              <div key={i} className="bg-slate-900/50 rounded-lg p-3">
                                <div className="text-blue-400 text-sm font-medium mb-2">{group.category}</div>
                                {group.items.map((item, j) => (
                                  <div key={j} className="text-slate-300 text-sm flex items-center gap-2">
                                    <span className="text-blue-400">•</span> {item}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tips list */}
                        {practice.tips && (
                          <div className="space-y-2 mb-4">
                            {practice.tips.map((tip, i) => (
                              <div key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                                <ChevronRight className="w-4 h-4 text-purple-400 mt-0.5" />
                                {tip}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Scripts */}
                        {practice.scripts && (
                          <div className="space-y-3 mb-4">
                            {practice.scripts.map((script, i) => (
                              <div key={i} className="bg-slate-900/50 rounded-lg p-4">
                                <div className="text-amber-400 text-sm font-medium mb-2">{script.situation}:</div>
                                <div className="text-slate-300 text-sm italic">{script.response}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Positioning */}
                        {practice.positioning && (
                          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 mb-4">
                            <div className="text-cyan-400 text-sm italic">{practice.positioning}</div>
                          </div>
                        )}

                        {/* Seasonal tips */}
                        {practice.seasonalTips && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {practice.seasonalTips.map((tip, i) => (
                              <Badge key={i} className="bg-cyan-500/20 text-cyan-400">{tip}</Badge>
                            ))}
                          </div>
                        )}

                        {/* Comparison */}
                        {practice.comparison && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {practice.comparison.map((comp, i) => (
                              <div key={i} className="bg-slate-900/50 rounded-lg p-4">
                                <div className="text-rose-400 font-medium mb-2">{comp.type}</div>
                                {comp.points.map((point, j) => (
                                  <div key={j} className="text-slate-300 text-sm flex items-start gap-2 mb-1">
                                    <span className="text-rose-400">•</span> {point}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tools */}
                        {practice.tools && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                            {practice.tools.map((tool, i) => (
                              <div key={i} className="bg-slate-900/50 rounded-lg p-3">
                                <div className="text-indigo-400 text-sm font-medium mb-2">{tool.category}</div>
                                {tool.items.map((item, j) => (
                                  <div key={j} className="text-slate-300 text-sm">• {item}</div>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Why this matters */}
                        {practice.why && (
                          <div className="text-slate-500 text-sm mt-3 pt-3 border-t border-slate-700/50">
                            💡 {practice.why}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Upselling Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">The 3 Easy Upsells</h2>
            <p className="text-slate-400">High-margin add-ons that customers actually want</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upsells.map((upsell, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-slate-800/50 border-slate-700/50 hover:border-emerald-500/30 transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">{upsell.name}</CardTitle>
                      <Badge className="bg-emerald-500/20 text-emerald-400 text-lg">{upsell.price}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                      <div className="text-slate-500 text-xs mb-1">The Pitch:</div>
                      <div className="text-slate-300 text-sm italic">{upsell.pitch}</div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <div className="text-slate-500">Margin</div>
                        <div className="text-emerald-400 font-medium">{upsell.margin}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-slate-500">Close Rate</div>
                        <div className="text-blue-400 font-medium">{upsell.closeRate}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Implementation tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-8 text-center"
        >
          <Timer className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Implementation Tip</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Implement one tip per week. Track your results. Watch your average ticket price climb.
            Most haulers see a 20-30% increase within the first month of applying these practices.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
