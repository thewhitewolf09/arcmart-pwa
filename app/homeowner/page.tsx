'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { LogOut, MapPin, Search, Wrench, Shield, Star, Plus, Check } from 'lucide-react';
import { useMockStore } from '../../store/mockStore';

export default function HomeownerDashboard() {
  const router = useRouter();
  const { user, logout, professionals, quoteRequests, addQuoteRequest } = useMockStore();
  const [showRequestModal, setShowRequestModal] = useState(false);
  
  const [reqTitle, setReqTitle] = useState('');
  const [reqCategory, setReqCategory] = useState('plumber');
  const [reqDesc, setReqDesc] = useState('');

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reqTitle.trim()) return;
    addQuoteRequest({
      title: reqTitle,
      category: reqCategory,
      description: reqDesc
    });
    setReqTitle('');
    setReqDesc('');
    setShowRequestModal(false);
  };

  return (
    <div className="flex-1 flex flex-col p-5 pb-24 bg-white">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-accent-cyan/15 flex items-center justify-center text-accent-cyan">
            <MapPin className="w-4 h-4 fill-accent-cyan" />
          </div>
          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-semibold">Active Locality</span>
            <span className="text-xs font-bold text-brand-navy">{user.location?.address || 'Sector 18, Noida'}</span>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="p-2 rounded-full bg-gray-100 border border-gray-200 hover:bg-red-50 hover:text-red-500 text-gray-500 transition"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>

      {/* Hero Welcome banner */}
      <div className="glass-card rounded-card p-5 border border-accent-cyan/30 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-xl pointer-events-none" />
        <h2 className="text-xl font-bold text-brand-navy mb-1">Hello, Builder!</h2>
        <p className="text-gray-600 text-xs leading-normal mb-4">
          Generate structural plan blueprints or request quick local material quotes in just 3 clicks.
        </p>
        <button
          onClick={() => setShowRequestModal(true)}
          className="bg-accent-cyan hover:bg-accent-cyan/95 text-white font-bold text-xs py-2.5 px-4 rounded-lg flex items-center space-x-1.5 transition active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>New Quote Request</span>
        </button>
      </div>

      {/* Category List */}
      <div className="mb-6">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Construction Divisions</h3>
        <div className="grid grid-cols-4 gap-3 text-center">
          {[
            { name: 'Plumbers', count: 12 },
            { name: 'Wiring', count: 8 },
            { name: 'Masons', count: 15 },
            { name: 'Carpenters', count: 6 }
          ].map((cat, idx) => (
            <div key={idx} className="glass-card rounded-lg p-2.5 border border-gray-200 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-1.5">
                <Wrench className="w-4 h-4 text-accent-cyan" />
              </div>
              <span className="text-[10px] font-bold text-brand-navy block truncate w-full">{cat.name}</span>
              <span className="text-[9px] text-gray-500 block mt-0.5">{cat.count} near you</span>
            </div>
          ))}
        </div>
      </div>

      {/* Live active Requests list */}
      {quoteRequests.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Active Requests</h3>
          <div className="space-y-3">
            {quoteRequests.map((req) => (
              <div key={req.id} className="glass-card rounded-card p-4 border border-gray-200 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm text-brand-navy mb-0.5">{req.title}</h4>
                  <p className="text-[10px] text-gray-600 capitalize">{req.category} • Noida Sector 18</p>
                </div>
                <span className={`text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                  req.status === 'quotes_received' 
                    ? 'bg-amber-50 text-accent-amber border border-accent-amber/20' 
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {req.status === 'quotes_received' ? 'Quotes Received (1)' : 'Pending response'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Professionals Live Feed list */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Verified Local Workers</h3>
        <div className="space-y-3">
          {professionals.map((pro) => (
            <div key={pro.id} className="glass-card rounded-card p-4 border border-gray-200 flex space-x-3 items-start glass-card-hover cursor-pointer transition">
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-accent-cyan/20 flex items-center justify-center text-xs font-bold text-accent-cyan">
                {pro.name.split(' ').map(n=>n[0]).join('')}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-sm text-brand-navy">{pro.name}</span>
                    {pro.isVerified && <Shield className="w-3.5 h-3.5 text-accent-cyan fill-accent-cyan/15" />}
                  </div>
                  <span className="text-xs font-bold text-accent-cyan">{pro.hourlyRate}</span>
                </div>
                <p className="text-[10px] text-gray-600 mt-0.5 capitalize">{pro.category} • {pro.experienceYears} yrs exp</p>
                
                <div className="flex items-center space-x-3 mt-2 text-[10px] text-gray-500">
                  <span className="flex items-center text-accent-gold">
                    <Star className="w-3.5 h-3.5 fill-accent-gold mr-0.5" />
                    {pro.rating} ({pro.reviewsCount})
                  </span>
                  <span>⚡ Responds {pro.responseTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mock request bottom modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center">
          <div className="w-full max-w-[480px] bg-white border-t border-gray-200 rounded-t-sheet p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-brand-navy">Create New RFQ</h3>
              <button onClick={() => setShowRequestModal(false)} className="text-gray-500 text-xs uppercase hover:underline">Close</button>
            </div>
            <form onSubmit={handleCreateRequest} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Requirement Title</label>
                <input
                  type="text"
                  placeholder="e.g. Repair bathroom drainage pipeline"
                  value={reqTitle}
                  onChange={(e) => setReqTitle(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-card p-3.5 text-brand-navy text-xs focus:border-accent-cyan focus:outline-none transition"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Category</label>
                <select
                  value={reqCategory}
                  onChange={(e) => setReqCategory(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-card p-3.5 text-brand-navy text-xs focus:border-accent-cyan focus:outline-none transition capitalize"
                >
                  <option value="plumber">Plumber</option>
                  <option value="electrician">Electrician</option>
                  <option value="carpenter">Carpenter</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Additional Details</label>
                <textarea
                  placeholder="Describe the problem, approximate size, work schedule..."
                  value={reqDesc}
                  onChange={(e) => setReqDesc(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-card p-3.5 text-brand-navy text-xs h-24 focus:border-accent-cyan focus:outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-cyan text-white font-bold rounded-card p-4 text-xs transition active:scale-95"
              >
                Submit RFQ to Local Professionals
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
