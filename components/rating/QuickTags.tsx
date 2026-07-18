"use client";

import { useState } from "react";

interface QuickTagsProps {
  tags: string[];
  selectedTags?: string[];
  onChange?: (tags: string[]) => void;
}

export function QuickTags({
  tags,
  selectedTags = [],
  onChange,
}: QuickTagsProps) {
  const [selected, setSelected] = useState<string[]>(selectedTags);

  const toggleTag = (tag: string) => {
    const newSelected = selected.includes(tag)
      ? selected.filter((t) => t !== tag)
      : [...selected, tag];

    setSelected(newSelected);
    if (onChange) {
      onChange(newSelected);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isSelected = selected.includes(tag);
        return (
          <button
            key={tag}
            type="button"
            onClick={() => toggleTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-semibold font-public-sans transition-all duration-200 border ${
              isSelected
                ? "bg-[#FFD700] border-[#FFD700] text-[#1A1C1C] shadow-sm"
                : "bg-[#FAFAFA] border-[#E0E0E0] text-[#4D4732] hover:bg-[#F0F0F0]"
            }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
