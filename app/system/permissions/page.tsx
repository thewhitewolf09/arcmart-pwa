'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, Download, Bell, MapPin, MapPinOff, 
  RefreshCcw, Star, Wifi, X
} from 'lucide-react';
import Link from 'next/link';

export default function PermissionsPlayground() {
  const router = useRouter();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center">
        <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="font-bold text-on-surface">System Modals</span>
      </div>

      <div className="flex-1 p-5 space-y-6 pb-32">
        <p className="text-sm text-on-surface-variant leading-relaxed">
          This playground demonstrates the various system-level bottom sheets and prompts that appear during the PWA experience.
        </p>

        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">PWA Prompts</h3>
          
          <button onClick={() => setActiveModal('install')} className="w-full glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between text-left hover:border-primary/50">
            <div className="flex items-center">
              <Download className="w-5 h-5 text-primary mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Install App Prompt (S-07)</p>
                <p className="text-[10px] text-on-surface-variant">Add to Home Screen</p>
              </div>
            </div>
          </button>
          
          <button onClick={() => setActiveModal('update')} className="w-full glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between text-left hover:border-secondary/50">
            <div className="flex items-center">
              <RefreshCcw className="w-5 h-5 text-secondary mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Update Available (S-11)</p>
                <p className="text-[10px] text-on-surface-variant">New PWA version</p>
              </div>
            </div>
          </button>

          <button onClick={() => setActiveModal('rating')} className="w-full glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between text-left hover:border-yellow-500/50">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">App Rating Prompt (S-12)</p>
                <p className="text-[10px] text-on-surface-variant">Enjoying ArcMart?</p>
              </div>
            </div>
          </button>
        </section>

        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Permissions</h3>
          
          <button onClick={() => setActiveModal('push')} className="w-full glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between text-left hover:border-primary/50">
            <div className="flex items-center">
              <Bell className="w-5 h-5 text-primary mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Push Notifications (S-08)</p>
                <p className="text-[10px] text-on-surface-variant">Request permission</p>
              </div>
            </div>
          </button>
          
          <button onClick={() => setActiveModal('location')} className="w-full glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between text-left hover:border-primary/50">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-primary mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Location Permission (S-09)</p>
                <p className="text-[10px] text-on-surface-variant">Why we need it</p>
              </div>
            </div>
          </button>

          <button onClick={() => setActiveModal('location-disabled')} className="w-full glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between text-left hover:border-error/50">
            <div className="flex items-center">
              <MapPinOff className="w-5 h-5 text-error mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Location Disabled (S-10)</p>
                <p className="text-[10px] text-on-surface-variant">Fallback to manual entry</p>
              </div>
            </div>
          </button>
        </section>

        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">Network</h3>
          
          <button onClick={() => setActiveModal('slow')} className="w-full glass-card border border-outline-variant rounded-2xl p-4 flex items-center justify-between text-left hover:border-warning-dark/50">
            <div className="flex items-center">
              <Wifi className="w-5 h-5 text-warning-dark mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Slow Connection (S-14)</p>
                <p className="text-[10px] text-on-surface-variant">Low bandwidth notice</p>
              </div>
            </div>
          </button>
        </section>
      </div>

      {/* OVERLAYS & MODALS */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="absolute inset-0" onClick={closeModal}></div>
          
          <div className="w-full bg-surface rounded-t-3xl p-6 relative z-10 animate-slide-up-modal max-h-[90vh] overflow-y-auto pb-safe">
            <div className="w-12 h-1.5 bg-outline-variant rounded-full mx-auto mb-6"></div>
            
            <button onClick={closeModal} className="absolute top-5 right-5 p-2 bg-surface-variant rounded-full text-on-surface-variant hover:text-on-surface transition">
              <X className="w-4 h-4" />
            </button>

            {/* Install App Prompt */}
            {activeModal === 'install' && (
              <div className="text-center pb-4">
                <div className="w-20 h-20 bg-primary rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Download className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-black text-on-surface mb-2">Install ArcMart App</h2>
                <p className="text-sm text-on-surface-variant mb-6 px-4">
                  Add ArcMart to your home screen for a faster, full-screen experience without opening your browser.
                </p>
                <div className="space-y-3">
                  <button onClick={closeModal} className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg">Install Now</button>
                  <button onClick={closeModal} className="w-full py-4 bg-surface text-on-surface font-bold rounded-xl border-2 border-outline-variant">Maybe Later</button>
                </div>
              </div>
            )}

            {/* Update Available Prompt */}
            {activeModal === 'update' && (
              <div className="text-center pb-4">
                <div className="w-20 h-20 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <RefreshCcw className="w-10 h-10 text-secondary" />
                </div>
                <h2 className="text-2xl font-black text-on-surface mb-2">Update Available!</h2>
                <p className="text-sm text-on-surface-variant mb-6 px-4">
                  A new version of ArcMart is ready. Update now to get the latest features and bug fixes.
                </p>
                <button onClick={closeModal} className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg">Refresh App</button>
              </div>
            )}

            {/* Push Notification Permission */}
            {activeModal === 'push' && (
              <div className="text-center pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center relative">
                  <Bell className="w-10 h-10 text-primary" />
                  <div className="absolute top-4 right-4 w-4 h-4 bg-error rounded-full border-2 border-surface"></div>
                </div>
                <h2 className="text-2xl font-black text-on-surface mb-2">Don't Miss Out!</h2>
                <p className="text-sm text-on-surface-variant mb-6 px-4">
                  Enable push notifications to get instant alerts for new leads, chat messages, and updates.
                </p>
                <div className="space-y-3">
                  <button onClick={closeModal} className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg">Enable Notifications</button>
                  <button onClick={closeModal} className="w-full py-4 bg-surface text-on-surface-variant font-bold rounded-xl">Not Now</button>
                </div>
              </div>
            )}

            {/* Location Permission */}
            {activeModal === 'location' && (
              <div className="text-center pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-black text-on-surface mb-2">Find Local Pros</h2>
                <p className="text-sm text-on-surface-variant mb-6 px-4">
                  We use your location to show you the best architects, interior designers, and properties near you.
                </p>
                <div className="space-y-3">
                  <button onClick={closeModal} className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg">Allow Location Access</button>
                  <button onClick={closeModal} className="w-full py-4 bg-surface text-on-surface-variant font-bold rounded-xl text-sm">Enter Manually Instead</button>
                </div>
              </div>
            )}

            {/* Location Disabled Fallback */}
            {activeModal === 'location-disabled' && (
              <div className="text-center pb-4">
                <div className="w-20 h-20 bg-error/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPinOff className="w-10 h-10 text-error" />
                </div>
                <h2 className="text-2xl font-black text-on-surface mb-2">Location Required</h2>
                <p className="text-sm text-on-surface-variant mb-6 px-4">
                  Your device's location services are turned off or denied. Please enter your city manually to continue.
                </p>
                <div className="relative mb-4">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-on-surface-variant" />
                  <input type="text" placeholder="e.g. Bangalore, India" className="w-full bg-surface-dim border border-outline-variant rounded-xl pl-12 pr-4 py-4 text-sm font-bold text-on-surface focus:outline-none focus:border-primary" />
                </div>
                <button onClick={closeModal} className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg">Search City</button>
              </div>
            )}

            {/* App Rating Prompt */}
            {activeModal === 'rating' && (
              <div className="text-center pb-4">
                <div className="flex justify-center mb-4 space-x-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-10 h-10 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <h2 className="text-2xl font-black text-on-surface mb-2">Enjoying ArcMart?</h2>
                <p className="text-sm text-on-surface-variant mb-6 px-4">
                  Your feedback helps us improve. Would you mind taking a moment to rate us on the App Store?
                </p>
                <div className="space-y-3">
                  <button onClick={closeModal} className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg">Rate ArcMart</button>
                  <button onClick={closeModal} className="w-full py-4 bg-surface text-on-surface-variant font-bold rounded-xl text-sm">Remind Me Later</button>
                </div>
              </div>
            )}

            {/* Slow Connection Warning (Toast style mimicking bottom sheet for consistency in playground) */}
            {activeModal === 'slow' && (
              <div className="text-left pb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-warning/20 rounded-full flex items-center justify-center mr-3">
                    <Wifi className="w-5 h-5 text-warning-dark" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-on-surface">Slow Connection</h2>
                    <p className="text-xs text-on-surface-variant">Results may take longer to load.</p>
                  </div>
                </div>
                <button onClick={closeModal} className="w-full mt-4 py-3 bg-surface border-2 border-outline-variant text-on-surface font-bold rounded-xl">Dismiss</button>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
