
export interface LeadData {
  fullName: string;
  email: string;
  mobileNumber: string;
  messengerLink: string;
  referralCode?: string;
}

export interface Testimonial {
  id: number;
  image: string;
  name: string;
  text: string;
}

export type CountdownTime = {
    hours: number;
    minutes: number;
    seconds: number;
}
