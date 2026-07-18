"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { StarRating } from "@/components/rating/StarRating";
import { QuickTags } from "@/components/rating/QuickTags";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/ui/Footer";

const QUICK_TAGS = [
  "Professional",
  "On Time",
  "Good Value",
  "Clean Work",
  "Responsive",
  "Highly Recommended",
];

export default function RatePage({ params }: { params: { token: string } }) {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const [review, setReview] = useState("");
  // Start with the state dictated by the token, but allow it to change (e.g. valid -> submitted)
  const [viewState, setViewState] = useState<"valid" | "submitted" | "expired" | "rated">(
    (params.token as "valid" | "submitted" | "expired" | "rated") || "valid"
  );

  const handleSubmit = () => {
    // In a real app, this would be an API call
    if (rating > 0) {
      setViewState("submitted");
    }
  };

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col items-center pt-8 px-4 sm:px-6">
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E0E0E0] p-6 shadow-sm overflow-hidden mb-auto">
        <AnimatePresence mode="wait">
          {/* RT-01: Rate Your Experience */}
          {viewState === "valid" && (
            <motion.div key="valid" {...pageTransition} className="flex flex-col items-center">
              <h1 className="font-montserrat font-bold text-2xl text-[#1A1A1A] mb-2 text-center">
                Rate your experience
              </h1>
              <p className="font-public-sans text-[#5F5E5E] text-center mb-8">
                How was your job with <span className="font-semibold text-[#1A1A1A]">Ramesh Sharma</span>?
              </p>

              <div className="mb-8">
                <StarRating onRatingChange={setRating} />
              </div>

              {rating > 0 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="w-full flex flex-col gap-6"
                >
                  <div>
                    <h3 className="font-public-sans font-bold text-sm text-[#1A1A1A] mb-3">
                      What went well?
                    </h3>
                    <QuickTags tags={QUICK_TAGS} onChange={setTags} />
                  </div>

                  <div>
                    <h3 className="font-public-sans font-bold text-sm text-[#1A1A1A] mb-3">
                      Add a written review (optional)
                    </h3>
                    <textarea
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      placeholder="Share details of your experience..."
                      className="w-full min-h-[120px] p-4 rounded-xl border border-[#E0E0E0] bg-[#FAFAFA] font-public-sans text-[#1A1A1A] placeholder:text-[#5F5E5E] focus:outline-none focus:border-[#1A1A1A] resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-full bg-[#FFD700] text-[#1A1A1A] font-montserrat font-bold text-lg hover:bg-[#E9C400] transition-colors mt-4 shadow-[0_2px_0_0_#1A1A1A] active:shadow-none active:translate-y-[2px]"
                  >
                    Submit Review
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* RT-02: Rating Submitted Confirmation */}
          {viewState === "submitted" && (
            <motion.div key="submitted" {...pageTransition} className="flex flex-col items-center py-8">
              <div className="w-20 h-20 rounded-full bg-[#E5F7ED] flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#25D366]" />
              </div>
              <h1 className="font-montserrat font-bold text-2xl text-[#1A1A1A] mb-2 text-center">
                Thank you!
              </h1>
              <p className="font-public-sans text-[#5F5E5E] text-center mb-8 px-4">
                Your review has been submitted successfully. It helps others make better decisions.
              </p>

              <div className="w-full bg-[#F3F3F3] rounded-xl p-4 mb-8 text-center border border-[#E0E0E0]">
                <p className="font-public-sans text-sm text-[#1A1A1A] font-semibold mb-1">What happens next?</p>
                <p className="font-public-sans text-xs text-[#5F5E5E]">Your feedback is now visible on Ramesh Sharma's profile and helps build trust in our community.</p>
              </div>

              <button
                onClick={() => router.push('/discover')}
                className="w-full py-4 rounded-full bg-[#FAFAFA] border-2 border-[#1A1A1A] text-[#1A1A1A] font-montserrat font-bold text-lg hover:bg-[#F0F0F0] transition-colors"
              >
                Find More Professionals
              </button>
            </motion.div>
          )}

          {/* RT-03: Rating Link Expired */}
          {viewState === "expired" && (
            <motion.div key="expired" {...pageTransition} className="flex flex-col items-center py-8">
              <div className="w-20 h-20 rounded-full bg-[#FFF0F0] flex items-center justify-center mb-6">
                <AlertCircle className="w-10 h-10 text-[#BA1A1A]" />
              </div>
              <h1 className="font-montserrat font-bold text-2xl text-[#1A1A1A] mb-2 text-center">
                Link Expired
              </h1>
              <p className="font-public-sans text-[#5F5E5E] text-center mb-8 px-4">
                This rating link is no longer valid. Rating links expire after 7 days for security.
              </p>

              <div className="w-full bg-[#FAFAFA] rounded-xl p-4 mb-8 text-center border border-[#E0E0E0]">
                <p className="font-public-sans text-sm text-[#1A1A1A] mb-2">Need to submit a review?</p>
                <button className="text-sm font-semibold text-[#0B132B] underline underline-offset-2 hover:text-[#1A1A1A]">
                  Request a new link
                </button>
              </div>

              <button
                onClick={() => router.push('/discover')}
                className="w-full py-4 rounded-full bg-[#FAFAFA] border-2 border-[#1A1A1A] text-[#1A1A1A] font-montserrat font-bold text-lg hover:bg-[#F0F0F0] transition-colors"
              >
                Return Home
              </button>
            </motion.div>
          )}

          {/* RT-04: Already Rated Screen */}
          {viewState === "rated" && (
            <motion.div key="rated" {...pageTransition} className="flex flex-col items-center py-8">
              <div className="w-20 h-20 rounded-full bg-[#F3F4F5] flex items-center justify-center mb-6">
                <XCircle className="w-10 h-10 text-[#5F5E5E]" />
              </div>
              <h1 className="font-montserrat font-bold text-2xl text-[#1A1A1A] mb-2 text-center">
                Already Rated
              </h1>
              <p className="font-public-sans text-[#5F5E5E] text-center mb-8 px-4">
                You have already submitted a review for this job. You can only review a professional once per job.
              </p>

              <div className="w-full bg-[#FAFAFA] rounded-xl p-4 mb-8 border border-[#E0E0E0]">
                <p className="font-public-sans text-xs text-[#5F5E5E] uppercase tracking-wider font-bold mb-3">Your Previous Rating</p>
                <div className="flex items-center gap-2 mb-2 pointer-events-none scale-75 origin-left -mt-2">
                  <StarRating maxStars={5} initialRating={5} readonly />
                </div>
                <p className="font-public-sans text-sm text-[#1A1A1A] italic">"Excellent work, highly recommend Ramesh!"</p>
              </div>

              <button
                onClick={() => router.push('/discover')}
                className="w-full py-4 rounded-full bg-[#FAFAFA] border-2 border-[#1A1A1A] text-[#1A1A1A] font-montserrat font-bold text-lg hover:bg-[#F0F0F0] transition-colors"
              >
                Explore Services
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Area */}
      <div className="w-full max-w-md mt-2 flex flex-col gap-4">
        {viewState === "valid" && (
          <div className="w-full bg-white rounded-2xl p-4 border border-[#E0E0E0] flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E0E0E0] flex-shrink-0">
              <img src="https://ui-avatars.com/api/?name=Ramesh+Sharma&background=random&size=128" alt="Ramesh Sharma" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-public-sans font-bold text-sm text-[#1A1A1A]">Pipe Leak Repair</p>
              <p className="font-public-sans text-xs text-[#5F5E5E]">Completed on Oct 24, 2023</p>
            </div>
          </div>
        )}
        <div className="text-center px-4 mt-2 pb-6">
          <p className="font-public-sans text-xs text-[#8F8F8F] leading-relaxed mb-4">
            Ratings are public and help build trust in the ArcMart community. <br/>
            Need help? <button className="underline hover:text-[#5F5E5E] font-medium">Contact Support</button>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
