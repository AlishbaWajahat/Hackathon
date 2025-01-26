"use client"

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Smallproduct from './Smallproduct';
import { FaGreaterThan } from "react-icons/fa";
import Card2 from "@/components/Card2";
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay"
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useToast } from "@/hooks/use-toast"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { useContext } from 'react';
import { CartContext } from '@/app/context/context';
import { WishListContext } from '@/app/context/wishListcontext';
import { product } from '@/types/types';
import { client } from '@/sanity/lib/client';


type Propstype = {
    ImageUrl: string,
    title: string,
    description: string,
    Cost: number,
    prod: {
        id: string,
        name: string,
        imagePath: string,
        description: string,
        price: number
    },



}
let data = [{
    id: "1",
    imageUrl: "/pic1(2nd sec).png",
    title: "Trenton modular sofa_3",
    cost: 25000

},
{
    id: "2",
    imageUrl: "/pic2 (2nd sec).png",
    title: "Granite dining table with dining chair",
    cost: 25000
}, {
    id: "3",
    imageUrl: "/pic3(2nd sec) (2).png",
    title: "Outdoor bar table and stool",
    cost: 25000
}, {
    id: "4",
    imageUrl: "/pic4(2nd sec).png",
    title: "Plain console with teak mirror",
    cost: 25000
},]



export default function Singleproduct(props: Propstype) {
    const { toast } = useToast()
    const obj = useContext(CartContext)
    const wishlistobj = useContext(WishListContext)
    const [RelatedProducts, setRelatedProducts] = useState<product[]>([])
    const [Allproducts, setAllproducts] = useState<product[]>([])
    const [selectedProduct, setselectedProduct] = useState<product | null>(null)
    function heart() {
        if (wishlistobj.toggleHeartIcon === false) {
            wishlistobj.handleAddtoWishList(props.prod)
            toast({
                description: `${props.prod.name} Added to wishlist`,
            })
            wishlistobj.settoggleHeartIcon(true)

        }
        else {
            wishlistobj.handleDeleteFromWishList(props.prod.id)
            toast({
                description: `${props.prod.name} removed from wishlist`,
            })
            wishlistobj.settoggleHeartIcon(false)

        }
    }

    useEffect(() => {
        const isInWishlist = wishlistobj.wishList.some((item: product) => item.id === props.prod.id);
        // Update heart state immediately for user feedback
        wishlistobj.settoggleHeartIcon(isInWishlist);
    }, [wishlistobj.wishList]);

    useEffect(() => {
        const fetchSelectedProducts = async () => {
            if (!props.prod?.id) {
                console.error("Product ID is undefined");
                return;
            }

            const query = `*[_type == 'product' && id == $id][0] {
                id,
                description,
                name,
                stockLevel,
                discountPercentage,
                price,
                isFeaturedProduct,
                category,
                "imagePath": imagePath.asset->url
            }`;

            try {
                const Rdata = await client.fetch(query, { id: props.prod.id }); // Using parameterized query
                setselectedProduct(Rdata);
            } catch (error) {
                console.error("Error fetching Related Products:", error);
            }
        };

        fetchSelectedProducts(); // Call fetch function to load products when the component mounts
    }, [props.prod?.id]); // Add dependencies

    useEffect(() => {
        const Allproducts = async () => {
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
            try {
                const data = await client.fetch(query);
                setAllproducts(data)

            } catch (error) {
                console.log("Error fetching all dataa:", error)

            }

        }
        Allproducts()
    }, [])
    useEffect(() => {
        if (!Allproducts || !selectedProduct) {
            return;
        }
        const filteredProducts = Allproducts.filter(item =>
            item.category === selectedProduct?.category && item.id !== selectedProduct.id
        )
        setRelatedProducts(filteredProducts)
    }, [Allproducts, selectedProduct])

    return (
        <>
            {/* 1st section */}
            <div className='max-w-[3000px] h-[100px] sm:text-base text-[10px] font-poppin flex gap-4 items-center sm:pl-24 pl-8 mt-2'>
                <div className='flex gap-4 items-center'>
                    <p className='text-[#9F9F9F]'>Home</p>
                    <FaGreaterThan />
                </div>
                <div className='flex gap-4 items-center'>
                    <p className='text-[#9F9F9F]'>Shop</p>
                    <FaGreaterThan />
                </div>
                <div className='border-l-2 border-l-[#9F9F9F] pl-4 pt-2 mb-2 '>{props.title}</div>


            </div>
            {/* 2nd section */}

            <div className=' max-w-[3000px] flex xl:gap-24 gap-8 justify-center font-poppin border-b-2 border-b-[#9F9F9F] pt-8 md:px-6 xl-px-24 sm:px-12 px-4 md:flex-nowrap flex-wrap lg:pb-0 pb-24  xl:mt-12'>
                <div className='flex lg:gap-8 gap-2 '>
                    <div className=' h-[416px] hidden sm:flex flex-col gap-6'>
                        {data.map((item) => {
                            return (
                                <Smallproduct ImageUrl={item.imageUrl} id={item.id} />

                            )
                        })}

                    </div>
                    <div className=' md:h-[600px] h-auto relative  flex items-center justify-center rounded-xl'><Image src={props.ImageUrl} alt='image' width={500} height={500} /></div>
                </div>
                <div className='w-[600px] h-[850px] flex flex-col gap-6   '>
                    <div>
                        <h1 className='sm:text-[42px] text-2xl'>{props.title}</h1>
                        <p className='text-[#9F9F9F] sm:text-2xl text-xl font-medium'>Rs-{props.Cost}</p>
                    </div>

                    <div className='flex gap-4'>
                        <div className='text-[20px] flex gap-2'>
                            <FaStar className='text-[#FFDA5B]' />
                            <FaStar className='text-[#FFDA5B]' />
                            <FaStar className='text-[#FFDA5B]' />
                            <FaStar className='text-[#FFDA5B]' />
                            <FaStar className='text-[#FFDA5B]' />
                        </div>
                        <div className='text-[13px] text-[#9F9F9F] border-l-2 border-l-[#9F9F9F] pl-4'>5 Customer Review</div>
                    </div>
                    <p className='text-xs'>{props.description}
                    </p>
                    <h3 className='text-[#9F9F9F] text-[14px]'>Size</h3>
                    <div className='flex gap-4 text-xs'>
                        <div className='w-[30px] h-[30px] bg-[#FBEBB5] items-center flex justify-center rounded-sm'>L</div>
                        <div className='w-[30px] h-[30px] bg-[#FAF4F4] items-center flex justify-center rounded-sm'>XL</div>
                        <div className='w-[30px] h-[30px] bg-[#FAF4F4] items-center flex justify-center rounded-sm'>XS</div>
                    </div>
                    <h3 className='text-[#9F9F9F] text-[14px]'>Color</h3>
                    <div className='flex gap-4'>
                        <div className='rounded-full w-[30px] h-[30px] bg-[#816DFA]'></div>
                        <div className='rounded-full w-[30px] h-[30px] bg-[#000000]'></div>
                        <div className='rounded-full w-[30px] h-[30px] bg-[#CDBA7B]'></div>
                    </div>
                    <div className='flex gap-[20px] mb-8 items-center'>
                        <div className='sm:w-[130px] sm:h-[64px] flex justify-between sm:p-4 p-2 gap-4 items-center border-2 border-[#9F9F9F] rounded-xl'>
                            <div>-</div>
                            <p>1</p>
                            <div>+</div>
                        </div>
                        <button
                            className='flex items-center justify-center whitespace-nowrap sm:text-[20px] text-xs p-2 sm:px-8 bg-gray-800 text-white hover:bg-gray-700 sm:w-[215px] w-[120px] sm:h-[64px]  rounded-2xl'
                            onClick={() => obj.handleAddtoCart(props.prod)}
                        >
                            Add to Cart
                        </button>


                        {wishlistobj.toggleHeartIcon ? (
                            <IoHeart className="sm:text-5xl text-3xl text-red-900 cursor-pointer" onClick={heart} />
                        ) : (
                            <IoHeartOutline className="sm:text-5xl text-3xl cursor-pointer" onClick={heart} />
                        )}

                    </div>

                    <div className='h-[730px] text-base text-[#9F9F9F] flex gap-4 border-t-2 border-t-[#9F9F9F] pt-12'>
                        <div className='flex flex-col gap-4'>
                            <p>SKU</p>
                            <p>Category</p>
                            <p>Tags</p>
                            <p>Share</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                            <p>:</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p>SS001</p>
                            <p>Sofas</p>
                            <p>Sofa, Chair, Home, Shop</p>
                            <div className='flex gap-6 text-black text-2xl'>
                                <FaFacebook />
                                <FaLinkedin />
                                <AiFillTwitterCircle />

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 4th section  : Related products*/}
            <div className="font-poppin flex flex-col items-center py-10 lg:mt-14 mt-4 max-w-[3000px]">
                <h1 className="text-4xl font-medium text-center">Related Products</h1>
                <div className=" mx-auto mt-8 md:mt-14">

                    <Carousel
                        plugins={[Autoplay({ delay: 2000 })]}

                        opts={{
                            align: "start",
                        }}
                        className="lg:w-[1000px] md:w-[700px] w-[300px] sm:w-[350px]  "
                    >
                        <CarouselContent>
                            {RelatedProducts ? (
                                RelatedProducts.map((pro, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                        <div className="h-[450px]">
                                            <Card2
                                                id={pro.id}
                                                imageUrl={pro.imagePath}
                                                text={pro.name}
                                                Cost={pro.price} // Assuming `pro.price` holds the correct value
                                                Product={pro} // Pass the product directly
                                            />
                                        </div>
                                    </CarouselItem>
                                ))) : (
                                <p>No related products found</p>
                            )}
                        </CarouselContent>
                    </Carousel>
                </div>


                <Link href={"/shop"}><p className="text-[20px] underline underline-offset-[16px] font-medium mt-6 md:mt-8">View More</p></Link>
            </div >



        </>


    )
}

