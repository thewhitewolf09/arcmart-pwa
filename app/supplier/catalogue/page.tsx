'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Plus, SlidersHorizontal, Package, AlertCircle } from 'lucide-react';
import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  price: string;
  stockStatus: 'in_stock' | 'limited' | 'out_of_stock';
  category: string;
  imageUrl: string;
};

const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Kajaria Double Charge Vitrified Tile 2x2',
    price: '₹ 65 / sq ft',
    stockStatus: 'in_stock',
    category: 'Tiles & Flooring',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80'
  },
  {
    id: 'prod-2',
    name: 'Somany Matte Finish Bathroom Wall Tile',
    price: '₹ 45 / sq ft',
    stockStatus: 'limited',
    category: 'Tiles & Flooring',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80'
  },
  {
    id: 'prod-3',
    name: 'Hindware Table Top Wash Basin',
    price: '₹ 2,499 / piece',
    stockStatus: 'out_of_stock',
    category: 'Sanitaryware',
    imageUrl: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400&q=80'
  }
];

export default function SupplierCatalogue() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = INITIAL_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || product.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const getStockBadge = (status: Product['stockStatus']) => {
    switch(status) {
      case 'in_stock':
        return <span className="bg-success/10 text-success border border-success/20 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">In Stock</span>;
      case 'limited':
        return <span className="bg-warning/10 text-warning-dark border border-warning/20 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-yellow-600 border-yellow-500/20 bg-yellow-500/10">Low Stock</span>;
      case 'out_of_stock':
        return <span className="bg-error/10 text-error border border-error/20 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">Out of Stock</span>;
    }
  };

  return (
    <div className="flex-1 flex flex-col p-5 pb-24 bg-surface min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <div>
          <h1 className="text-2xl font-bold text-on-surface tracking-tight">Catalogue</h1>
          <p className="text-xs text-on-surface-variant mt-1 font-semibold">
            {INITIAL_PRODUCTS.length} Products listed
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex space-x-2 mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-on-surface-variant" />
          </div>
          <input
            type="text"
            className="w-full pl-9 pr-4 py-2.5 bg-surface-variant border border-outline-variant rounded-xl text-on-surface text-sm font-semibold focus:outline-none focus:border-primary transition"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="p-2.5 rounded-xl bg-surface-variant border border-outline-variant text-on-surface hover:bg-outline-variant transition shadow-sm">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Categories Tabs */}
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {['All', 'Tiles & Flooring', 'Sanitaryware'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border shadow-sm ${
              activeFilter === tab
                ? 'bg-primary text-on-primary border-primary'
                : 'bg-surface border-outline-variant text-on-surface-variant hover:bg-surface-variant'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products List */}
      {filteredProducts.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
          <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center mb-4 border border-outline-variant">
            <Package className="w-8 h-8 text-on-surface-variant" />
          </div>
          <h3 className="text-lg font-bold text-on-surface mb-2">No products found</h3>
          <p className="text-sm text-on-surface-variant mb-6">Try adjusting your filters or add a new product.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredProducts.map((product) => (
            <Link href={`/supplier/catalogue/${product.id}`} key={product.id}>
              <div className="glass-card rounded-2xl p-3 border border-outline-variant shadow-sm flex items-center hover:bg-surface-variant transition group">
                {/* Product Image */}
                <div 
                  className="w-20 h-20 rounded-xl bg-surface border border-outline-variant bg-cover bg-center shrink-0 mr-4"
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                />
                
                {/* Product Info */}
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-on-surface-variant px-1.5 py-0.5 bg-surface-variant rounded border border-outline-variant truncate mr-2">
                      {product.category}
                    </span>
                    {getStockBadge(product.stockStatus)}
                  </div>
                  <h3 className="text-sm font-bold text-on-surface mb-1 truncate group-hover:text-primary transition">
                    {product.name}
                  </h3>
                  <p className="text-sm font-black text-primary">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Floating Action Button */}
      <Link 
        href="/supplier/catalogue/add"
        className="fixed bottom-20 right-5 w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-transform z-30"
      >
        <Plus className="w-6 h-6" />
      </Link>
    </div>
  );
}
