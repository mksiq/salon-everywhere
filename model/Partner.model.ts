export default class Partner {
  name: string = '';
  tag: string = '';
  location?: {
    neighborhood?: string;
    city?: string;
    provinceState?: string;
    country?: string;
  };
  roles: Array<string> = [];
  skills: Array<string> = [];
  description: string = '';
  portfolio: Array<any> = [];
  inspiration: string = '';
  businesses: Array<any> = [];
}
