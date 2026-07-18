'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import UberSearchOverlay from '../../components/discovery/UberSearchOverlay';
import { Footer } from '@/components/ui/Footer';
import LocalitySheet from '../../components/discovery/LocalitySheet';
import { Star, X } from 'lucide-react';

export default function DiscoverPage() {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLocalityOpen, setIsLocalityOpen] = useState(false);
  const [currentLocality, setCurrentLocality] = useState("Indiranagar, Bangalore");
  const [greeting, setGreeting] = useState('Good evening');
  const [showRatingPrompt, setShowRatingPrompt] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-background">
      {/* Top App Bar Area */}
      <header className="pt-safe px-5 pt-6 pb-2 relative z-10">
        <div className="flex items-center justify-between mb-5">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setIsLocalityOpen(true)}
          >
            <span className="font-body-md text-on-surface-variant mb-0.5">{greeting},</span>
            <div className="flex items-center gap-1">
              <span className="font-headline-sm text-[22px] font-bold truncate max-w-[200px]">{currentLocality}</span>
              <span className="material-symbols-outlined text-outline text-[20px] hover:text-primary transition-colors">expand_more</span>
            </div>
          </motion.div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => router.push('/notifications')}
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors relative"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <div className="absolute top-2 right-2 w-2 h-2 bg-[#BA1A1A] rounded-full border-2 border-surface-container"></div>
            </button>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center relative overflow-hidden border border-outline-variant/30 shadow-sm cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all"
            >
              <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User Avatar" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => setIsSearchOpen(true)}
          className="w-full h-12 bg-surface-container-lowest rounded-xl flex items-center px-4 gap-3 border border-outline-variant/50 shadow-sm cursor-text hover:bg-surface-container-highest transition-all group"
        >
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">search</span>
          <span className="font-body-md text-on-surface-variant flex-1">What do you need help with?</span>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">mic</span>
          </div>
        </motion.div>
      </header>

      {/* Main Content Scrollable Area */}
      <main className="flex-1 overflow-y-auto relative z-10 pb-24 pt-4">
        
        {/* RT-05: In-App Rating Prompt Banner */}
        <AnimatePresence>
          {showRatingPrompt && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="px-5 overflow-hidden"
            >
              <div className="w-full bg-[#FAFAFA] border border-[#E0E0E0] rounded-2xl p-4 flex gap-4 items-start relative shadow-sm">
                <button 
                  onClick={() => setShowRatingPrompt(false)}
                  className="absolute top-3 right-3 text-[#5F5E5E] hover:text-[#1A1A1A]"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="w-10 h-10 bg-[#FFD700]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Star className="w-5 h-5 text-[#E9C400] fill-[#E9C400]" />
                </div>
                <div className="pr-6">
                  <h3 className="font-public-sans font-bold text-[#1A1A1A] text-[15px] mb-1">How was your recent job?</h3>
                  <p className="font-public-sans text-[#5F5E5E] text-xs leading-relaxed mb-3">
                    You haven't rated Ramesh yet for your recent plumbing job. Your feedback helps the community!
                  </p>
                  <button 
                    onClick={() => router.push('/rate/valid')}
                    className="bg-[#1A1A1A] text-white font-montserrat font-bold text-xs px-4 py-2 rounded-full hover:bg-[#333333] transition-colors"
                  >
                    Rate Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Promotional Banner */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-5 mb-6"
        >
          <div className="w-full rounded-[24px] bg-primary p-5 relative overflow-hidden shadow-md">
            <div className="relative z-10 flex flex-col items-start">
              <span className="inline-flex items-center px-2 py-1 bg-on-primary/20 rounded-md font-label-sm text-on-primary uppercase tracking-wider mb-2 font-bold text-[10px]">
                ArcMart Assured
              </span>
              <h3 className="font-headline-md text-on-primary text-[22px] leading-tight mb-2">
                Verify before<br/>you hire.
              </h3>
              <p className="font-body-sm text-on-primary/80 mb-4 max-w-[200px]">
                Book top-rated verified professionals instantly.
              </p>
              <button className="bg-on-primary text-primary px-5 py-2 rounded-full font-label-md font-bold shadow-sm active:scale-95 transition-transform">
                Explore Now
              </button>
            </div>
            {/* Decorative Icon */}
            <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-[140px] text-on-primary/10 rotate-12 select-none pointer-events-none" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified_user
            </span>
          </div>
        </motion.section>

        {/* AI Plans Teaser Banner */}
        <motion.section 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="px-5 mb-8"
        >
          <div 
            onClick={() => router.push('/ai-plans')}
            className="w-full rounded-[24px] p-5 relative overflow-hidden shadow-lg border border-slate-800 cursor-pointer hover:scale-[0.98] transition-transform group"
          >
            {/* Dark Professional Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-[#0f172a] to-black opacity-90 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Decorative mesh/glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-2xl rounded-full -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-black/40 backdrop-blur-md rounded-md font-label-sm text-slate-200 uppercase tracking-wider mb-2 font-bold text-[10px] border border-slate-700">
                  <span className="material-symbols-outlined text-[12px] text-[#FFD700]">auto_awesome</span>
                  Coming Soon
                </span>
                <h3 className="font-headline-sm font-bold text-white leading-tight mb-1">
                  ArcMart AI Plans
                </h3>
                <p className="font-body-sm text-slate-300 max-w-[200px]">
                  Generate floor plans with just your words.
                </p>
              </div>
              <div className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Categories Carousel */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="px-5 flex items-center justify-between mb-3">
            <h2 className="font-title-md text-[18px] font-bold text-on-surface">Categories</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pl-5 pr-5 pb-2">
            <CategoryCard 
              title="Services" 
              icon="construction" 
              onClick={() => router.push('/discover/services')}
            />
            <CategoryCard 
              title="Materials" 
              icon="architecture" 
              onClick={() => router.push('/discover/suppliers')}
            />
            <CategoryCard 
              title="Consultants" 
              icon="engineering" 
              onClick={() => router.push('/discover/consultants')}
            />
          </div>
        </motion.section>

        {/* Live Feed / Professionals Nearby */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="px-5"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="font-title-md text-[18px] font-bold text-on-surface">Live Nearby</h2>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-error"></span>
              </span>
            </div>
            <button className="text-primary font-label-sm uppercase font-bold tracking-wide">See All</button>
          </div>

          <div className="space-y-4">
            <LiveFeedCard 
              name="Ramesh Kumar"
              profession="Master Plumber"
              distance="1.2 km away"
              rating={4.8}
              jobs={124}
              verified={true}
              available={true}
            />
            <LiveFeedCard 
              name="Singh Electricals"
              profession="Certified Electrician"
              distance="2.5 km away"
              rating={4.9}
              jobs={340}
              verified={true}
              available={true}
            />
            <LiveFeedCard 
              name="Ajay Painters"
              profession="Painting Contractor"
              distance="3.0 km away"
              rating={4.5}
              jobs={89}
              verified={false}
              available={false}
            />
          </div>
        </motion.section>

        <Footer />
      </main>

      {/* Uber Search Overlay */}
      <UberSearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Locality Sheet */}
      <LocalitySheet 
        isOpen={isLocalityOpen} 
        onClose={() => setIsLocalityOpen(false)} 
        currentLocality={currentLocality}
        onLocalityChange={setCurrentLocality}
      />
    </div>
  );
}

function CategoryCard({ title, icon, onClick }: { title: string, icon: string, onClick: () => void }) {
  return (
    <motion.div 
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-surface-container-lowest rounded-[20px] p-4 w-[110px] flex-shrink-0 flex flex-col items-center justify-center gap-3 shadow-sm border border-outline-variant/30 cursor-pointer hover:bg-surface-container transition-colors"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        <span className="material-symbols-outlined text-[24px] text-primary">{icon}</span>
      </div>
      <span className="font-label-md text-on-surface font-semibold tracking-wide">{title}</span>
    </motion.div>
  );
}

function LiveFeedCard({ name, profession, distance, rating, jobs, verified, available }: any) {
  // Use a reliable placeholder service for avatars
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128`;

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-4 flex gap-4 active:bg-surface-container transition-colors cursor-pointer shadow-sm">
      <div className="relative flex-shrink-0">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container border border-outline-variant/30">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        {verified && (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-surface-container-lowest rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center overflow-hidden">
        <div className="flex justify-between items-center mb-0.5">
          <h3 className="font-headline-md text-[16px] font-bold text-on-surface truncate pr-2">{name}</h3>
          {available && (
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-primary/10 text-primary font-label-sm text-[9px] uppercase font-bold tracking-widest flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Now
            </span>
          )}
        </div>
        <p className="font-body-sm text-on-surface-variant mb-1.5 truncate">{profession} • {distance}</p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-surface-container-high/50 px-1.5 py-0.5 rounded">
            <span className="material-symbols-outlined text-[12px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="font-label-sm text-on-surface font-bold text-[11px]">{rating}</span>
          </div>
          <span className="font-label-sm text-on-surface-variant text-[11px]">{jobs} jobs done</span>
        </div>
      </div>
    </div>
  );
}
