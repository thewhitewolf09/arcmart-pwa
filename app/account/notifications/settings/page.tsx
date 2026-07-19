'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Bell, Smartphone, Zap, Star, Wallet, ShieldAlert } from 'lucide-react';

export default function NotificationSettingsPage() {
  const router = useRouter();
  
  const [settings, setSettings] = useState({
    pushEnabled: true,
    leads: true,
    reviews: true,
    payments: true,
    system: true,
    marketing: false
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant px-4 py-3 flex items-center pt-safe">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-container-highest transition-colors flex-shrink-0">
          <ArrowLeft className="w-5 h-5 text-on-surface" />
        </button>
        <span className="font-bold text-lg text-on-surface">Notification Settings</span>
      </div>

      <div className="flex-1 overflow-y-auto pb-safe">
        {/* Master Toggle */}
        <div className="p-5 border-b border-outline-variant/30 bg-surface-container-lowest">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${settings.pushEnabled ? 'bg-primary/10 text-primary' : 'bg-surface-container text-on-surface-variant'}`}>
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-on-surface">Push Notifications</h3>
                <p className="text-xs text-on-surface-variant mt-0.5">Master switch for all alerts</p>
              </div>
            </div>
            
            <button 
              onClick={() => toggleSetting('pushEnabled')}
              className={`w-12 h-6 rounded-full relative transition-colors ${settings.pushEnabled ? 'bg-primary' : 'bg-surface-variant'}`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${settings.pushEnabled ? 'left-7' : 'left-1'}`} />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className={`p-5 space-y-6 ${!settings.pushEnabled ? 'opacity-50 pointer-events-none' : ''}`}>
          
          <h4 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">Alert Categories</h4>
          
          <SettingItem 
            icon={<Zap className="w-5 h-5" />}
            title="New Leads & Jobs"
            description="Instant alerts when you match a new request"
            checked={settings.leads}
            onChange={() => toggleSetting('leads')}
            color="text-[#FF9800]"
            bgColor="bg-[#FF9800]/10"
          />
          
          <SettingItem 
            icon={<Star className="w-5 h-5" />}
            title="Reviews & Ratings"
            description="When a customer leaves you feedback"
            checked={settings.reviews}
            onChange={() => toggleSetting('reviews')}
            color="text-[#F57F17]"
            bgColor="bg-[#FFF9C4]/50"
          />

          <SettingItem 
            icon={<Wallet className="w-5 h-5" />}
            title="Payments & Wallet"
            description="Top-ups, lead deductions, and expiry"
            checked={settings.payments}
            onChange={() => toggleSetting('payments')}
            color="text-[#4CAF50]"
            bgColor="bg-[#4CAF50]/10"
          />

          <SettingItem 
            icon={<ShieldAlert className="w-5 h-5" />}
            title="Account & System"
            description="Profile approvals, security, and warnings"
            checked={settings.system}
            onChange={() => toggleSetting('system')}
            color="text-primary"
            bgColor="bg-primary/10"
          />

          <SettingItem 
            icon={<Bell className="w-5 h-5" />}
            title="Marketing & Promos"
            description="Discounts on featured listings and top-ups"
            checked={settings.marketing}
            onChange={() => toggleSetting('marketing')}
            color="text-[#9C27B0]"
            bgColor="bg-[#9C27B0]/10"
          />

        </div>
      </div>
    </div>
  );
}

function SettingItem({ icon, title, description, checked, onChange, color, bgColor }: any) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 pr-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${bgColor} ${color}`}>
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-sm text-on-surface">{title}</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">{description}</p>
        </div>
      </div>
      <button 
        onClick={onChange}
        className={`w-12 h-6 rounded-full relative transition-colors shrink-0 ${checked ? 'bg-primary' : 'bg-surface-variant'}`}
      >
        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${checked ? 'left-7' : 'left-1'}`} />
      </button>
    </div>
  );
}
