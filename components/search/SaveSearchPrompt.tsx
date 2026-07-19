'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookmarkPlus, X, Check } from 'lucide-react';

interface SaveSearchPromptProps {
  isOpen: boolean;
  onClose: () => void;
  query: string;
}

export default function SaveSearchPrompt({ isOpen, onClose, query }: SaveSearchPromptProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-[80px] left-4 right-4 bg-surface-container-highest border border-outline-variant shadow-lg rounded-2xl p-4 z-50 flex items-center justify-between"
        >
          <div className="flex flex-col">
            <span className="font-bold text-sm text-on-surface">
              {isSaved ? 'Search Saved!' : 'Save this search?'}
            </span>
            <span className="text-xs text-on-surface-variant mt-0.5 truncate max-w-[200px]">
              "{query}" • Notify me of new pros
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!isSaved ? (
              <>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full text-on-surface-variant hover:bg-surface-variant transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleSave}
                  className="bg-primary text-on-primary p-2 rounded-xl shadow hover:bg-primary/90 transition-colors"
                >
                  <BookmarkPlus className="w-5 h-5" />
                </button>
              </>
            ) : (
              <div className="bg-success/20 text-success p-2 rounded-xl">
                <Check className="w-5 h-5" />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
