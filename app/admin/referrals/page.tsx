'use client';

import React from 'react';
import { ShieldAlert, TrendingUp, Users, DollarSign, Search, Filter, MoreVertical, Download } from 'lucide-react';

export default function AdminReferralDashboard() {
  
  const stats = [
    { label: 'Total Conversions', value: '1,248', change: '+12%', icon: Users },
    { label: 'Credits Issued', value: '₹6.2L', change: '+8%', icon: DollarSign },
    { label: 'Free Months Given', value: '342', change: '+15%', icon: TrendingUp },
    { label: 'Fraud Flags', value: '14', change: '-2%', icon: ShieldAlert, color: 'text-error' },
  ];

  const data = [
    { id: 'REF-1092', referrer: 'Aman Gupta', type: 'Homeowner', referred: 'Neha Sharma', status: 'Completed', reward: '₹500', date: '2026-10-24', fraudRisk: 'Low' },
    { id: 'REF-1093', referrer: 'Jai Durga Tiles', type: 'Supplier', referred: 'RK Hardware', status: 'Completed', reward: '1 Month Pro', date: '2026-10-24', fraudRisk: 'Low' },
    { id: 'REF-1094', referrer: 'Ravi Electrician', type: 'Professional', referred: 'Singh Painters', status: 'Pending', reward: '₹500', date: '2026-10-23', fraudRisk: 'High' },
    { id: 'REF-1095', referrer: 'Priya Iyer', type: 'Homeowner', referred: 'Rahul Kumar', status: 'Completed', reward: '₹500', date: '2026-10-22', fraudRisk: 'Low' },
    { id: 'REF-1096', referrer: 'Amit Plumbers', type: 'Professional', referred: 'Suresh FixIt', status: 'Pending', reward: '₹500', date: '2026-10-22', fraudRisk: 'Medium' },
  ];

  return (
    <div className="min-h-screen bg-surface-container-lowest p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-black text-on-surface">Referral Program Manager</h1>
          <p className="text-sm font-medium text-on-surface-variant mt-1">Monitor conversions, rewards, and detect fraudulent activity across all user types.</p>
        </div>
        <button className="h-10 px-4 bg-primary text-white font-bold rounded-lg flex items-center gap-2 hover:bg-primary-dark transition shadow-sm w-max">
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-outline-variant/50 rounded-2xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-surface-container ${stat.color || 'text-primary'}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-md ${stat.change.startsWith('+') ? 'bg-success/10 text-success-dark' : 'bg-error/10 text-error-dark'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-black text-on-surface mb-1">{stat.value}</h3>
            <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Data Table Area */}
      <div className="bg-white border border-outline-variant/50 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        
        {/* Table Toolbar */}
        <div className="p-4 border-b border-outline-variant/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-lowest">
          <div className="relative w-full sm:w-96">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input 
              type="text" 
              placeholder="Search by name, ID, or type..." 
              className="w-full pl-10 pr-4 h-10 bg-surface-container rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition border border-transparent focus:border-primary"
            />
          </div>
          <button className="h-10 px-4 bg-surface-container hover:bg-surface-variant text-on-surface font-bold rounded-lg flex items-center justify-center gap-2 transition border border-outline-variant/50 shrink-0">
            <Filter className="w-4 h-4" /> Filter Records
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-outline-variant/50">
                <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider whitespace-nowrap">ID</th>
                <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Referrer</th>
                <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Type</th>
                <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Referred User</th>
                <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Reward Status</th>
                <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Fraud Risk</th>
                <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Date</th>
                <th className="p-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {data.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-container-lowest transition group">
                  <td className="p-4 text-sm font-bold text-primary whitespace-nowrap">{row.id}</td>
                  <td className="p-4 text-sm font-bold text-on-surface whitespace-nowrap">{row.referrer}</td>
                  <td className="p-4 text-sm whitespace-nowrap">
                    <span className="bg-surface-container px-2 py-1 rounded-md text-xs font-bold text-on-surface-variant">{row.type}</span>
                  </td>
                  <td className="p-4 text-sm font-bold text-on-surface whitespace-nowrap">{row.referred}</td>
                  <td className="p-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className={`text-xs font-bold uppercase tracking-wider ${row.status === 'Completed' ? 'text-success' : 'text-amber-500'}`}>{row.status}</span>
                      <span className="text-xs font-medium text-on-surface-variant">{row.reward}</span>
                    </div>
                  </td>
                  <td className="p-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-md text-xs font-bold uppercase ${
                      row.fraudRisk === 'Low' ? 'bg-success/10 text-success-dark' : 
                      row.fraudRisk === 'Medium' ? 'bg-warning/10 text-warning-dark' : 
                      'bg-error/10 text-error-dark'
                    }`}>
                      {row.fraudRisk}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-medium text-on-surface-variant whitespace-nowrap">{row.date}</td>
                  <td className="p-4 text-right">
                    <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-outline-variant/50 flex items-center justify-between text-sm font-medium text-on-surface-variant bg-surface-container-lowest">
          <span>Showing 1 to 5 of 1,248 entries</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container transition disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container transition">Next</button>
          </div>
        </div>

      </div>

    </div>
  );
}
