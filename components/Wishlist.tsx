
'use client'

import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '@/app/context/context';
import { WishListContext } from '@/app/context/wishListcontext';
import { product } from '@/types/types';
import { RiDeleteBin5Line } from "react-icons/ri";
import Image from 'next/image';
import { useToast } from "@/hooks/use-toast"

export default function Wishlist() {
    const wislistobj = useContext(WishListContext)
    const cartobj = useContext(CartContext)
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(true); // Default to true since loading starts immediately.
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false); // Set loading to false once data is fetched.
        }, 1000); // Simulated 1-second delay.
    }, []);
    return (

        <>
            <div className='max-w-[3000px] 2xl:mx-[300px] lg:mx-[100px] sm:mx-[50px] mx-[10px]  flex flex-col gap-12 md:mt-32 sm:mt-24 mt-12'>

                {isLoading ? (
                    <p className='text-center text-xl'>Loading wishlist...</p>
                ) : wislistobj.wishList && wislistobj.wishList.length > 0 ? (
                    wislistobj.wishList.map((item: product) => (
                        <div
                            key={item.id}
                            className="flex font-poppin sm:gap-12 lg:gap-32 gap-3 items-center bg-[#FFF9E5] rounded-md md:p-4 p-2  "
                        >
                            <div className="md:w-[300px] md:h-[250px] sm:w-[250px] sm:h-[150px] w-[100px] h-[70px] relative">
                                <Image src={item.imagePath} alt="image" fill />
                            </div>
                            <div className="flex flex-col sm:gap-4 gap-2 justify-center p-4  ">
                                <h1 className="md:text-3xl sm:text-2xl text-md font-bold">{item.name}</h1>
                                <p className="md:text-xl sm:text-lg text-xs text-gray-500">{item.description}</p>
                                <div className="flex gap-2">
                                    <p className="md:text-2xl sm:text-xl text-sm">price -</p>
                                    <div className="text-[#B88E2F] md:text-2xl sm:text-xl text-sm">${item.price}</div>
                                </div>
                                <div className="flex sm:gap-8 gap-4 items-center">
                                    <button
                                        className="sm:p-3 p-2 bg-red-900 text-white font-medium md:w-[170px] sm:w-[130px] w-[90px] md:text-xl sm:text-md text-xs rounded-md hover:bg-red-700"
                                        onClick={() => {
                                            cartobj.handleAddtoCart(item);
                                            toast({
                                                description: `${item.name} Added to cart`,
                                            });
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                    <RiDeleteBin5Line
                                        className="sm:text-2xl text-lg"
                                        onClick={() => {
                                            wislistobj.handleDeleteFromWishList(item.id);
                                            toast({
                                                description: `${item.name} removed from wishlist`,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-xl text-red-500 font-medium'>Wishlist is empty</p>
                )}


            </div>


        </>

    )
}
