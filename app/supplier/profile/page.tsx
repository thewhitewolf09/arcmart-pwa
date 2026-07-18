'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useMockStore } from '../../../store/mockStore';
import { Camera, MapPin, Phone, Clock, FileText, ChevronRight, CheckCircle2, Banknote, Map, ShieldCheck, Star, Building2, Receipt, Gift, HelpCircle, AlertOctagon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '../../../components/ui/Footer';

export default function SupplierProfile() {
  const router = useRouter();
  const { user } = useMockStore();

  React.useEffect(() => {
    if (!user) {
      router.push('/auth');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="flex-1 flex flex-col p-5 pb-24 bg-surface min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pt-2">
        <h1 className="text-2xl font-bold text-on-surface tracking-tight">Profile</h1>
        <button className="px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-bold shadow-sm shadow-primary/30 hover:bg-primary/90 transition">
          Save Changes
        </button>
      </div>

      {/* Profile Photo Area */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-secondary-container border-4 border-surface shadow-lg overflow-hidden flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">JD</span>
            </div>
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-on-primary border-2 border-surface flex items-center justify-center shadow-md hover:bg-primary/90 transition">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        <h2 className="mt-4 text-xl font-bold text-on-surface">Jai Durga Tiles</h2>
        <Link href="/supplier/profile/verification" className="mt-1 flex items-center hover:bg-surface-variant px-2 py-0.5 rounded transition">
          <CheckCircle2 className="w-3 h-3 text-success mr-1" />
          <span className="text-xs text-on-surface-variant font-semibold">Verified Supplier</span>
        </Link>
      </div>

      <div className="space-y-6">
        
        {/* Verification Status (SUP-19) */}
        <section>
          <Link href="/supplier/profile/gst" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-success mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">GST Verification</p>
                <p className="text-[11px] text-success font-semibold">Verified</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </Link>
        </section>

        {/* Basic Info (SUP-14) */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Business Information</h3>
          <div className="glass-card rounded-2xl border border-outline-variant shadow-sm overflow-hidden divide-y divide-outline-variant/50">
            <div className="p-4 flex items-center justify-between hover:bg-surface-variant transition cursor-pointer">
              <Link href="/supplier/profile/edit" className="flex items-center w-full">
                <FileText className="w-5 h-5 text-on-surface-variant mr-3 flex-shrink-0" />
                <div className="overflow-hidden pr-4">
                  <p className="text-[10px] text-on-surface-variant font-semibold uppercase">Business Name</p>
                  <p className="text-sm font-bold text-on-surface truncate">Jai Durga Tiles & Granite</p>
                </div>
              </Link>
              <ChevronRight className="w-4 h-4 text-outline flex-shrink-0" />
            </div>
            <div className="p-4 flex items-center justify-between hover:bg-surface-variant transition cursor-pointer">
              <Link href="/supplier/profile/edit" className="flex items-center w-full">
                <Phone className="w-5 h-5 text-on-surface-variant mr-3 flex-shrink-0" />
                <div className="overflow-hidden pr-4">
                  <p className="text-[10px] text-on-surface-variant font-semibold uppercase">Contact Number</p>
                  <p className="text-sm font-bold text-on-surface truncate">+91 98765 43210</p>
                </div>
              </Link>
              <ChevronRight className="w-4 h-4 text-outline flex-shrink-0" />
            </div>
            <div className="p-4 flex items-center justify-between hover:bg-surface-variant transition cursor-pointer">
              <Link href="/supplier/profile/edit" className="flex items-center w-full overflow-hidden">
                <MapPin className="w-5 h-5 text-on-surface-variant mr-3 flex-shrink-0" />
                <div className="overflow-hidden pr-4">
                  <p className="text-[10px] text-on-surface-variant font-semibold uppercase">Location</p>
                  <p className="text-sm font-bold text-on-surface truncate">Sector 18, Noida, UP</p>
                </div>
              </Link>
              <ChevronRight className="w-4 h-4 text-outline flex-shrink-0" />
            </div>
          </div>
        </section>

        {/* Categories (SUP-15) */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Service Categories</h3>
          <div className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-primary/10 text-primary border border-primary/20">Tiles & Flooring</span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-primary/10 text-primary border border-primary/20">Sanitaryware</span>
            </div>
            <Link href="/supplier/profile/categories" className="w-full py-3 rounded-xl border border-dashed border-outline-variant text-on-surface-variant font-bold text-sm hover:bg-surface-variant hover:text-on-surface transition flex justify-center">
              + Edit Categories
            </Link>
          </div>
        </section>

        {/* Price Ranges (SUP-16) */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Pricing</h3>
          <Link href="/supplier/profile/pricing" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
            <div className="flex items-center">
              <Banknote className="w-5 h-5 text-on-surface-variant mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Edit Price Ranges</p>
                <p className="text-[11px] text-on-surface-variant font-semibold">Min-max per category</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </Link>
        </section>

        {/* Service Areas (SUP-17) */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Service Areas</h3>
          <div className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-secondary-container text-on-secondary-container border border-secondary-container">Noida</span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-secondary-container text-on-secondary-container border border-secondary-container">Greater Noida</span>
              <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-secondary-container text-on-secondary-container border border-secondary-container">Indirapuram</span>
            </div>
            <Link href="/supplier/profile/areas" className="w-full py-3 rounded-xl border border-dashed border-outline-variant text-on-surface-variant font-bold text-sm hover:bg-surface-variant hover:text-on-surface transition flex justify-center">
              + Edit Areas
            </Link>
          </div>
        </section>

        {/* Working Hours (SUP-18) */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Working Hours</h3>
          <Link href="/supplier/profile/hours" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-on-surface-variant mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Mon - Sat</p>
                <p className="text-[11px] text-on-surface-variant font-semibold">10:00 AM - 08:00 PM</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </Link>
        </section>

        {/* Photos (SUP-20, SUP-21) */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Store Photos</h3>
          <div className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm">
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[1, 2].map((i) => (
                <div key={i} className="aspect-square rounded-xl bg-secondary-container border border-outline-variant flex items-center justify-center">
                  <Camera className="w-6 h-6 text-on-surface-variant opacity-50" />
                </div>
              ))}
              <Link href="/supplier/profile/photos/add" className="aspect-square rounded-xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant transition">
                <Camera className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-bold">Add Photo</span>
              </Link>
            </div>
            <Link href="/supplier/profile/photos" className="w-full py-3 rounded-xl bg-surface-variant text-on-surface font-bold text-sm flex justify-center items-center hover:bg-outline-variant transition">
              Manage All Photos
            </Link>
          </div>
        </section>

        {/* Delivery Settings (SUP-27) */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Logistics</h3>
          <Link href="/supplier/profile/delivery" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-on-surface-variant mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Delivery Settings</p>
                <p className="text-[11px] text-on-surface-variant font-semibold">Charges, min order & coverage</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </Link>
        </section>

        {/* Subscription Plan */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Account & Billing</h3>
          <Link href="/supplier/subscription" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
            <div className="flex items-center">
              <Banknote className="w-5 h-5 text-on-surface-variant mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Subscription Plan</p>
                <p className="text-[11px] text-primary font-bold">Pro Plan Active</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </Link>

          {/* Certificates (SUP-43) */}
          <Link href="/supplier/profile/certificates" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition mt-4">
            <div className="flex items-center">
              <FileText className="w-5 h-5 text-on-surface-variant mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Certificates & Documents</p>
                <p className="text-[11px] text-on-surface-variant font-semibold">Manage trade licenses & certs</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </Link>

          {/* Bank Details (SUP-47) */}
          <Link href="/supplier/profile/bank" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition mt-4">
            <div className="flex items-center">
              <Building2 className="w-5 h-5 text-on-surface-variant mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Bank Details</p>
                <p className="text-[11px] text-on-surface-variant font-semibold">Manage payout account</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </Link>

          {/* Invoices (SUP-48) */}
          <Link href="/supplier/profile/invoices" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition mt-4">
            <div className="flex items-center">
              <Receipt className="w-5 h-5 text-on-surface-variant mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">GST Invoices</p>
                <p className="text-[11px] text-on-surface-variant font-semibold">Download B2B invoices</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </Link>
        </section>

        {/* Reviews (SUP-22) */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Customer Reviews</h3>
          <Link href="/supplier/reviews" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">4.8 Rating (24 Reviews)</p>
                <p className="text-[11px] text-on-surface-variant font-semibold">View & reply to feedback</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </Link>
        </section>

        {/* Growth & Support */}
        <section>
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">Growth & Support</h3>
          
          <Link href="/supplier/profile/refer" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition mb-4">
            <div className="flex items-center">
              <Gift className="w-5 h-5 text-primary mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Refer & Earn</p>
                <p className="text-[11px] text-primary font-bold">Get 1 Month Free</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </Link>

          <Link href="/supplier/profile/support" className="glass-card rounded-2xl p-4 border border-outline-variant shadow-sm flex items-center justify-between hover:bg-surface-variant transition">
            <div className="flex items-center">
              <HelpCircle className="w-5 h-5 text-on-surface-variant mr-3" />
              <div>
                <p className="text-sm font-bold text-on-surface">Help & Support</p>
                <p className="text-[11px] text-on-surface-variant font-semibold">FAQs & Contact us</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-outline" />
          </Link>
        </section>

        {/* Account Actions */}
        <section className="pt-4 border-t border-outline-variant">
          <Link href="/supplier/profile/delete" className="flex items-center justify-center p-4 text-error font-bold text-sm hover:bg-error/5 rounded-xl transition">
            <AlertOctagon className="w-4 h-4 mr-2" /> Delete Account
          </Link>
        </section>

      </div>

      <Footer />
    </div>
  );
}
