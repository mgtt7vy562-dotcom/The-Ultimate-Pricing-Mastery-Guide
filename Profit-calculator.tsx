import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, TrendingUp, AlertTriangle, Check, Target, Percent } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function ProfitCalculator() {
  const [costs, setCosts] = useState({
    dumpFee: 80,
    fuel: 25,
    laborHours: 2,
    laborRate: 20,
    tolls: 0,
    other: 0
  });

  const [loadSize, setLoadSize] = useState('half');
  const [region, setRegion] = useState('medium');
  const [adjustments, setAdjustments] = useState({
    heavyDebris: false,
    stairs: false,
    urban: false,
    weekend: false
  });

  const loadSizeMultipliers = {
    minimum: { base: 99, max: 149 },
    quarter: { base: 150, max: 250 },
    half: { base: 251, max: 400 },
    threeQuarter: { base: 401, max: 550 },
    full: { base: 551, max: 750 }
  };

  const regionMultipliers = {
    low: 0.85,
    medium: 1.0,
    high: 1.35
  };

  const calculations = useMemo(() => {
    // Calculate labor cost including burden (20-30% extra for W-2)
    const baseLaborCost = costs.laborHours * costs.laborRate;
    const laborBurden = baseLaborCost * 0.25; // 25% burden
    const totalLaborCost = baseLaborCost + laborBurden;

    // Total costs
    const totalCosts = 
      costs.dumpFee + 
      costs.fuel + 
      totalLaborCost + 
      costs.tolls + 
      costs.other;

    // Get base price range for load size
    const loadRange = loadSizeMultipliers[loadSize];
    let basePrice = (loadRange.base + loadRange.max) / 2;

    // Apply region multiplier
    basePrice *= regionMultipliers[region];

    // Apply adjustments
    let adjustmentPercent = 0;
    if (adjustments.heavyDebris) adjustmentPercent += 25;
    if (adjustments.stairs) adjustmentPercent += 20;
    if (adjustments.urban) adjustmentPercent += 15;
    if (adjustments.weekend) adjustmentPercent += 20;

    const finalPrice = basePrice * (1 + adjustmentPercent / 100);
    const minPrice = loadRange.base * regionMultipliers[region] * (1 + adjustmentPercent / 100);
    const maxPrice = loadRange.max * regionMultipliers[region] * (1 + adjustmentPercent / 100);

    // Calculate profit and margin
    const profit = finalPrice - totalCosts;
    const margin = (profit / finalPrice) * 100;

    // Recommended price for 50% margin
    const recommendedPrice = totalCosts * 2;

    return {
      totalCosts,
      totalLaborCost,
      baseLaborCost,
      laborBurden,
      finalPrice,
      minPrice,
      maxPrice,
      profit,
      margin,
      recommendedPrice,
      adjustmentPercent
    };
  }, [costs, loadSize, region, adjustments]);

  const getMarginStatus = (margin) => {
    if (margin >= 60) return { color: 'emerald', label: 'Excellent', icon: Check };
    if (margin >= 50) return { color: 'green', label: 'Target Zone', icon: Target };
    if (margin >= 40) return { color: 'amber', label: 'Caution', icon: AlertTriangle };
    return { color: 'red', label: 'Danger', icon: AlertTriangle };
  };

  const marginStatus = getMarginStatus(calculations.margin);

  const costBreakdown = [
    { name: 'Dump Fees', value: costs.dumpFee, color: '#f59e0b' },
    { name: 'Fuel', value: costs.fuel, color: '#3b82f6' },
    { name: 'Labor', value: calculations.totalLaborCost, color: '#8b5cf6' },
    { name: 'Tolls/Other', value: costs.tolls + costs.other, color: '#64748b' },
    { name: 'Your Profit', value: Math.max(0, calculations.profit), color: '#22c55e' }
  ].filter(item => item.value > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
            <Calculator className="w-4 h-4 mr-1" />
            Profit Calculator
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calculate Your Margins
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Input your costs and see exactly what you should charge to hit your target margins
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Job Details */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-blue-400" />
                  </div>
                  Job Details
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-slate-300">Load Size</Label>
                  <Select value={loadSize} onValueChange={setLoadSize}>
                    <SelectTrigger className="bg-slate-900/50 border-slate-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minimum">Minimum (1-2 items)</SelectItem>
                      <SelectItem value="quarter">1/4 Load</SelectItem>
                      <SelectItem value="half">1/2 Load</SelectItem>
                      <SelectItem value="threeQuarter">3/4 Load</SelectItem>
                      <SelectItem value="full">Full Load</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-300">Market Region</Label>
                  <Select value={region} onValueChange={setRegion}>
                    <SelectTrigger className="bg-slate-900/50 border-slate-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low-Cost (Rural, South/Midwest)</SelectItem>
                      <SelectItem value="medium">Medium (Suburbs, Average)</SelectItem>
                      <SelectItem value="high">High-Cost (CA, NY, Metro)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Cost Inputs */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                  </div>
                  Your Costs
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <Label className="text-slate-300">Dump Fee ($)</Label>
                  <Input
                    type="number"
                    value={costs.dumpFee}
                    onChange={(e) => setCosts({ ...costs, dumpFee: Number(e.target.value) })}
                    className="bg-slate-900/50 border-slate-700 text-white"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-300">Fuel ($)</Label>
                  <Input
                    type="number"
                    value={costs.fuel}
                    onChange={(e) => setCosts({ ...costs, fuel: Number(e.target.value) })}
                    className="bg-slate-900/50 border-slate-700 text-white"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-300">Helper Hours</Label>
                  <Input
                    type="number"
                    value={costs.laborHours}
                    onChange={(e) => setCosts({ ...costs, laborHours: Number(e.target.value) })}
                    className="bg-slate-900/50 border-slate-700 text-white"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-300">Helper Rate ($/hr)</Label>
                  <Input
                    type="number"
                    value={costs.laborRate}
                    onChange={(e) => setCosts({ ...costs, laborRate: Number(e.target.value) })}
                    className="bg-slate-900/50 border-slate-700 text-white"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-300">Tolls/Parking ($)</Label>
                  <Input
                    type="number"
                    value={costs.tolls}
                    onChange={(e) => setCosts({ ...costs, tolls: Number(e.target.value) })}
                    className="bg-slate-900/50 border-slate-700 text-white"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-300">Other ($)</Label>
                  <Input
                    type="number"
                    value={costs.other}
                    onChange={(e) => setCosts({ ...costs, other: Number(e.target.value) })}
                    className="bg-slate-900/50 border-slate-700 text-white"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Adjustments */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Percent className="w-4 h-4 text-purple-400" />
                  </div>
                  Price Adjustments
                  {calculations.adjustmentPercent > 0 && (
                    <Badge className="ml-2 bg-emerald-500/20 text-emerald-400">
                      +{calculations.adjustmentPercent}%
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { key: 'heavyDebris', label: 'Heavy Debris', extra: '+25%' },
                    { key: 'stairs', label: 'Stairs/Lift', extra: '+20%' },
                    { key: 'urban', label: 'Urban Hassles', extra: '+15%' },
                    { key: 'weekend', label: 'Weekend/Rush', extra: '+20%' }
                  ].map((adj) => (
                    <button
                      key={adj.key}
                      onClick={() => setAdjustments({ ...adjustments, [adj.key]: !adjustments[adj.key] })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        adjustments[adj.key]
                          ? 'bg-emerald-500/20 border-emerald-500/50'
                          : 'bg-slate-900/50 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="text-white text-sm font-medium">{adj.label}</div>
                      <div className={`text-xs ${adjustments[adj.key] ? 'text-emerald-400' : 'text-slate-500'}`}>
                        {adj.extra}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Margin Indicator */}
            <Card className={`bg-${marginStatus.color}-500/10 border-${marginStatus.color}-500/30`}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto bg-${marginStatus.color}-500/20 rounded-2xl flex items-center justify-center mb-4`}>
                    <marginStatus.icon className={`w-8 h-8 text-${marginStatus.color}-400`} />
                  </div>
                  <div className={`text-5xl font-bold text-${marginStatus.color}-400 mb-2`}>
                    {calculations.margin.toFixed(1)}%
                  </div>
                  <div className="text-slate-400">Gross Margin</div>
                  <Badge className={`mt-2 bg-${marginStatus.color}-500/20 text-${marginStatus.color}-400`}>
                    {marginStatus.label}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Price Recommendation */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-lg">Recommended Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-emerald-400">
                    ${calculations.minPrice.toFixed(0)} - ${calculations.maxPrice.toFixed(0)}
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Costs:</span>
                    <span className="text-white font-medium">${calculations.totalCosts.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Your Profit:</span>
                    <span className={`font-medium ${calculations.profit > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      ${calculations.profit.toFixed(2)}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-400">For 50% margin:</span>
                      <span className="text-amber-400 font-medium">${calculations.recommendedPrice.toFixed(0)}+</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cost Breakdown Chart */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-lg">Cost Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={costBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {costBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => `$${value.toFixed(2)}`}
                        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {costBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                      <span className="text-slate-400">{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Formula Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-4">The Golden Formula</h3>
          <div className="inline-block bg-slate-900/50 rounded-xl px-8 py-4">
            <span className="text-2xl font-mono text-purple-400">(Total Costs × 2 to 2.5) = Your Charge</span>
          </div>
          <p className="text-slate-400 mt-4">
            Labor is your biggest expense. Add 20-30% to hourly wages for taxes, benefits, and workers' comp.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
