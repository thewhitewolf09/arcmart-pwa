'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, User, Briefcase, Building2, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function AccountSwitchScreen() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string>('homeowner');

  const roles = [
    {
      id: 'homeowner',
      title: 'Homeowner',
      description: 'I want to build, renovate, or buy a property.',
      icon: <User className="w-6 h-6 text-primary" />,
      bg: 'bg-primary/10'
    },
    {
      id: 'pro',
      title: 'Service Professional',
      description: 'I am an architect, interior designer, or contractor looking for jobs.',
      icon: <Briefcase className="w-6 h-6 text-secondary" />,
      bg: 'bg-secondary/10'
    },
    {
      id: 'consultant',
      title: 'Real Estate Consultant',
      description: 'I am an agent or broker helping people buy, sell, or rent.',
      icon: <Building2 className="w-6 h-6 text-warning-dark" />,
      bg: 'bg-warning/10'
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">Switch Account Type</span>
      </div>

      <div className="flex-1 p-5 space-y-6 pb-32">
        <div className="bg-warning/10 border border-warning/30 rounded-2xl p-4 flex items-start">
          <AlertTriangle className="w-5 h-5 text-warning-dark mr-3 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-sm font-bold text-on-surface">Important Notice</h3>
            <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
              Switching your account type will restrict access to your current dashboard. You can always switch back later.
            </p>
          </div>
        </div>

        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Select new role</h3>
          
          <div className="space-y-4">
            {roles.map((role) => (
              <div 
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`relative border-2 rounded-3xl p-5 cursor-pointer transition-all ${
                  selectedRole === role.id 
                    ? 'border-primary bg-primary/5 shadow-md' 
                    : 'border-outline-variant bg-surface hover:border-primary/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-4 ${role.bg}`}>
                      {role.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-on-surface">{role.title}</h4>
                      <p className="text-[10px] text-on-surface-variant mt-1 max-w-[180px] leading-tight">{role.description}</p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                    selectedRole === role.id ? 'border-primary bg-primary text-white' : 'border-outline-variant'
                  }`}>
                    {selectedRole === role.id && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={() => {
            if (selectedRole === 'pro') router.push('/pro/onboarding');
            else if (selectedRole === 'consultant') router.push('/consultant/onboarding/step1');
            else router.push('/');
          }}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition"
        >
          Confirm Switch
        </button>
      </div>
    </div>
  );
}
