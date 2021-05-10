export default interface Partner {
  _id: number;
  id: string;
  name: string;
  tag: string;
  location: {
    address: string;
    neighborhood?: string;
    city?: string;
    provinceState?: string;
    country?: string;
  };
  roles: Array<string>;
  description: string;
  skills: Array<string>;
  portfolio: Array<{ id: number; type: string; images: Array<string> }>;
  inspiration: string;
  businesses: Array<{
    role: string;
    name: string;
    businessType: string;
    address: string;
    image: string;
    items: Array<{ image: string; title: string }>;
  }>;
}
