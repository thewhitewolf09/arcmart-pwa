'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type EntityType = 'professional' | 'supplier' | 'consultant' | null;

interface ConnectContextProps {
  isOpen: boolean;
  entityType: EntityType;
  entityId: string | null;
  entityName: string | null;
  isLoggedIn: boolean; // Mock auth state
  openConnect: (type: EntityType, id: string, name: string) => void;
  closeConnect: () => void;
}

const ConnectContext = createContext<ConnectContextProps | undefined>(undefined);

export function ConnectProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [entityType, setEntityType] = useState<EntityType>(null);
  const [entityId, setEntityId] = useState<string | null>(null);
  const [entityName, setEntityName] = useState<string | null>(null);

  // Mocking logged out state initially as requested by user
  // (In a real app, this would come from an AuthProvider)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openConnect = (type: EntityType, id: string, name: string) => {
    setEntityType(type);
    setEntityId(id);
    setEntityName(name);
    setIsOpen(true);
  };

  const closeConnect = () => {
    setIsOpen(false);
    // Add a slight delay before clearing data to allow exit animation to play smoothly
    setTimeout(() => {
      setEntityType(null);
      setEntityId(null);
      setEntityName(null);
    }, 300);
  };

  return (
    <ConnectContext.Provider value={{ 
      isOpen, 
      entityType, 
      entityId, 
      entityName, 
      isLoggedIn, 
      openConnect, 
      closeConnect 
    }}>
      {children}
    </ConnectContext.Provider>
  );
}

export function useConnect() {
  const context = useContext(ConnectContext);
  if (context === undefined) {
    throw new Error('useConnect must be used within a ConnectProvider');
  }
  return context;
}
