'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';

export function ReviewRemovedNotice() {
  return (
    <div className="glass-card border-2 border-dashed border-outline-variant bg-surface-dim rounded-2xl p-4 flex items-start opacity-75">
      <AlertCircle className="w-5 h-5 text-on-surface-variant mr-3 shrink-0 mt-0.5" />
      <div>
        <h4 className="font-bold text-sm text-on-surface line-through">Review removed</h4>
        <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
          This review was removed by ArcMart Trust & Safety because it violated our community guidelines.
        </p>
      </div>
    </div>
  );
}
