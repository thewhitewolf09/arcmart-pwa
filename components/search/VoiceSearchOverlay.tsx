'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, X } from 'lucide-react';

interface VoiceSearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
}

export default function VoiceSearchOverlay({ isOpen, onClose, onSearch }: VoiceSearchOverlayProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  
  useEffect(() => {
    if (isOpen) {
      setIsListening(true);
      setTranscript('');
      
      // Simulate listening and transcribing
      const timer1 = setTimeout(() => {
        setTranscript('plumbers in');
      }, 1500);
      
      const timer2 = setTimeout(() => {
        setTranscript('plumbers in noida sector 18');
      }, 3000);
      
      const timer3 = setTimeout(() => {
        setIsListening(false);
      }, 4000);

      const timer4 = setTimeout(() => {
        onSearch('plumbers in noida sector 18');
        onClose();
      }, 5000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [isOpen, onSearch, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex flex-col items-center justify-end pb-20"
        >
          <div className="absolute top-safe right-4 pt-4">
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="w-full max-w-sm px-6 flex flex-col items-center">
            <h2 className="text-white text-xl font-bold mb-8 text-center min-h-[60px]">
              {transcript || (isListening ? 'Listening...' : 'Processing...')}
            </h2>
            
            <div className="relative flex items-center justify-center w-24 h-24 mb-10">
              {isListening && (
                <>
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute inset-0 bg-primary rounded-full"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                    className="absolute inset-0 bg-primary rounded-full"
                  />
                </>
              )}
              <div className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-colors duration-300 ${isListening ? 'bg-primary text-on-primary' : 'bg-surface text-primary'}`}>
                <Mic className="w-10 h-10" />
              </div>
            </div>
            
            <p className="text-white/60 text-sm font-semibold tracking-wide">
              {isListening ? 'Speak now' : 'Found match'}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
