'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Phone, CheckCircle2, Navigation, MessageCircle, X } from 'lucide-react';
import Image from 'next/image';

interface MapViewProps {
  results: any[];
}

export default function MapView({ results }: MapViewProps) {
  const [selectedPin, setSelectedPin] = useState<any | null>(null);

  // Mock map coordinates relative to a container
  const mockPins = [
    { id: 1, top: '30%', left: '40%', data: results[0] },
    { id: 2, top: '60%', left: '60%', data: results[1] },
    { id: 3, top: '20%', left: '70%', data: results[2] },
  ].filter(pin => pin.data); // only show pins for existing results

  return (
    <div className="relative w-full h-full bg-[#E5E3DF] overflow-hidden rounded-2xl shadow-inner border border-outline-variant">
      
      {/* Mock Map Background Grid to look like a map */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Fake Map Streets */}
      <div className="absolute top-1/4 left-0 w-full h-4 bg-white/40 rotate-12 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-4 h-full bg-white/40 -rotate-12 pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-full h-3 bg-white/30 -rotate-6 pointer-events-none" />

      {/* Map Pins */}
      {mockPins.map(pin => (
        <button
          key={pin.id}
          onClick={() => setSelectedPin(pin.data)}
          className="absolute z-10 transform -translate-x-1/2 -translate-y-full hover:scale-110 transition-transform focus:outline-none group"
          style={{ top: pin.top, left: pin.left }}
        >
          <div className="relative flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 ${
              selectedPin?.id === pin.data.id ? 'bg-primary border-white' : 'bg-surface border-primary'
            } transition-colors`}>
              {pin.data.verified ? (
                <CheckCircle2 className={`w-5 h-5 ${selectedPin?.id === pin.data.id ? 'text-white' : 'text-primary'}`} />
              ) : (
                <MapPin className={`w-5 h-5 ${selectedPin?.id === pin.data.id ? 'text-white' : 'text-primary'}`} />
              )}
            </div>
            
            {/* Custom Marker Point */}
            <div className={`w-3 h-3 rotate-45 transform -translate-y-2 border-r-2 border-b-2 ${
              selectedPin?.id === pin.data.id ? 'bg-primary border-white' : 'bg-surface border-primary'
            }`} />

            {/* Price Tag (Optional) */}
            <div className="absolute top-full mt-1 whitespace-nowrap bg-surface-container-highest px-2 py-0.5 rounded text-[10px] font-bold text-on-surface shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {pin.data.name}
            </div>
          </div>
        </button>
      ))}

      {/* My Location FAB */}
      <button className="absolute bottom-4 right-4 w-12 h-12 bg-surface rounded-full shadow-lg border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-variant transition-colors z-10">
        <Navigation className="w-5 h-5" />
      </button>

      {/* Selected Profile Detail Card (SA-04) */}
      <AnimatePresence>
        {selectedPin && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="absolute bottom-4 left-4 right-20 z-20"
          >
            <div className="bg-surface border border-outline-variant shadow-2xl rounded-2xl p-4 flex gap-4">
              
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container border border-outline-variant">
                  <img src={selectedPin.avatar} alt={selectedPin.name} className="w-full h-full object-cover" />
                </div>
                {selectedPin.verified && (
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-surface rounded-full flex items-center justify-center border border-outline-variant shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  </div>
                )}
              </div>

              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-sm text-on-surface truncate pr-2">{selectedPin.name}</h3>
                  <button onClick={() => setSelectedPin(null)} className="text-on-surface-variant hover:text-on-surface p-1 -mr-2 -mt-2">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                <p className="text-[10px] text-on-surface-variant font-semibold truncate mb-2">
                  {selectedPin.profession} • {selectedPin.distance}
                </p>
                
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded">
                    <Star className="w-3 h-3 text-[#F57F17] fill-[#F57F17]" />
                    <span className="text-xs font-bold text-on-surface">{selectedPin.rating}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366]/20 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm hover:bg-primary/90 transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
