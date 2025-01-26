import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId,token } from '../env'


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2021-08-31',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Replace with your Sanity API token
});
