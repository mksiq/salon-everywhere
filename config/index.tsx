const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000'
  : 'https://main.d2q1k6v6pdmo53.amplifyapp.com/';
