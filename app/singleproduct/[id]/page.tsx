
import Header from '@/components/Header';
import Singleproduct from '@/components/Singleproduct'
import { product } from '@/types/types';

import React, { useState } from 'react'





export default async function Page({ params }: { params: { id: string } }) {

    const fetching=await fetch("http://localhost:3000/api/book")
    const data=await fetching.json()
    const selectedProduct = data.find(
        (product:product) => product.id === Number(params.id)
    );

    if (!selectedProduct) {
        return <div>Product not found</div>; // Handle the case when no product is found
    }

    return (
        <>
            <Header />
            <Singleproduct
                ImageUrl={selectedProduct.imageUrl}
                title={selectedProduct.title}
                description={selectedProduct.description}
                Cost={selectedProduct.cost}
                pro={selectedProduct}
            />
        </>
    );
}
