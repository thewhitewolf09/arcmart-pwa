"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  maxStars?: number;
  onRatingChange?: (rating: number) => void;
  initialRating?: number;
  readonly?: boolean;
}

export function StarRating({
  maxStars = 5,
  onRatingChange,
  initialRating = 0,
  readonly = false,
}: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleRating = (currentRating: number) => {
    if (readonly) return;
    setRating(currentRating);
    if (onRatingChange) {
      onRatingChange(currentRating);
    }
  };

  return (
    <div className="flex gap-2">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={starValue}
            type="button"
            disabled={readonly}
            className={`transition-transform duration-200 ${
              !readonly && "hover:scale-110 focus:outline-none"
            }`}
            onClick={() => handleRating(starValue)}
            onMouseEnter={() => !readonly && setHover(starValue)}
            onMouseLeave={() => !readonly && setHover(0)}
          >
            <Star
              className={`w-10 h-10 ${
                starValue <= (hover || rating)
                  ? "fill-[#FFD700] text-[#FFD700]"
                  : "fill-transparent text-[#DADADA]"
              } transition-colors duration-200`}
              strokeWidth={1.5}
            />
          </button>
        );
      })}
    </div>
  );
}
