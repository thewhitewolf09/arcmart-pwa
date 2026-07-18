'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNav() {
  const pathname = usePathname();

  // Hide the bottom nav on specific sub-routes (e.g., professional/supplier profiles, rating pages)
  const isHidden = 
    pathname.startsWith('/profile/professional') || 
    pathname.startsWith('/profile/supplier') || 
    pathname.startsWith('/profile/consultant') ||
    pathname.startsWith('/rate');

  if (isHidden) return null;

  const navItems = [
    {
      label: 'Discover',
      icon: 'explore',
      href: '/discover',
      isActive: pathname.startsWith('/discover'),
    },
    {
      label: 'Saved',
      icon: 'bookmark',
      href: '/saved',
      isActive: pathname.startsWith('/saved'),
    },
    {
      label: 'Connections',
      icon: 'forum',
      href: '/connections',
      isActive: pathname.startsWith('/connections'),
    },
    {
      label: 'Profile',
      icon: 'person',
      href: '/profile',
      isActive: pathname === '/profile' || pathname.startsWith('/profile/edit'),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 flex justify-around items-center h-16 pb-safe px-4 bg-surface border-t border-outline-variant shadow-[0_-4px_16px_rgba(0,0,0,0.05)] md:hidden">
      {navItems.map((item) => (
        <Link 
          key={item.label} 
          href={item.href}
          className={`flex flex-col items-center justify-center px-4 py-1 transition-all duration-200 active:scale-95 ${
            item.isActive 
              ? 'text-primary font-bold bg-secondary-container/20 rounded-lg' 
              : 'text-on-surface-variant hover:bg-secondary-container/10 rounded-lg'
          }`}
        >
          <span 
            className="material-symbols-outlined transition-all"
            style={{ fontVariationSettings: item.isActive ? "'FILL' 1" : "'FILL' 0" }}
          >
            {item.icon}
          </span>
          <span className="font-mono text-[10px] mt-0.5 uppercase tracking-wider font-semibold">
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
