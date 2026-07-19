"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ShieldCheck,
  CreditCard,
  Building2,
  Smartphone,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(false);

  // Read params (e.g. ?plan=pro or ?item=featured&price=₹999)
  const plan = searchParams.get("plan");
  const price =
    searchParams.get("price") ||
    (plan === "pro" ? "₹4,999" : plan === "elite" ? "₹9,999" : "₹1,999");
  const itemName =
    searchParams.get("item") === "featured"
      ? "Featured Listing"
      : `${plan ? plan.charAt(0).toUpperCase() + plan.slice(1) : "Pro"} Plan`;

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const processPayment = (success: boolean) => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (success) {
        if (searchParams.get("item") === "featured") {
          router.push("/supplier/featured/success");
        } else {
          router.push("/supplier/subscription/success");
        }
      } else {
        router.push("/supplier/subscription/failed");
      }
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-surface">
      {/* App Bar */}
      <div className="sticky top-0 z-40 bg-surface/80 backdrop-blur-lg border-b border-outline-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => router.back()}
            disabled={isProcessing}
            className="p-2 -ml-2 mr-2 rounded-full hover:bg-surface-variant text-on-surface transition disabled:opacity-50"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="font-bold text-on-surface truncate">Checkout</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Order Summary */}
        <div className="bg-surface-variant p-6 border-b border-outline-variant">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">
            Order Summary
          </h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-on-surface">
              {itemName}
            </span>
            <span className="text-sm font-bold text-on-surface">{price}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-on-surface-variant">GST (18%)</span>
            <span className="text-xs text-on-surface-variant">Included</span>
          </div>
          <hr className="border-outline-variant my-3" />
          <div className="flex justify-between items-center">
            <span className="text-base font-bold text-on-surface">
              Total Amount
            </span>
            <span className="text-xl font-black text-primary">{price}</span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center text-xs font-semibold text-success-dark bg-success-container px-3 py-2 rounded-lg mb-6 border border-success/20">
            <ShieldCheck className="w-4 h-4 mr-2" /> 100% Secure Payments via
            Razorpay
          </div>

          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 ml-1">
            Payment Method
          </h3>

          <div className="bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden">
            {/* UPI Section */}
            <div
              className={`p-4 border-b border-outline-variant cursor-pointer transition-colors ${paymentMethod === "upi" ? "bg-[#3399cc]/5" : "hover:bg-surface-variant/50"}`}
              onClick={() => setPaymentMethod("upi")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Smartphone className="w-6 h-6 text-[#0b1c30] mr-3" />
                  <span className="font-bold text-on-surface">UPI / QR</span>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "upi" ? "border-[#3399cc] bg-[#3399cc]" : "border-outline-variant"}`}
                >
                  {paymentMethod === "upi" && (
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>

              {paymentMethod === "upi" && (
                <div className="mt-4 pt-4 border-t border-outline-variant/50 animate-in slide-in-from-top-2">
                  <p className="text-xs text-on-surface-variant mb-2">
                    Enter your UPI ID to start auto-pay
                  </p>
                  <input
                    type="text"
                    placeholder="e.g. 9876543210@ybl"
                    className="w-full bg-surface-variant border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:border-[#3399cc]"
                  />
                </div>
              )}
            </div>

            {/* Cards Section */}
            <div
              className={`p-4 border-b border-outline-variant cursor-pointer transition-colors ${paymentMethod === "card" ? "bg-[#3399cc]/5" : "hover:bg-surface-variant/50"}`}
              onClick={() => setPaymentMethod("card")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CreditCard className="w-6 h-6 text-[#0b1c30] mr-3" />
                  <span className="font-bold text-on-surface">
                    Credit / Debit Card
                  </span>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "card" ? "border-[#3399cc] bg-[#3399cc]" : "border-outline-variant"}`}
                >
                  {paymentMethod === "card" && (
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>

              {paymentMethod === "card" && (
                <div className="mt-4 pt-4 border-t border-outline-variant/50 animate-in slide-in-from-top-2 space-y-3">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full bg-surface-variant border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:border-[#3399cc]"
                  />
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-1/2 bg-surface-variant border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:border-[#3399cc]"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-1/2 bg-surface-variant border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:border-[#3399cc]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Netbanking Section */}
            <div
              className={`p-4 cursor-pointer transition-colors ${paymentMethod === "netbanking" ? "bg-[#3399cc]/5" : "hover:bg-surface-variant/50"}`}
              onClick={() => setPaymentMethod("netbanking")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Building2 className="w-6 h-6 text-[#0b1c30] mr-3" />
                  <span className="font-bold text-on-surface">Netbanking</span>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "netbanking" ? "border-[#3399cc] bg-[#3399cc]" : "border-outline-variant"}`}
                >
                  {paymentMethod === "netbanking" && (
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>

              {paymentMethod === "netbanking" && (
                <div className="mt-4 pt-4 border-t border-outline-variant/50 animate-in slide-in-from-top-2">
                  <select className="w-full bg-surface-variant border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:border-[#3399cc] appearance-none">
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>State Bank of India</option>
                    <option>Axis Bank</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Processing Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 z-50 bg-surface/90 backdrop-blur-sm flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-outline-variant border-t-primary rounded-full animate-spin mb-4"></div>
          <h2 className="text-lg font-bold text-on-surface">
            Processing Payment...
          </h2>
          <p className="text-sm text-on-surface-variant mt-2">
            Please do not close this screen.
          </p>
        </div>
      )}

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-safe bg-surface border-t border-outline-variant shadow-[0_-8px_20px_rgba(0,0,0,0.05)] z-30 flex space-x-3">
        {/* DEMO BUTTONS for Success/Failure flow */}
        <button
          onClick={() => processPayment(false)}
          disabled={isProcessing}
          className="w-1/3 py-4 bg-error-container text-error font-bold rounded-xl flex items-center justify-center hover:bg-opacity-80 transition text-xs"
        >
          Simulate Fail
        </button>
        <button
          onClick={() => processPayment(true)}
          disabled={isProcessing}
          className="flex-1 py-4 bg-[#0d1c32] text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:bg-opacity-90 transition"
        >
          Pay {price} Securely
        </button>
      </div>
    </div>
  );
}

export default function Checkout() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex flex-col min-h-screen bg-surface items-center justify-center">
          <div className="w-16 h-16 border-4 border-outline-variant border-t-primary rounded-full animate-spin mb-4"></div>
          <h2 className="text-lg font-bold text-on-surface">Loading...</h2>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
