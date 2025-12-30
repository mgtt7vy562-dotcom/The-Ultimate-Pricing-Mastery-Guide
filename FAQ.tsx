import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  MessageSquare,
  Users,
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
  Tag
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      icon: Users,
      category: "Competition",
      question: 'A customer says "1-800-GOT-JUNK quoted me $100 less—why are you higher?"',
      answer: {
        intro: "Don't panic. Don't drop your price immediately.",
        script: '"We\'re a local business, not a franchise. You get personalized service, same-day options, and we handle recycling and donations at no extra cost. The big guys often add hidden fees on-site."',
        followUp: 'Then ask: "What exactly did they quote for?" Often their quote is sight-unseen or lowballed to get in the door.',
        bottomLine: "If they're shopping purely on price, they're not your ideal customer anyway."
      }
    },
    {
      id: 2,
      icon: DollarSign,
      category: "Pricing",
      question: "The job ended up smaller than photos showed. Do I discount or stick to the range?",
      answer: {
        intro: "You quoted a range for a reason.",
        details: "If it's legitimately smaller (quoted $200-300 but it's barely a minimum), drop to the lower end or even below as a goodwill gesture—but only if you want the repeat business.",
        warning: "Never go below your costs.",
        script: '"It was lighter than expected, so I\'ll bring it in at $175 today. Appreciate the accurate photos!"',
        bottomLine: "Builds trust without training them to exaggerate."
      }
    },
    {
      id: 3,
      icon: Tag,
      category: "Heavy Items",
      question: "How much more should I charge for heavy stuff like concrete, dirt, or bricks?",
      answer: {
        intro: "Always add a density surcharge—20-50% on top of your normal range, or switch to weight-based pricing if it's extreme.",
        example: "A 1/2 load of household junk might be $251-400, but concrete bumps it to $400-600 because dump fees and labor are higher.",
        script: '"Heavy materials like concrete cost more to dispose of safely—it\'s an extra $100-200 depending on weight."'
      }
    },
    {
      id: 4,
      icon: Clock,
      category: "Rush Jobs",
      question: "Is it okay to charge extra for weekends, evenings, or same-day service?",
      answer: {
        intro: "Absolutely. Add 15-30% or a flat $50-100 rush fee.",
        script: '"Weekend slots fill up quick, so we add a small premium to cover crew overtime—still cheaper than waiting until Monday!"',
        tip: "If weekends book solid, raise it higher. Supply and demand."
      }
    },
    {
      id: 5,
      icon: DollarSign,
      category: "Dump Fees",
      question: "My area has super high dump fees ($120/ton). How do I build that in without scaring customers?",
      answer: {
        intro: "Transparency wins. Use ranges that already include a healthy buffer (aim for 50-60% margin).",
        tip: 'On invoices, break it down: "Disposal & Recycling: $150"—they see it\'s not pure profit.',
        positioning: '"We sort and recycle properly—that\'s why our disposal fee covers responsible handling."',
        bottomLine: "In high-fee areas, your competitors charge similar rates. Don't undercut yourself."
      }
    },
    {
      id: 6,
      icon: Users,
      category: "Labor",
      question: "Should I use 1099 helpers or put everyone on payroll? How does it affect pricing?",
      answer: {
        intro: "For growing operations, start with 1099 contractors—20-30% cheaper (no taxes, benefits, workers' comp).",
        details: "Pay them per job ($100-200) or hourly ($18-25). Get solid contracts and check IRS rules to avoid reclassification risks.",
        transition: "Once you have reliable core guys and steady volume, switch key people to payroll for loyalty and easier scheduling.",
        bottomLine: "Build the savings into your margins: Cheaper labor = higher profits or room to compete on price."
      }
    },
    {
      id: 7,
      icon: Shield,
      category: "Disputes",
      question: 'Customers keep arguing about "how full" the truck is. How do I stop disputes?',
      answer: {
        intro: "Prevention is key:",
        tips: [
          "Use the simpler 1/4 model, not 1/8",
          "Take before/after photos",
          "Paint or tape visible fraction markers inside your truck",
          'Walk them to the truck: "See how it\'s just over the halfway mark?"'
        ],
        bottomLine: "Visual proof ends most disputes."
      }
    },
    {
      id: 8,
      icon: TrendingUp,
      category: "Growth",
      question: "How often should I raise my prices?",
      answer: {
        intro: "At least once a year, or when costs rise (fuel, dump fees, wages).",
        strategy: "Test small increases (10-15%) on new leads first. Track your close rate—if it stays the same, you're good.",
        communication: '"We\'re updating rates to maintain our premium service."',
        bottomLine: "Loyal clients rarely leave over small hikes if you deliver value."
      }
    },
    {
      id: 9,
      icon: DollarSign,
      category: "Payment",
      question: "What if a customer refuses to pay the final amount after on-site adjustment?",
      answer: {
        intro: "Rare, but have a policy:",
        policy: "Require a 20-50% deposit upfront for larger jobs, or get clear verbal agreement on ranges.",
        script: '"We discussed the range based on your description—happy to remove items to bring it down."',
        bottomLine: "Worst case, eat a small loss and learn. Better photos next time."
      }
    },
    {
      id: 10,
      icon: Tag,
      category: "Discounts",
      question: "Can I offer discounts to fill slow days or attract new customers?",
      answer: {
        intro: "Yes, strategically.",
        examples: [
          "Midweek specials (10-20% off Tuesday-Thursday)",
          "First-time customer $25 off"
        ],
        warning: "Avoid deep discounts that train people to wait.",
        alternative: '"Book this week and get free mattress removal."',
        bottomLine: "Always tie discounts to action that benefits you (reviews, referrals)."
      }
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Competition": "text-purple-400 bg-purple-500/20",
      "Pricing": "text-emerald-400 bg-emerald-500/20",
      "Heavy Items": "text-amber-400 bg-amber-500/20",
      "Rush Jobs": "text-blue-400 bg-blue-500/20",
      "Dump Fees": "text-rose-400 bg-rose-500/20",
      "Labor": "text-cyan-400 bg-cyan-500/20",
      "Disputes": "text-red-400 bg-red-500/20",
      "Growth": "text-green-400 bg-green-500/20",
      "Payment": "text-orange-400 bg-orange-500/20",
      "Discounts": "text-pink-400 bg-pink-500/20"
    };
    return colors[category] || "text-slate-400 bg-slate-500/20";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
            <HelpCircle className="w-4 h-4 mr-1" />
            Real Questions, Real Answers
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Questions from real haulers—in Facebook groups, DMs, at the dump. Real problems, real solutions.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card 
                className={`bg-slate-800/50 border-slate-700/50 overflow-hidden cursor-pointer transition-all ${
                  openFaq === faq.id ? 'border-emerald-500/30' : 'hover:border-slate-600'
                }`}
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center flex-shrink-0">
                      <faq.icon className="w-5 h-5 text-slate-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Badge className={`mb-2 ${getCategoryColor(faq.category)}`}>
                            {faq.category}
                          </Badge>
                          <h3 className="text-white font-semibold text-lg">
                            Q{faq.id}: {faq.question}
                          </h3>
                        </div>
                        <div className="flex-shrink-0 mt-1">
                          {openFaq === faq.id ? (
                            <ChevronUp className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pl-14"
                      >
                        <div className="space-y-4">
                          {/* Intro */}
                          {faq.answer.intro && (
                            <p className="text-slate-300">{faq.answer.intro}</p>
                          )}

                          {/* Script/Quote */}
                          {faq.answer.script && (
                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                              <div className="flex items-start gap-2">
                                <MessageSquare className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                                <p className="text-emerald-400 italic">{faq.answer.script}</p>
                              </div>
                            </div>
                          )}

                          {/* Details */}
                          {faq.answer.details && (
                            <p className="text-slate-400">{faq.answer.details}</p>
                          )}

                          {/* Example */}
                          {faq.answer.example && (
                            <div className="bg-slate-900/50 rounded-lg p-4">
                              <span className="text-blue-400 font-medium">Example: </span>
                              <span className="text-slate-300">{faq.answer.example}</span>
                            </div>
                          )}

                          {/* Follow up */}
                          {faq.answer.followUp && (
                            <p className="text-slate-400">{faq.answer.followUp}</p>
                          )}

                          {/* Tip */}
                          {faq.answer.tip && (
                            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                              <span className="text-amber-400 font-medium">💡 Tip: </span>
                              <span className="text-slate-300">{faq.answer.tip}</span>
                            </div>
                          )}

                          {/* Positioning */}
                          {faq.answer.positioning && (
                            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                              <p className="text-cyan-400 italic">"{faq.answer.positioning}"</p>
                            </div>
                          )}

                          {/* Tips list */}
                          {faq.answer.tips && (
                            <ul className="space-y-2">
                              {faq.answer.tips.map((tip, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300">
                                  <span className="text-emerald-400 mt-1">•</span>
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Examples list */}
                          {faq.answer.examples && (
                            <ul className="space-y-2">
                              {faq.answer.examples.map((ex, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-300">
                                  <span className="text-blue-400 mt-1">•</span>
                                  {ex}
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Policy */}
                          {faq.answer.policy && (
                            <p className="text-slate-400">{faq.answer.policy}</p>
                          )}

                          {/* Strategy */}
                          {faq.answer.strategy && (
                            <p className="text-slate-400">{faq.answer.strategy}</p>
                          )}

                          {/* Communication */}
                          {faq.answer.communication && (
                            <div className="bg-slate-900/50 rounded-lg p-4">
                              <p className="text-slate-300 italic">"{faq.answer.communication}"</p>
                            </div>
                          )}

                          {/* Transition */}
                          {faq.answer.transition && (
                            <p className="text-slate-400">{faq.answer.transition}</p>
                          )}

                          {/* Warning */}
                          {faq.answer.warning && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                              <span className="text-red-400 font-medium">⚠️ Warning: </span>
                              <span className="text-slate-300">{faq.answer.warning}</span>
                            </div>
                          )}

                          {/* Alternative */}
                          {faq.answer.alternative && (
                            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                              <span className="text-purple-400 font-medium">Better alternative: </span>
                              <span className="text-slate-300">{faq.answer.alternative}</span>
                            </div>
                          )}

                          {/* Bottom line */}
                          {faq.answer.bottomLine && (
                            <div className="pt-4 border-t border-slate-700/50">
                              <p className="text-slate-400">
                                <span className="text-emerald-400 font-semibold">Bottom line:</span> {faq.answer.bottomLine}
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Price Like a Pro?
            </h3>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              Pricing doesn't have to be scary. It's a system. Learn your costs, build in margin, quote ranges, adjust on-site. Do this consistently, and you'll stop leaving money on the table.
            </p>
            <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-6 py-3">
              <p className="text-emerald-400 font-medium">
                Most importantly: <span className="text-white">Charge what you're worth.</span> You're doing hard work in tough conditions. Price like it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
