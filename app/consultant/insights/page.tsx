'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, TrendingUp, TrendingDown, MapPin, Activity } from 'lucide-react';

export default function ConsultantInsights() {
  const router = useRouter();

  const mockInsights = [
    { area: 'Koramangala', trend: 'up', percentage: '+4.2%', avgPrice: '₹12,500/sqft', demand: 'High' },
    { area: 'Indiranagar', trend: 'up', percentage: '+2.1%', avgPrice: '₹14,200/sqft', demand: 'Very High' },
    { area: 'HSR Layout', trend: 'down', percentage: '-1.5%', avgPrice: '₹9,800/sqft', demand: 'Moderate' },
    { area: 'Whitefield', trend: 'up', percentage: '+5.8%', avgPrice: '₹8,500/sqft', demand: 'High' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-primary px-4 py-3 flex items-center text-white shadow-md">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-white/10 transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-sm truncate">Market Insights</span>
      </div>

      <div className="flex-1 p-5 pb-24 space-y-6">
        
        {/* Phase 2 Banner */}
        <div className="bg-info/10 border border-info/20 rounded-2xl p-4 flex items-start">
          <Activity className="w-5 h-5 text-info mr-3 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-on-surface mb-1">Coming Soon (Phase 2)</p>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              These insights are currently in beta. Soon, you will get real-time, AI-driven price trends based on ArcMart platform data to help you price properties perfectly.
            </p>
          </div>
        </div>

        <section>
          <div className="flex items-center justify-between mb-4 ml-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Locality Trends (Past 30 Days)</h3>
          </div>
          
          <div className="space-y-3">
            {mockInsights.map((insight, idx) => (
              <div key={idx} className="glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between shadow-sm">
                <div>
                  <h4 className="font-bold text-sm text-on-surface flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-primary mr-1" /> {insight.area}
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-1">Avg: <span className="font-semibold text-on-surface">{insight.avgPrice}</span></p>
                </div>
                
                <div className="text-right">
                  <div className={`inline-flex items-center text-sm font-bold ${insight.trend === 'up' ? 'text-success' : 'text-error'}`}>
                    {insight.trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                    {insight.percentage}
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">Demand: {insight.demand}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
