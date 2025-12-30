import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, TrendingDown, Minus, Sun, Snowflake, Leaf, Flower2, AlertCircle, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function SeasonalCalendar() {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const demandData = [
    { month: 'Jan', demand: 40, adjustment: -10, season: 'winter' },
    { month: 'Feb', demand: 45, adjustment: -10, season: 'winter' },
    { month: 'Mar', demand: 70, adjustment: 10, season: 'spring' },
    { month: 'Apr', demand: 80, adjustment: 10, season: 'spring' },
    { month: 'May', demand: 95, adjustment: 15, season: 'peak' },
    { month: 'Jun', demand: 100, adjustment: 15, season: 'peak' },
    { month: 'Jul', demand: 75, adjustment: 0, season: 'summer' },
    { month: 'Aug', demand: 70, adjustment: 0, season: 'summer' },
    { month: 'Sep', demand: 85, adjustment: 10, season: 'fall' },
    { month: 'Oct', demand: 80, adjustment: 10, season: 'fall' },
    { month: 'Nov', demand: 50, adjustment: 0, season: 'winter' },
    { month: 'Dec', demand: 35, adjustment: 0, season: 'winter' }
  ];

  const getBarColor = (season) => {
    switch(season) {
      case 'peak': return '#22c55e';
      case 'spring': return '#10b981';
      case 'fall': return '#f59e0b';
      case 'summer': return '#eab308';
      case 'winter': return '#3b82f6';
      default: return '#64748b';
    }
  };

  const seasons = [
    {
      id: 'winter',
      name: 'January - February',
      title: 'Slow Season',
      icon: Snowflake,
      color: 'blue',
      demand: 'Low',
      adjustment: '-10%',
      strategies: [
        '"New Year Clean-Out Special - 10% off Tuesday-Thursday"',
        'Target businesses (office moves, inventory clear-outs)',
        'Focus on repeat customers with loyalty discounts'
      ],
      tips: 'People are broke from holidays, cold weather keeps demand low'
    },
    {
      id: 'spring',
      name: 'March - April',
      title: 'Spring Ramp-Up',
      icon: Flower2,
      color: 'emerald',
      demand: 'Rising Fast',
      adjustment: '+10-15%',
      strategies: [
        '"Spring special: Book this week, get $40 off"',
        'Garage/attic/basement cleanouts explode',
        'Focus on repeat customers - give 10-15% loyalty discount',
        'New customers: Standard rates (don\'t advertise increases)'
      ],
      tips: 'Spring cleaning kicks in hard - prepare for volume'
    },
    {
      id: 'peak',
      name: 'May - June',
      title: 'PEAK SEASON',
      icon: Sun,
      color: 'green',
      demand: 'Highest',
      adjustment: 'Standard rates',
      strategies: [
        '"We\'re booking 1-2 weeks out"',
        'Focus on efficiency - maximize jobs per day',
        'Repeat customers: Keep your word on loyal pricing',
        'New customers: Full rates (no discounts)'
      ],
      tips: 'Moving season + school\'s out = maximum demand'
    },
    {
      id: 'summer',
      name: 'July - August',
      title: 'Hot & Steady',
      icon: Sun,
      color: 'amber',
      demand: 'Moderate',
      adjustment: 'Standard',
      strategies: [
        '"Beat the heat - book early morning slots"',
        'Target foreclosures and estate cleanouts',
        'Stay hydrated, charge extra for brutal heat jobs'
      ],
      tips: 'Vacations slow things down slightly'
    },
    {
      id: 'fall',
      name: 'September - October',
      title: 'Fall Boost',
      icon: Leaf,
      color: 'orange',
      demand: 'High',
      adjustment: '+10%',
      strategies: [
        '"Get it done before snow flies"',
        'Leaf/yard waste + junk removal bundles',
        'College town goldmine (students moving out)'
      ],
      tips: 'Pre-winter prep drives second busy season'
    },
    {
      id: 'holiday',
      name: 'November - December',
      title: 'Holiday Slowdown',
      icon: Snowflake,
      color: 'blue',
      demand: 'Low',
      adjustment: 'Base rates',
      strategies: [
        '"Post-holiday cleanup" pre-bookings',
        'Gift certificates (businesses love these)',
        'Take vacation - you earned it'
      ],
      tips: 'People focused on holidays, not junk'
    }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-3">
          <p className="text-white font-semibold">{data.month}</p>
          <p className="text-slate-400">Demand: {data.demand}%</p>
          <p className={data.adjustment > 0 ? 'text-emerald-400' : data.adjustment < 0 ? 'text-blue-400' : 'text-slate-400'}>
            Price Adjust: {data.adjustment > 0 ? '+' : ''}{data.adjustment}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
            <Calendar className="w-4 h-4 mr-1" />
            Seasonal Strategy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Junk Removal Year
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Understand demand patterns and adjust your pricing seasonally for maximum profitability
          </p>
        </motion.div>

        {/* Annual Demand Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-6 text-center">Demand Throughout the Year</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demandData}>
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="demand" radius={[4, 4, 0, 0]}>
                  {demandData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getBarColor(entry.season)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500" />
              <span className="text-slate-400 text-sm">Peak (+15%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-emerald-500" />
              <span className="text-slate-400 text-sm">Busy (+10%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-amber-500" />
              <span className="text-slate-400 text-sm">Steady (0%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-500" />
              <span className="text-slate-400 text-sm">Slow (-10%)</span>
            </div>
          </div>
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-amber-400 font-semibold mb-2">Important Note</h3>
              <p className="text-slate-300 text-sm">
                These patterns reflect <span className="font-semibold">ORGANIC demand</span> (referrals, Google searches). 
                If you're investing heavily in paid ads ($2,000-5,000/month), you can stay busy year-round by forcing demand.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Season Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {seasons.map((season, index) => (
            <motion.div
              key={season.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full bg-slate-800/50 border-slate-700/50 hover:border-${season.color}-500/30 transition-all`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${season.color}-500/20`}>
                        <season.icon className={`w-5 h-5 text-${season.color}-400`} />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{season.title}</CardTitle>
                        <p className="text-slate-500 text-sm">{season.name}</p>
                      </div>
                    </div>
                    <Badge className={`bg-${season.color}-500/20 text-${season.color}-400 border-${season.color}-500/30`}>
                      {season.adjustment}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm mb-4 italic">"{season.tips}"</p>
                  
                  <div className="space-y-2">
                    <div className="text-slate-300 text-sm font-medium">Strategy:</div>
                    {season.strategies.map((strategy, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <span className={`text-${season.color}-400 mt-1`}>•</span>
                        <span className="text-slate-400">{strategy}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fair Pricing Ethics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-8"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Fair Pricing Ethics</h3>
              <p className="text-slate-400">Loyal customers deserve fair treatment. Here's how to build a sustainable business:</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { text: 'Give repeat customers 10-20% discounts year-round', icon: '✓' },
              { text: 'Lock in annual rates for property managers', icon: '✓' },
              { text: 'Reward referrals with $25-50 off next job', icon: '✓' },
              { text: "Don't announce price increases to existing customers", icon: '✓' },
              { text: "Don't price gouge during emergencies or peak times", icon: '✓' },
              { text: 'Adjust pricing gradually (5-10% annually)', icon: '✓' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3">
                <span className="text-emerald-400 font-bold">{item.icon}</span>
                <span className="text-slate-300 text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
            <p className="text-slate-300 text-sm">
              <span className="text-amber-400 font-semibold">Why This Matters:</span> If you charge someone $300 in March and $450 for the same job in May "because it's peak season," you'll lose them forever. Build long-term relationships instead.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
