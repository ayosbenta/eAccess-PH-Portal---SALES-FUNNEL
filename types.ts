
// FIX: Added missing LeadData interface. This was causing an import error in context/FunnelContext.tsx.
export interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface Testimonial {
  id: number;
  image: string;
  name: string;
  business: string;
  text: string;
}

export type CountdownTime = {
    hours: number;
    minutes: number;
    seconds: number;
}