'use client';

import React from 'react';
import { User, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ProfileCompletenessNudgeProps {
  percentage: number;
  role: 'homeowner' | 'pro' | 'consultant';
}

export function ProfileCompletenessNudge({ percentage, role }: ProfileCompletenessNudgeProps) {
  if (percentage >= 100) return null;

  let linkTo = '/profile/edit';
  if (role === 'pro') linkTo = '/pro/profile';
  if (role === 'consultant') linkTo = '/consultant/profile';

  return (
    <Link href={linkTo} className="block glass-card border border-outline-variant rounded-2xl p-4 shadow-sm hover:border-primary/50 transition bg-surface">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center mr-3 shrink-0">
            <User className="w-4 h-4 text-warning-dark" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-on-surface">Complete your profile</h4>
            <p className="text-[10px] text-on-surface-variant mt-0.5">Profiles with photos get 3x more views.</p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-outline mt-1" />
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex-1 h-2 bg-surface-variant rounded-full overflow-hidden">
          <div 
            className="h-full bg-warning-dark rounded-full transition-all duration-1000 ease-out" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="text-xs font-black text-warning-dark">{percentage}%</span>
      </div>
    </Link>
  );
}
