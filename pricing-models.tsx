import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Check, 
  X, 
  AlertTriangle,
  Star,
  ChevronRight,
  Package
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function PricingModels() {
  const [selectedModel, setSelectedModel] = useState('hybrid');

  const loadSizes = [
    { size: "Minimum Fee", range: "$99-149", description: "1-2 items, super light loads", fill: 12.5, color: "from-blue-500 to-blue-400" },
    { size: "1/4 Load", range: "$150-250", description: "Basic furniture, yard waste, light household", fill: 25, color: "from-emerald-500 to-emerald-400" },
    { size: "1/2 Load", range: "$251-400", description: "Mixed household junk, moderate volume", fill: 50, color: "from-amber-500 to-amber-400" },
    { size: "3/4 Load", range: "$401-550", description: "Larger cleanouts, multiple rooms", fill: 75, color: "from-orange-500 to-orange-400" },
    { size: "Full Load", range: "$551+", description: "No cap—adjust for overloads, density", fill: 100, color: "from-rose-500 to-rose-400" }
  ];

  const adjustments = [
    { category: "Debris Type", items: [
      { name: "Heavy/dense (concrete, dirt, bricks)", adjustment: "+10-30%", extra: "+$100-200 for 1/2 load concrete" },
      { name: "Light (cardboard, foam, yard waste)", adjustment: "-10%", extra: "" }
    ]},
    { category: "Location", items: [
      { name: "Urban hassles (no parking, tight alleys)", adjustment: "+10-20%", extra: "+$50 for city job" },
      { name: "Rural access (long driveways, gates)", adjustment: "+10%", extra: "" }
    ]},
    { category: "Workload", items: [
      { name: "Stairs, disassembly, heavy lifting", adjustment: "+15-30%", extra: "+$75 for 2nd floor" },
      { name: "Easy, curbside pickup", adjustment: "Standard", extra: "" }
    ]}
  ];

  const models = [
    {
      id: 'eighth',
      name: '1/8 Truck Model',
      description: 'Breaks truck into eighths for precise pricing',
      pros: ['Super precise for odd loads', 'Easy to upsell increments', 'Good for competitive markets'],
      cons: ['Confuses customers', 'Leads to disputes', 'Takes longer to quote'],
      recommendation: 'Skip unless hyper-competitive market',
      color: 'red'
    },
    {
      id: 'quarter',
      name: '1/4 Truck Model',
      description: 'Simplified quarters: 1/4, 1/2, 3/4, full',
      pros: ['Easy for customers to understand', 'Faster quotes', 'Fewer disputes'],
      cons: ['Less flexibility for in-between', 'May undercharge dense items'],
      recommendation: 'Good foundation, but can improve',
      color: 'amber'
    },
    {
      id: 'hybrid',
      name: 'Hybrid Range System',
      description: 'Quarter model + ranges for real-world variability',
      pros: ['Best of both worlds', 'Flexible yet simple', 'Sets expectations upfront', 'Adjust on-site easily'],
      cons: ['Requires confidence to present'],
      recommendation: 'RECOMMENDED - This is what top haulers use',
      color: 'emerald'
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
          <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
            Core Pricing Models
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose What Fits Your Market
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Volume-based pricing is the industry standard—customers visualize "half a truck" way easier than "four hours of labor plus disposal fees."
          </p>
        </motion.div>

        {/* Model Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedModel(model.id)}
              className={`cursor-pointer transition-all duration-300 ${
                selectedModel === model.id ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              <Card className={`h-full bg-slate-800/50 border-2 transition-all ${
                selectedModel === model.id 
                  ? model.color === 'emerald' 
                    ? 'border-emerald-500 bg-emerald-500/10' 
                    : model.color === 'amber'
                    ? 'border-amber-500 bg-amber-500/10'
                    : 'border-red-500 bg-red-500/10'
                  : 'border-slate-700/50 hover:border-slate-600'
              }`}>
                <CardHeader>
                  {model.id === 'hybrid' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                      <span className="text-amber-400 text-sm font-medium">Recommended</span>
                    </div>
                  )}
                  <CardTitle className="text-white text-xl">{model.name}</CardTitle>
                  <p className="text-slate-400 text-sm">{model.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-emerald-400 text-sm font-medium mb-2 flex items-center gap-1">
                        <Check className="w-4 h-4" /> Pros
                      </div>
                      <ul className="space-y-1">
                        {model.pros.map((pro, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-emerald-400 mt-1">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-red-400 text-sm font-medium mb-2 flex items-center gap-1">
                        <X className="w-4 h-4" /> Cons
                      </div>
                      <ul className="space-y-1">
                        {model.cons.map((con, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-red-400 mt-1">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`p-3 rounded-lg ${
                      model.color === 'emerald' ? 'bg-emerald-500/20' :
                      model.color === 'amber' ? 'bg-amber-500/20' : 'bg-red-500/20'
                    }`}>
                      <p className={`text-sm font-medium ${
                        model.color === 'emerald' ? 'text-emerald-400' :
                        model.color === 'amber' ? 'text-amber-400' : 'text-red-400'
                      }`}>
                        {model.recommendation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Visual Load Size Guide */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Visual Load Size Guide</h2>
            <p className="text-slate-400">Show this to customers - everyone understands quarters!</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {loadSizes.map((load, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4 text-center"
              >
                {/* Truck Visual */}
                <div className="relative w-full aspect-square mb-4 bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/30">
                  <div className="absolute inset-0 flex items-end justify-center p-2">
                    <div className="w-full h-full rounded-lg border-2 border-slate-600 relative overflow-hidden">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${load.fill}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${load.color}`}
                      />
                    </div>
                  </div>
                  <Truck className="absolute top-2 left-2 w-5 h-5 text-slate-500" />
                </div>

                <div className="text-white font-semibold text-sm mb-1">{load.size}</div>
                <div className={`text-lg font-bold bg-gradient-to-r ${load.color} text-transparent bg-clip-text`}>
                  {load.range}
                </div>
                <div className="text-slate-500 text-xs mt-2 leading-tight">{load.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Price Adjustment Guide */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">How to Adjust Pricing</h2>
            <p className="text-slate-400">Fine-tune your quotes based on these factors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adjustments.map((category, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-amber-500' : 'bg-emerald-500'
                    }`} />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="bg-slate-900/50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-slate-300 text-sm">{item.name}</span>
                        <Badge className={`ml-2 ${
                          item.adjustment.includes('+') ? 'bg-emerald-500/20 text-emerald-400' :
                          item.adjustment.includes('-') ? 'bg-blue-500/20 text-blue-400' :
                          'bg-slate-500/20 text-slate-400'
                        }`}>
                          {item.adjustment}
                        </Badge>
                      </div>
                      {item.extra && (
                        <span className="text-slate-500 text-xs">{item.extra}</span>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Quote Range Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">How the Range System Works</h3>
              <div className="space-y-4 text-slate-300">
                <p>
                  <span className="text-emerald-400 font-semibold">Over the phone:</span> "Based on your description, I'm thinking $200-300 for a 1/2 load."
                </p>
                <p>
                  <span className="text-emerald-400 font-semibold">On-site:</span> "Looks like it's on the higher end of that range—about $280. Sound good?"
                </p>
                <p className="text-slate-400 text-sm mt-4">
                  This sets expectations without locking you in. Customers appreciate the transparency, and you avoid the trap of fixed quotes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
