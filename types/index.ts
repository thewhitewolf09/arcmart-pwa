export type UserRole = 'homeowner' | 'supplier' | 'professional' | 'consultant';

export interface LocationData {
  latitude: number;
  longitude: number;
  address: string;
}

export interface UserProfile {
  id: string;
  phone: string;
  role: UserRole | null;
  name?: string;
  email?: string;
  location?: LocationData;
  avatarUrl?: string;
  isVerified?: boolean;
  profileCompleteness?: number; // 0 to 100
  isSuspended?: boolean;
  createdAt: string;
}

export interface SupplierDetail {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewsCount: number;
  priceRange: string; // e.g. "Rs. 200 - 1500 / sq ft"
  address: string;
  distance: string; // e.g. "1.2 km"
  phone: string;
  description: string;
  images: string[];
  isVerified: boolean;
  responseStreak: number; // gamification
  responseTime: string; // e.g. "~15 mins"
}

export interface ProfessionalDetail {
  id: string;
  name: string;
  category: string; // e.g. "plumber", "electrician"
  rating: number;
  reviewsCount: number;
  experienceYears: number;
  completedProjects: number;
  phone: string;
  distance: string;
  responseTime: string;
  isVerified: boolean;
  hourlyRate: string; // e.g. "Rs. 250/hr"
  avatarUrl: string;
  specialization: string[];
  reviews: Review[];
  portfolio: string[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface QuoteRequest {
  id: string;
  homeownerId: string;
  category: string;
  title: string;
  description: string;
  elementSelected?: string; // e.g., "Tiles", "Kitchen Fittings"
  status: 'pending' | 'quotes_received' | 'completed';
  createdAt: string;
}

export interface Quote {
  id: string;
  requestId: string;
  responderId: string; // supplier or professional ID
  responderName: string;
  responderAvatar?: string;
  price: string;
  deliveryDays: number;
  details: string;
  createdAt: string;
  status: 'pending' | 'accepted' | 'declined';
}

export interface Booking {
  id: string;
  requestId: string;
  proId: string;
  proName: string;
  homeownerId: string;
  feePaid: boolean;
  amount: number;
  status: 'pending' | 'ongoing' | 'completed';
  milestones: { title: string; completed: boolean; date?: string }[];
  eta: string;
}
