import { createClient } from '@sanity/client';
import dotenv from "dotenv"
dotenv.config()

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-08-31', // Replace with your dataset name
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Replace with your Sanity API token
});


export default client;
