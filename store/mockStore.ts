import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProfile, UserRole, LocationData, ProfessionalDetail, SupplierDetail, QuoteRequest, Quote, Booking } from '../types';

interface AppState {
  // Auth state
  user: UserProfile | null;
  tempPhone: string;
  tempRole: UserRole | null;
  otpCode: string;
  otpSent: boolean;
  isOnboarded: boolean;
  
  // App data list
  professionals: ProfessionalDetail[];
  suppliers: SupplierDetail[];
  quoteRequests: QuoteRequest[];
  quotes: Quote[];
  bookings: Booking[];
  
  // Actions
  setOnboardingComplete: (val: boolean) => void;
  setTempRole: (role: UserRole | null) => void;
  setTempPhone: (phone: string) => void;
  sendOtp: () => void;
  verifyOtp: (code: string) => boolean;
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
  setSuspended: (suspended: boolean) => void;
  addQuoteRequest: (req: { title: string; category: string; description: string; elementSelected?: string }) => void;
  createBooking: (proId: string, proName: string, reqId: string) => void;
  updateLocation: (loc: LocationData) => void;
}

// Seed data for Indian context
const seedProfessionals: ProfessionalDetail[] = [
  {
    id: 'pro-1',
    name: 'Ramesh Kumar',
    category: 'plumber',
    rating: 4.8,
    reviewsCount: 142,
    experienceYears: 12,
    completedProjects: 450,
    phone: '+91 98765 43210',
    distance: '0.8 km',
    responseTime: '~10 mins',
    isVerified: true,
    hourlyRate: 'Rs. 299/hr',
    avatarUrl: '/avatars/pro1.jpg',
    specialization: ['Pipe leaks', 'Bathroom Fittings', 'Sanitary installation'],
    portfolio: ['/portfolio/leak1.jpg', '/portfolio/bath1.jpg'],
    reviews: [
      { id: 'r-1', userName: 'Aakash Sharma', rating: 5, comment: 'Fixed my kitchen leak in 15 mins. Highly recommended!', date: '14 May 2026' },
      { id: 'r-2', userName: 'Preeti Singh', rating: 4, comment: 'Punctual and very neat work. Charges are reasonable.', date: '02 May 2026' }
    ]
  },
  {
    id: 'pro-2',
    name: 'Sunil Prasad',
    category: 'electrician',
    rating: 4.9,
    reviewsCount: 88,
    experienceYears: 8,
    completedProjects: 310,
    phone: '+91 98123 45678',
    distance: '1.4 km',
    responseTime: '~15 mins',
    isVerified: true,
    hourlyRate: 'Rs. 249/hr',
    avatarUrl: '/avatars/pro2.jpg',
    specialization: ['House wiring', 'Inverter repair', 'Smart lights setup'],
    portfolio: [],
    reviews: [
      { id: 'r-3', userName: 'Rohit Verma', rating: 5, comment: 'Excellent electrical work for my living room.', date: '10 May 2026' }
    ]
  },
  {
    id: 'pro-3',
    name: 'Amit Mistri',
    category: 'carpenter',
    rating: 4.6,
    reviewsCount: 65,
    experienceYears: 15,
    completedProjects: 180,
    phone: '+91 99988 77766',
    distance: '2.1 km',
    responseTime: '~20 mins',
    isVerified: false,
    hourlyRate: 'Rs. 350/hr',
    avatarUrl: '/avatars/pro3.jpg',
    specialization: ['Modular Kitchens', 'Wooden Wardrobes', 'Door lock fixing'],
    portfolio: [],
    reviews: []
  }
];

const seedSuppliers: SupplierDetail[] = [
  {
    id: 'sup-1',
    name: 'Jai Durga Tiles & Granite',
    category: 'tiles',
    rating: 4.7,
    reviewsCount: 220,
    priceRange: 'Rs. 45 - 280 / sq ft',
    address: 'Plot 42, Marble Market, Sector 9, Noida',
    distance: '1.8 km',
    phone: '+91 99887 66554',
    description: 'Largest collection of Kajaria tiles, Somany tiles, and premium Italian marbles in Noida NCR.',
    images: ['/products/tile1.jpg', '/products/tile2.jpg'],
    isVerified: true,
    responseStreak: 15,
    responseTime: '~5 mins'
  },
  {
    id: 'sup-2',
    name: 'Apex Kitchen Fittings & Sanitaryware',
    category: 'kitchen',
    rating: 4.5,
    reviewsCount: 115,
    priceRange: 'Rs. 800 - 15000 / piece',
    address: 'Shop No. 5, Block B, Atta Market, Sector 27, Noida',
    distance: '0.5 km',
    phone: '+91 98765 11223',
    description: 'Authorized dealer of Hindware, Jaquar, and Cera kitchen fittings.',
    images: [],
    isVerified: true,
    responseStreak: 8,
    responseTime: '~12 mins'
  }
];

export const useMockStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial Auth state
      user: null,
      tempPhone: '',
      tempRole: null,
      otpCode: '123456', // standard verification code for demo ease
      otpSent: false,
      isOnboarded: false,
      
      // App seed lists
      professionals: seedProfessionals,
      suppliers: seedSuppliers,
      quoteRequests: [],
      quotes: [],
      bookings: [],
      
      // Actions
      setOnboardingComplete: (val) => set({ isOnboarded: val }),
      setTempRole: (role) => set({ tempRole: role }),
      setTempPhone: (phone) => set({ tempPhone: phone }),
      
      sendOtp: () => {
        set({ otpSent: true });
        console.log(`[MSG91 OTP Mock] Sent OTP code "123456" to phone number: ${get().tempPhone}`);
      },
      
      verifyOtp: (code) => {
        if (code === get().otpCode) {
          const newUser: UserProfile = {
            id: `usr-${Math.random().toString(36).substr(2, 9)}`,
            phone: get().tempPhone,
            role: get().tempRole,
            profileCompleteness: 20,
            isVerified: false,
            createdAt: new Date().toISOString()
          };
          set({ user: newUser, otpSent: false });
          return true;
        }
        return false;
      },
      
      logout: () => set({ user: null, tempPhone: '', tempRole: null, otpSent: false }),
      
      updateProfile: (profileData) => {
        const currentUser = get().user;
        if (!currentUser) return;
        
        // Calculate completeness
        let completeness = 20;
        if (profileData.name) completeness += 25;
        if (profileData.email) completeness += 25;
        if (profileData.location) completeness += 30;

        set({
          user: {
            ...currentUser,
            ...profileData,
            profileCompleteness: Math.min(completeness, 100)
          }
        });
      },

      setSuspended: (suspended) => {
        const currentUser = get().user;
        if (!currentUser) return;
        set({ user: { ...currentUser, isSuspended: suspended } });
      },

      updateLocation: (loc) => {
        const currentUser = get().user;
        if (!currentUser) return;
        set({ user: { ...currentUser, location: loc } });
      },

      addQuoteRequest: (req) => {
        const currentUser = get().user;
        if (!currentUser) return;
        
        const newReq: QuoteRequest = {
          id: `req-${Math.random().toString(36).substr(2, 9)}`,
          homeownerId: currentUser.id,
          category: req.category,
          title: req.title,
          description: req.description,
          elementSelected: req.elementSelected,
          status: 'pending',
          createdAt: new Date().toISOString()
        };

        set((state) => ({
          quoteRequests: [newReq, ...state.quoteRequests]
        }));

        // Simulate instant quote response after 5 seconds
        setTimeout(() => {
          const proResponder = get().professionals[0];
          const newQuote: Quote = {
            id: `qte-${Math.random().toString(36).substr(2, 9)}`,
            requestId: newReq.id,
            responderId: proResponder.id,
            responderName: proResponder.name,
            responderAvatar: proResponder.avatarUrl,
            price: 'Rs. 4500 (All Inclusive)',
            deliveryDays: 2,
            details: 'I can fix all leaks and install the fittings. Material to be supplied by you or paid extra.',
            createdAt: new Date().toISOString(),
            status: 'pending'
          };
          set((state) => {
            const updatedReqs = state.quoteRequests.map(r => 
              r.id === newReq.id ? { ...r, status: 'quotes_received' as const } : r
            );
            return {
              quotes: [newQuote, ...state.quotes],
              quoteRequests: updatedReqs
            };
          });
        }, 5000);
      },

      createBooking: (proId, proName, reqId) => {
        const currentUser = get().user;
        if (!currentUser) return;

        const newBooking: Booking = {
          id: `bk-${Math.random().toString(36).substr(2, 9)}`,
          requestId: reqId,
          proId,
          proName,
          homeownerId: currentUser.id,
          feePaid: true,
          amount: 49,
          status: 'pending',
          milestones: [
            { title: 'Booking confirmed', completed: true, date: new Date().toLocaleDateString() },
            { title: 'Professional assigned', completed: true, date: new Date().toLocaleDateString() },
            { title: 'Work in progress', completed: false },
            { title: 'Payment settled & closed', completed: false }
          ],
          eta: 'Today, 4:00 PM'
        };

        set((state) => ({
          bookings: [newBooking, ...state.bookings]
        }));
      }
    }),
    {
      name: 'arcmart-pwa-state',
      partialize: (state) => ({
        user: state.user,
        isOnboarded: state.isOnboarded,
        quoteRequests: state.quoteRequests,
        quotes: state.quotes,
        bookings: state.bookings
      })
    }
  )
);
