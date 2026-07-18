'use client';

import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import { ConnectProvider } from '../context/ConnectContext';
import WhatsAppConnectSheet from './connect/WhatsAppConnectSheet';
export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  }));

  // Register service worker for PWA
  useEffect(() => {
    if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          },
          (err) => {
            console.error('ServiceWorker registration failed: ', err);
          }
        );
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ConnectProvider>
        <AnimatePresence mode="wait">
          <div className="pwa-shell bg-white min-h-screen text-brand-navy flex flex-col font-sans select-none relative shadow-xl overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
            <main className="flex-1 flex flex-col z-10">
              {children}
            </main>
            <WhatsAppConnectSheet />
          </div>
        </AnimatePresence>
      </ConnectProvider>
    </QueryClientProvider>
  );
}
