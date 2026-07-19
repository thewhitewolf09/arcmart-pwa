'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Search, Bell, Clock, ChevronRight } from 'lucide-react';

export default function SavedSearchesPage() {
  const router = useRouter();

  const savedSearches = [
    {
      id: 1,
      query: 'Plumbers in Noida',
      filters: 'ArcMart Assured, Under ₹1000',
      date: 'Saved 2 days ago',
      alerts: true
    },
    {
      id: 2,
      query: 'Tile Suppliers',
      filters: 'Available Today',
      date: 'Saved last week',
      alerts: false
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant px-4 py-3 flex items-center pt-safe">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-container-highest transition-colors flex-shrink-0">
          <ArrowLeft className="w-5 h-5 text-on-surface" />
        </button>
        <span className="font-bold text-lg text-on-surface">Saved Searches</span>
      </div>

      <div className="flex-1 p-5 pb-24 space-y-4">
        {savedSearches.length > 0 ? (
          savedSearches.map((search) => (
            <div 
              key={search.id}
              className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-4 shadow-sm active:bg-surface-container transition-colors cursor-pointer group"
              onClick={() => router.push(`/search?q=${encodeURIComponent(search.query)}`)}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">{search.query}</h3>
                    <p className="text-xs text-on-surface-variant font-semibold mt-0.5">{search.filters}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t border-outline-variant/50">
                <div className="flex items-center text-xs text-on-surface-variant">
                  <Clock className="w-3.5 h-3.5 mr-1" /> {search.date}
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    // toggle alert
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                    search.alerts 
                      ? 'bg-primary/10 text-primary border-primary/20' 
                      : 'bg-surface text-on-surface-variant border-outline-variant hover:bg-surface-container'
                  }`}
                >
                  <Bell className="w-3.5 h-3.5" />
                  {search.alerts ? 'Alerts On' : 'Alerts Off'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center pt-20 text-center">
            <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-outline" />
            </div>
            <h2 className="text-lg font-bold text-on-surface mb-2">No Saved Searches</h2>
            <p className="text-sm text-on-surface-variant max-w-[250px]">
              Save your favorite search combinations to quickly find professionals later.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
