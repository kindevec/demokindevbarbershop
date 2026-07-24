export interface Service {
  id: string;
  name: string;
  category: 'cortes' | 'barba' | 'combos' | 'tratamientos';
  description: string;
  durationMin: number;
  price: number;
  popular?: boolean;
}

export interface Barber {
  id: string;
  name: string;
  nickname: string;
  role: string;
  specialty: string;
  experienceYears: number;
  instagram: string;
  rating: number;
  reviewCount: number;
  bio: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  clientName: string;
  rating: number;
  date: string;
  comment: string;
  barberName: string;
  serviceName: string;
}

export interface BookingState {
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  notes: string;
}
