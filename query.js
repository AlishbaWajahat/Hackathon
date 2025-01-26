import { createClient } from '@sanity/client';
import axios from 'axios';



const client = createClient({
    projectId: 'drajzv77', // Replace with your Sanity project ID
    dataset: 'production', // Replace with your dataset name
    apiVersion: '2021-08-31',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Replace with your Sanity API token
});


 export async function dataFetching() {
    try{
        const query=`
        *[_type=='product']{
        id,
        description,
        name,
        stockLevel,
        discountPercentage,
        price,
        isFeaturedProduct,
        category,
        "imagePath":imagePath.asset->url
        }
        `;
        const productsData=await client.fetch(query);
        return productsData
    }catch(error){
        console.log('Error fetching data from sanity',error.message);
        throw error

    }

}





