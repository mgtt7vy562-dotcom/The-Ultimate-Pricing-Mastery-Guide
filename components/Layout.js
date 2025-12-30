import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Truck, 
  Home, 
  DollarSign, 
  MapPin, 
  Calendar,
  Calculator,
  Zap,
  HelpCircle,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', page: 'Home', icon: Home },
    { name: 'Pricing Models', page: 'PricingModels', icon: DollarSign },
    { name: 'Regional Pricing', page: 'RegionalPricing', icon: MapPin },
    { name: 'Seasonal Calendar', page: 'SeasonalCalendar', icon: Calendar },
    { name: 'Profit Calculator', page: 'ProfitCalculator', icon: Calculator },
    { name: 'Best Practices', page: 'BestPractices', icon: Zap },
    { name: 'FAQ', page: 'FAQ', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">Pricing Mastery</span>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    currentPageName === item.page
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50">
        <div className="flex items-center justify-between h-14 px-4">
          <Link to={createPageUrl('Home')} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Truck className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold">Pricing Mastery</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-900 border-b border-slate-800"
            >
              <div className="p-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      currentPageName === item.page
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                    <ChevronRight className="w-4 h-4 ml-auto opacity-50" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className={`${currentPageName !== 'Home' ? 'pt-16 lg:pt-16' : ''}`}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Truck className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold">Junk Hauler Pricing Mastery</span>
          </div>
          <p className="text-slate-500 text-sm">
            The ultimate guide to pricing your junk removal business profitably.
          </p>
          <p className="text-slate-600 text-xs mt-4">
            Built by haulers, for haulers. Now get out there and haul smarter.
          </p>
        </div>
      </footer>
    </div>
  );
}
