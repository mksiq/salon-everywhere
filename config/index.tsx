/**
 * this file is not being used as it is being hosted on amplify as a static site there is no point in serving it by the api
 */
const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000'
  : 'https://salon-everywhere.vercel.app';
