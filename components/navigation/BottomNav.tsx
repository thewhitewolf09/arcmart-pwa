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
    pathname.startsWith('/rate') ||
    pathname.match(/^\/supplier\/leads\/[^\/]+$/) ||
    (pathname.startsWith('/supplier/profile/') && pathname !== '/supplier/profile') ||
    pathname.startsWith('/supplier/reviews') ||
    (pathname.startsWith('/supplier/catalogue/') && pathname !== '/supplier/catalogue') ||
    pathname.startsWith('/supplier/subscription') ||
    pathname.startsWith('/supplier/onboarding') ||
    pathname.startsWith('/supplier/featured') ||
    pathname.startsWith('/supplier/wallet') ||
    pathname.startsWith('/pro/onboarding') ||
    pathname.startsWith('/pro/incoming') ||
    (pathname.startsWith('/pro/leads/') && pathname !== '/pro/leads') ||
    pathname.match(/^\/pro\/jobs\/[^\/]+$/) ||
    pathname.startsWith('/pro/wallet/') ||
    (pathname.startsWith('/pro/profile/') && pathname !== '/pro/profile') ||
    pathname.startsWith('/pro/notifications') ||
    pathname.startsWith('/pro/referral') ||
    pathname.startsWith('/pro/support') ||
    pathname.startsWith('/pro/feedback') ||
    (pathname.startsWith('/consultant/leads/') && pathname !== '/consultant/leads') ||
    (pathname.startsWith('/consultant/properties/') && pathname !== '/consultant/properties') ||
    (pathname.startsWith('/consultant/profile/') && pathname !== '/consultant/profile') ||
    pathname.startsWith('/consultant/wallet') ||
    pathname.startsWith('/consultant/onboarding') ||
    pathname.startsWith('/consultant/notifications') ||
    pathname.startsWith('/consultant/referral') ||
    pathname.startsWith('/consultant/insights') ||
    pathname.startsWith('/consultant/support') ||
    pathname.startsWith('/system');

  if (isHidden) return null;

  const isSupplierPath = pathname.startsWith('/supplier');
  const isProPath = pathname.startsWith('/pro');
  const isConsultantPath = pathname.startsWith('/consultant');

  const homeownerNavItems = [
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

  const supplierNavItems = [
    {
      label: 'Home',
      icon: 'home',
      href: '/supplier',
      isActive: pathname === '/supplier',
    },
    {
      label: 'Leads',
      icon: 'leaderboard',
      href: '/supplier/leads',
      isActive: pathname.startsWith('/supplier/leads'),
    },
    {
      label: 'Analytics',
      icon: 'analytics',
      href: '/supplier/analytics',
      isActive: pathname.startsWith('/supplier/analytics'),
    },
    {
      label: 'Catalogue',
      icon: 'category',
      href: '/supplier/catalogue',
      isActive: pathname.startsWith('/supplier/catalogue'),
    },
    {
      label: 'Profile',
      icon: 'storefront',
      href: '/supplier/profile',
      isActive: pathname.startsWith('/supplier/profile') && !pathname.startsWith('/supplier/catalogue'),
    },
  ];

  const proNavItems = [
    {
      label: 'Home',
      icon: 'home',
      href: '/pro',
      isActive: pathname === '/pro',
    },
    {
      label: 'Leads',
      icon: 'leaderboard',
      href: '/pro/leads',
      isActive: pathname.startsWith('/pro/leads'),
    },
    {
      label: 'Earnings',
      icon: 'account_balance_wallet',
      href: '/pro/earnings',
      isActive: pathname.startsWith('/pro/earnings'),
    },
    {
      label: 'Jobs',
      icon: 'work',
      href: '/pro/jobs',
      isActive: pathname.startsWith('/pro/jobs'),
    },
    {
      label: 'Profile',
      icon: 'person',
      href: '/pro/profile',
      isActive: pathname.startsWith('/pro/profile'),
    },
  ];

  const consultantNavItems = [
    {
      label: 'Home',
      icon: 'home',
      href: '/consultant',
      isActive: pathname === '/consultant',
    },
    {
      label: 'Leads',
      icon: 'leaderboard',
      href: '/consultant/leads',
      isActive: pathname.startsWith('/consultant/leads'),
    },
    {
      label: 'Properties',
      icon: 'maps_home_work',
      href: '/consultant/properties',
      isActive: pathname.startsWith('/consultant/properties'),
    },
    {
      label: 'Profile',
      icon: 'person',
      href: '/consultant/profile',
      isActive: pathname.startsWith('/consultant/profile'),
    },
  ];

  const navItems = isConsultantPath 
    ? consultantNavItems 
    : isProPath 
      ? proNavItems 
      : isSupplierPath 
        ? supplierNavItems 
        : homeownerNavItems;

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
