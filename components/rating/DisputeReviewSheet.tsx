"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, CheckCircle2 } from "lucide-react";

interface DisputeReviewSheetProps {
  isOpen: boolean;
  onClose: () => void;
  reviewId?: number | string;
}

const DISPUTE_REASONS = [
  "Fake / Never hired me",
  "Unfair / Exaggerated",
  "Inappropriate content",
  "Spam / Promotional",
  "Conflict of interest"
];

export default function DisputeReviewSheet({ isOpen, onClose, reviewId }: DisputeReviewSheetProps) {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [explanation, setExplanation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedReason) {
      // API call to submit dispute would go here
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedReason(null);
        setExplanation("");
        onClose();
      }, 2000);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setSelectedReason(null);
    setExplanation("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-50 overflow-hidden flex flex-col"
            style={{ maxHeight: '90vh' }}
          >
            {/* Drag Handle */}
            <div className="w-full flex justify-center pt-3 pb-1" onClick={handleClose}>
              <div className="w-12 h-1.5 bg-[#E0E0E0] rounded-full" />
            </div>

            <div className="p-6 overflow-y-auto">
              {!isSubmitted ? (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="font-montserrat font-bold text-2xl text-[#1A1A1A] mb-1">Dispute Review</h2>
                      <p className="font-public-sans text-[#5F5E5E] text-sm">Review #{reviewId}</p>
                    </div>
                    <button 
                      onClick={handleClose}
                      className="w-8 h-8 bg-[#F3F3F3] rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-[#E0E0E0] transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mb-6 bg-[#FFF0F0] rounded-xl p-4 flex gap-3 border border-[#FADCD9]">
                    <AlertTriangle className="w-5 h-5 text-[#BA1A1A] flex-shrink-0 mt-0.5" />
                    <p className="font-public-sans text-[#BA1A1A] text-xs leading-relaxed">
                      Disputed reviews are temporarily hidden while our trust team investigates. False disputes may result in account penalties.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-public-sans font-bold text-[#1A1A1A] text-sm mb-3">Why are you disputing this review?</h3>
                    <div className="flex flex-col gap-2">
                      {DISPUTE_REASONS.map(reason => (
                        <button
                          key={reason}
                          onClick={() => setSelectedReason(reason)}
                          className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-public-sans transition-colors ${
                            selectedReason === reason 
                              ? "bg-[#1A1A1A] border-[#1A1A1A] text-white"
                              : "bg-[#FAFAFA] border-[#E0E0E0] text-[#1A1A1A] hover:bg-[#F3F3F3]"
                          }`}
                        >
                          {reason}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-public-sans font-bold text-[#1A1A1A] text-sm mb-3">Additional Details (Optional)</h3>
                    <textarea
                      value={explanation}
                      onChange={(e) => setExplanation(e.target.value)}
                      placeholder="Please provide any relevant context..."
                      className="w-full min-h-[100px] p-4 rounded-xl border border-[#E0E0E0] bg-[#FAFAFA] font-public-sans text-[#1A1A1A] placeholder:text-[#5F5E5E] focus:outline-none focus:border-[#1A1A1A] resize-none text-sm"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!selectedReason}
                    className="w-full py-4 rounded-full bg-[#BA1A1A] text-white font-montserrat font-bold text-lg hover:bg-[#93000A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-safe"
                  >
                    Submit Dispute
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center py-12 mb-safe">
                  <div className="w-20 h-20 rounded-full bg-[#E5F7ED] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#25D366]" />
                  </div>
                  <h2 className="font-montserrat font-bold text-2xl text-[#1A1A1A] mb-2 text-center">
                    Dispute Sent
                  </h2>
                  <p className="font-public-sans text-[#5F5E5E] text-center px-4">
                    Our trust and safety team will review this case and get back to you within 48 hours.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
