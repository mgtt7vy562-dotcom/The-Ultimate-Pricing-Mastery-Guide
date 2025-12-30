import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Truck, 
  MapPin, 
  Calendar, 
  BookOpen,
  ChevronRight,
  Target,
  Zap,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Home() {
  const features = [
    {
      icon: DollarSign,
      title: "Pricing Models",
      description: "Master the 1/4 load system and hybrid range pricing",
      page: "PricingModels",
      color: "bg-emerald-500"
    },
    {
      icon: MapPin,
      title: "Regional Pricing",
      description: "Understand cost factors across different US markets",
      page: "RegionalPricing",
      color: "bg-blue-500"
    },
    {
      icon: Calendar,
      title: "Seasonal Strategy",
      description: "Month-by-month pricing adjustments and demand patterns",
      page: "SeasonalCalendar",
      color: "bg-amber-500"
    },
    {
      icon: Target,
      title: "Profit Calculator",
      description: "Calculate margins and ensure 50%+ profitability",
      page: "ProfitCalculator",
      color: "bg-purple-500"
    },
    {
      icon: Zap,
      title: "Best Practices",
      description: "Gold standard rules for charging jobs profitably",
      page: "BestPractices",
      color: "bg-rose-500"
    },
    {
      icon: BookOpen,
      title: "FAQ & Scripts",
      description: "Handle objections and close more deals",
      page: "FAQ",
      color: "bg-cyan-500"
    }
  ];

  const stats = [
    { value: "40%", label: "of haulers undercharge by 15-25%" },
    { value: "50%+", label: "target gross margin minimum" },
    { value: "20-30%", label: "profit increase with proper pricing" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-6">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">For Junk Removal Professionals</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Ultimate
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Pricing Mastery Guide
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Stop leaving money on the table. Master pricing strategies that can boost your profit per job by 20-30%. Real systems from real haulers.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to={createPageUrl('PricingModels')}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 flex items-center gap-2"
                >
                  Start Learning
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to={createPageUrl('ProfitCalculator')}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-700/50 border border-slate-600 text-white font-semibold rounded-xl flex items-center gap-2"
                >
                  Try Calculator
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to Price Like a Pro
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive tools, strategies, and visual guides to master junk removal pricing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={createPageUrl(feature.page)}>
                <div className="group h-full bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer">
                  <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  <div className="mt-6 flex items-center text-emerald-400 font-medium">
                    Explore
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Insight Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">The Golden Rule</h3>
              <p className="text-slate-300 text-lg">
                Always aim for <span className="text-emerald-400 font-semibold">50-60% gross margins minimum</span>. 
                Use this formula: <span className="text-cyan-400 font-mono">(Total Costs × 2 to 2.5) = Your Charge</span>
              </p>
            </div>
          </div>
          
          <div className="bg-slate-900/50 rounded-xl p-6 mt-6">
            <div className="text-slate-400 mb-2">Example Calculation:</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-slate-500 text-sm">Dump Fee</div>
                <div className="text-white font-semibold">$80</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-slate-500 text-sm">Fuel</div>
                <div className="text-white font-semibold">$20</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-slate-500 text-sm">Labor</div>
                <div className="text-white font-semibold">$40</div>
              </div>
              <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-4">
                <div className="text-emerald-400 text-sm">Your Charge</div>
                <div className="text-emerald-400 font-bold">$280-350</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
