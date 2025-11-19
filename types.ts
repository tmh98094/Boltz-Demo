export interface NavItem {
  label: string;
  href: string;
}

export interface Step {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
}

export interface Partner {
  name: string;
  category: string;
}