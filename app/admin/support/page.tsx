'use client';

import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Ticket as TicketIcon, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AdminSupportQueue() {
  const [activeTab, setActiveTab] = useState('unassigned');

  const stats = [
    { label: 'Unassigned', value: '24', icon: AlertCircle, color: 'text-error' },
    { label: 'In Progress', value: '156', icon: Clock, color: 'text-warning-dark' },
    { label: 'Resolved (Today)', value: '89', icon: CheckCircle2, color: 'text-success-dark' },
  ];

  const tickets = [
    { id: 'TCK-9921', user: 'Jai Durga Tiles', type: 'Supplier', subject: 'GST Verification Failed', priority: 'High', status: 'Unassigned', time: '10m ago' },
    { id: 'TCK-9920', user: 'Aman Gupta', type: 'Homeowner', subject: 'Pro didn\'t show up', priority: 'Critical', status: 'Unassigned', time: '25m ago' },
    { id: 'TCK-9918', user: 'Ravi Electrician', type: 'Professional', subject: 'Cannot accept leads', priority: 'High', status: 'Unassigned', time: '1h ago' },
    { id: 'TCK-9915', user: 'Neha Sharma', type: 'Homeowner', subject: 'Payment failed but deducted', priority: 'Medium', status: 'Unassigned', time: '2h ago' },
    { id: 'TCK-9910', user: 'Singh Painters', type: 'Professional', subject: 'Profile photo rejected again', priority: 'Low', status: 'Unassigned', time: '3h ago' },
  ];

  return (
    <div className="min-h-screen bg-surface-container-lowest p-6 md:p-10 font-sans">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-black text-on-surface">Support Queue</h1>
        <p className="text-sm font-medium text-on-surface-variant mt-1">Manage incoming tickets, assign agents, and track resolution SLAs.</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-outline-variant/50 rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-surface-container ${stat.color}`}>
              <stat.icon className="w-7 h-7" />
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-on-surface">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Main Queue Area */}
      <div className="bg-white border border-outline-variant/50 rounded-2xl shadow-sm overflow-hidden flex flex-col min-h-[500px]">
        
        {/* Tabs & Toolbar */}
        <div className="border-b border-outline-variant/50 bg-surface-container-lowest">
          <div className="flex px-4 pt-4 gap-6 overflow-x-auto hide-scrollbar">
            {['unassigned', 'my-tickets', 'all-open', 'resolved'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-bold capitalize whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tab.replace('-', ' ')}
                {tab === 'unassigned' && <span className="ml-2 bg-error text-white text-[10px] px-1.5 py-0.5 rounded-full">24</span>}
              </button>
            ))}
          </div>
          
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-outline-variant/30">
            <div className="relative w-full sm:w-96">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
              <input 
                type="text" 
                placeholder="Search ticket ID, user, or keyword..." 
                className="w-full pl-10 pr-4 h-10 bg-surface-container rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition border border-transparent focus:border-primary"
              />
            </div>
            <div className="flex gap-2">
              <button className="h-10 px-4 bg-surface-container hover:bg-surface-variant text-on-surface font-bold rounded-lg flex items-center justify-center gap-2 transition border border-outline-variant/50">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <button className="h-10 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg flex items-center justify-center transition shadow-sm">
                Assign to Me
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-outline-variant/50">
                <th className="p-4 w-12 text-center">
                  <input type="checkbox" className="rounded border-outline-variant/50 text-primary focus:ring-primary" />
                </th>
                <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Ticket ID</th>
                <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider whitespace-nowrap">User</th>
                <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider min-w-[200px]">Subject</th>
                <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Priority</th>
                <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Wait Time</th>
                <th className="p-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {tickets.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-container-lowest transition group cursor-pointer">
                  <td className="p-4 text-center">
                    <input type="checkbox" className="rounded border-outline-variant/50 text-primary focus:ring-primary" />
                  </td>
                  <td className="p-4 text-sm font-bold text-primary whitespace-nowrap">{row.id}</td>
                  <td className="p-4 whitespace-nowrap">
                    <p className="text-sm font-bold text-on-surface">{row.user}</p>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase mt-0.5">{row.type}</p>
                  </td>
                  <td className="p-4 text-sm font-medium text-on-surface pr-8">{row.subject}</td>
                  <td className="p-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                      row.priority === 'Critical' ? 'bg-error text-white' : 
                      row.priority === 'High' ? 'bg-warning/20 text-warning-dark' : 
                      row.priority === 'Medium' ? 'bg-info/10 text-info-dark' :
                      'bg-surface-variant text-on-surface-variant'
                    }`}>
                      {row.priority}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-bold text-error-dark whitespace-nowrap">
                    {row.time}
                  </td>
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
          <span>Showing 1 to 5 of 24 unassigned</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container transition disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container transition">Next</button>
          </div>
        </div>

      </div>

    </div>
  );
}
