import { createClient } from 'next-sanity'



import  dotenv  from 'dotenv';
dotenv.config()
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: 'production', 
  apiVersion: '2021-08-31',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, 
});
