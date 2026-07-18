'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ProfessionalCard from '../../../../components/discovery/ProfessionalCard';
import SupplierCard from '../../../../components/discovery/SupplierCard';

export default function AreaPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'services' | 'suppliers'>('services');
  
  // Format slug to readable string (e.g. indiranagar -> Indiranagar)
  const areaName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1).replace(/-/g, ' ');

  const mockProfessionals = [
    {
      id: '1',
      name: 'Ramesh Sharma',
      category: 'Plumber',
      rating: 4.8,
      reviews: 124,
      experience: '12 years',
      priceRange: '₹200 - ₹500',
      imageUrl: 'https://i.pravatar.cc/150?u=ramesh',
      isVerified: true,
      distance: '1.2 km',
      isOnline: true
    },
    {
      id: '2',
      name: 'Ajay Painters',
      category: 'Painter',
      rating: 4.5,
      reviews: 89,
      experience: '8 years',
      priceRange: '₹500 - ₹2000',
      imageUrl: 'https://i.pravatar.cc/150?u=ajay',
      isVerified: true,
      distance: '2.5 km',
      isOnline: false
    }
  ];

  const mockSuppliers = [
    {
      id: '1',
      name: 'BuildWell Hardware',
      category: 'Plumbing Materials',
      rating: 4.6,
      reviews: 45,
      deliveryTime: 'Same Day',
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=200&h=200',
      isVerified: true,
      distance: '0.8 km'
    },
    {
      id: '2',
      name: 'City Tiles & Ceramics',
      category: 'Tiles & Flooring',
      rating: 4.9,
      reviews: 210,
      deliveryTime: 'Next Day',
      imageUrl: 'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&q=80&w=200&h=200',
      isVerified: true,
      distance: '3.1 km'
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pb-safe">
      <header className="px-4 py-4 bg-surface border-b border-outline-variant/30 sticky top-0 z-20">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors -ml-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="font-headline-sm font-bold text-on-surface leading-tight">
              {areaName}
            </h1>
            <p className="font-body-sm text-on-surface-variant">
              Top rated pros and suppliers nearby
            </p>
          </div>
        </div>
        
        {/* Tab Switcher */}
        <div className="flex bg-surface-container-low p-1 rounded-full relative">
          <button
            className={`flex-1 py-2 rounded-full font-label-md transition-colors z-10 ${
              activeTab === 'services' ? 'text-on-surface font-bold' : 'text-on-surface-variant'
            }`}
            onClick={() => setActiveTab('services')}
          >
            Professionals
          </button>
          <button
            className={`flex-1 py-2 rounded-full font-label-md transition-colors z-10 ${
              activeTab === 'suppliers' ? 'text-on-surface font-bold' : 'text-on-surface-variant'
            }`}
            onClick={() => setActiveTab('suppliers')}
          >
            Suppliers
          </button>
          
          <div 
            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-surface rounded-full shadow-sm transition-transform duration-300 ease-in-out ${
              activeTab === 'services' ? 'translate-x-0' : 'translate-x-[calc(100%+4px)]'
            }`}
          />
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {activeTab === 'services' ? (
            <motion.div
              key="services"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-label-lg font-bold text-on-surface">{mockProfessionals.length} Professionals</h2>
              </div>
              
              {mockProfessionals.map((pro) => (
                <div key={pro.id} onClick={() => router.push(`/profile/professional/${pro.id}`)}>
                  <ProfessionalCard {...pro} />
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="suppliers"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-label-lg font-bold text-on-surface">{mockSuppliers.length} Suppliers</h2>
              </div>
              
              {mockSuppliers.map((supplier) => (
                <div key={supplier.id} onClick={() => router.push(`/profile/supplier/${supplier.id}`)}>
                  <SupplierCard {...supplier} />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
