'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, Camera, Image as ImageIcon, ChevronDown } from 'lucide-react';

export default function AddProduct() {
  const router = useRouter();
  
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Tiles & Flooring');
  const [stockStatus, setStockStatus] = useState('in_stock');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);

  const simulatePhotoUpload = () => {
    setPhoto('https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80');
  };

  const handleSave = () => {
    // Save logic
    router.back();
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => router.back()} className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Add Product</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-32">
        
        {/* Photo Upload Area */}
        <div className="mb-6">
          <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
            Product Photo
          </label>
          {!photo ? (
            <div 
              onClick={simulatePhotoUpload}
              className="w-full aspect-[4/3] glass-card rounded-2xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center cursor-pointer hover:bg-surface-variant transition active:scale-[0.98]"
            >
              <div className="flex space-x-4 mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-primary" />
                </div>
                <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center">
                  <Camera className="w-6 h-6 text-secondary-dark" />
                </div>
              </div>
              <h3 className="font-bold text-on-surface text-sm mb-1">Add a Photo</h3>
              <p className="text-[10px] text-on-surface-variant">Upload or take a picture</p>
            </div>
          ) : (
            <div 
              className="w-full aspect-[4/3] rounded-2xl border border-outline-variant shadow-sm bg-cover bg-center cursor-pointer relative overflow-hidden"
              style={{ backgroundImage: `url(${photo})` }}
              onClick={simulatePhotoUpload}
            >
              <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg font-bold text-xs text-on-surface flex items-center">
                  <Camera className="w-4 h-4 mr-2" /> Change Photo
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Form Fields */}
        <div className="space-y-5">
          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
              Product Name
            </label>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition"
              placeholder="e.g. Kajaria Double Charge Vitrified Tile 2x2"
            />
          </div>

          <div className="flex space-x-3">
            <div className="flex-1">
              <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
                Price (₹)
              </label>
              <input 
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition"
                placeholder="e.g. 65 / sq ft"
              />
            </div>
            <div className="flex-1">
              <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
                Category
              </label>
              <div className="relative">
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface font-bold focus:outline-none focus:border-primary transition appearance-none"
                >
                  <option value="Tiles & Flooring">Tiles & Flooring</option>
                  <option value="Sanitaryware">Sanitaryware</option>
                  <option value="Paints">Paints</option>
                </select>
                <ChevronDown className="absolute right-4 top-4 w-5 h-5 text-on-surface-variant pointer-events-none" />
              </div>
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
              Stock Status
            </label>
            <div className="grid grid-cols-3 gap-2 p-1 bg-surface-variant rounded-xl border border-outline-variant">
              <button 
                onClick={() => setStockStatus('in_stock')}
                className={`py-2 text-xs font-bold rounded-lg transition border ${stockStatus === 'in_stock' ? 'bg-success/10 text-success border-success/30 shadow-sm' : 'border-transparent text-on-surface-variant hover:bg-outline-variant/30'}`}
              >
                In Stock
              </button>
              <button 
                onClick={() => setStockStatus('limited')}
                className={`py-2 text-xs font-bold rounded-lg transition border ${stockStatus === 'limited' ? 'bg-warning/10 text-yellow-600 border-yellow-500/30 shadow-sm' : 'border-transparent text-on-surface-variant hover:bg-outline-variant/30'}`}
              >
                Limited
              </button>
              <button 
                onClick={() => setStockStatus('out_of_stock')}
                className={`py-2 text-xs font-bold rounded-lg transition border ${stockStatus === 'out_of_stock' ? 'bg-error/10 text-error border-error/30 shadow-sm' : 'border-transparent text-on-surface-variant hover:bg-outline-variant/30'}`}
              >
                Out of Stock
              </button>
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant mb-2 block ml-1">
              Description (Optional)
            </label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface text-sm font-semibold focus:outline-none focus:border-primary transition resize-none h-28"
              placeholder="Add dimensions, materials, or features..."
            />
          </div>
        </div>

      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30">
        <button 
          onClick={handleSave}
          className="w-full py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          <Check className="w-5 h-5 mr-2" /> Add Product
        </button>
      </div>
    </div>
  );
}
