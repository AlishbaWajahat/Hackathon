'use client'
import Header from '@/components/Header';
import Singleproduct from '@/components/Singleproduct'
import { product } from '@/types/types';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';









export default async function Page({ params }: { params: { id: string } }) {
        // state variable to store fetched data from sanity
        const [products, setProducts] = useState<product[] | undefined>(undefined);
            // GROQ query to fetch data
            const query = `
              *[_type=='product']{
                id,
                description,
                name,
                stockLevel,
                discountPercentage,
                price,
                isFeaturedProduct,
                category,
                "imagePath": imagePath.asset->url
              }
            `;
        
            // fetching data from sanity 
            useEffect(() => {
                const fetchProducts = async () => {
                    try {
                        const data = await client.fetch(query);
                        setProducts(data);  // Set products initially
                    } catch (error) {
                        console.error("Error fetching products:", error);
                    }
                };
        
                fetchProducts(); // Call fetch function to load products when the component mounts
            }, []);

   

    const selectedProduct = products?.find(
        (product: product) => product.id === params.id
    );

    if (!selectedProduct) {
        return <div>Product not found</div>; // Handle the case when no product is found
    }

    return (
        <>
            <Header />
            <Singleproduct
                ImageUrl={selectedProduct.imagePath}
                title={selectedProduct.name}
                description={selectedProduct.description}
                Cost={selectedProduct.price}
                prod={selectedProduct}
            />
        </>
    );
}
