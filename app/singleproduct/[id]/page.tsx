
import Header from '@/components/Header';
import Singleproduct from '@/components/Singleproduct'
import { product } from '@/types/types';

import React, { useState } from 'react'
import {dataFetching} from "@/query"






export default async function Page({ params }: { params: { id: string } }) {

    const data=await dataFetching()
    // console.log(data)

    const selectedProduct = data.find(
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
