'use client';

import React, { useEffect, useState } from 'react';
import { Sparkles, X } from 'lucide-react';

interface ConfettiCelebrationProps {
  title?: string;
  message?: string;
  onClose?: () => void;
}

export function ConfettiCelebration({ 
  title = "First Connection! 🎉", 
  message = "You've just made your first connection on ArcMart. Great job taking the first step!",
  onClose 
}: ConfettiCelebrationProps) {
  const [isVisible, setIsVisible] = useState(true);

  // We're using a CSS-based pseudo-confetti effect for the PWA without heavy JS libraries
  
  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* CSS Confetti Elements (simplified representation) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute w-3 h-3 rounded-sm opacity-80 animate-confetti-fall`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5%`,
              backgroundColor: ['#00E676', '#1a1a1a', '#FFC107', '#2979FF', '#FF5252'][Math.floor(Math.random() * 5)],
              animationDuration: `${Math.random() * 2 + 2}s`,
              animationDelay: `${Math.random() * 1}s`
            }}
          ></div>
        ))}
      </div>

      <div className="bg-surface rounded-3xl p-6 w-full max-w-sm text-center relative z-10 animate-scale-in shadow-2xl">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-surface-variant rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface transition"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
          <Sparkles className="w-10 h-10 text-success" />
        </div>

        <h2 className="text-2xl font-black text-on-surface mb-2">{title}</h2>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
          {message}
        </p>

        <button 
          onClick={handleClose}
          className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition"
        >
          Keep Exploring
        </button>
      </div>

      {/* Global styles for the confetti animation specifically for this component */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti-fall {
          animation-name: confetti-fall;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation-iteration-count: infinite;
        }
        .animate-scale-in {
          animation: scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}} />
    </div>
  );
}
