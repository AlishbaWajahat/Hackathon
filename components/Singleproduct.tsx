"use client"

import React from 'react';
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Smallproduct from './Smallproduct';
import { FaGreaterThan } from "react-icons/fa";
import Card2 from "@/components/Card2";
import Link from 'next/link';

import { useContext } from 'react';
import { CartContext } from '@/app/context/context';
import { product } from '@/types/types';


type Propstype = {
    ImageUrl: string,
    title: string,
    description: string,
    Cost:number,
    pro:{id:number,
        title:string,
        imageUrl: string,
        description:string,
        cost:number
    },


}
let data = [{
    id: 1,
    imageUrl: "/pic1(2nd sec).png",
    title: "Trenton modular sofa_3",
    cost:25000

},
{
    id: 2,
    imageUrl: "/pic2 (2nd sec).png",
    title: "Granite dining table with dining chair",
    cost:25000
}, {
    id: 3,
    imageUrl: "/pic3(2nd sec) (2).png",
    title: "Outdoor bar table and stool",
    cost:25000
}, {
    id: 4,
    imageUrl: "/pic4(2nd sec).png",
    title: "Plain console with teak mirror",
    cost:25000
},]
  



export default function Singleproduct(props: Propstype) {
    const obj=useContext(CartContext)
    console.log(obj)
    
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
            
            <div className=' max-w-[3000px] flex lg:gap-24 gap-8 justify-center font-poppin border-b-2 border-b-[#9F9F9F] pt-8 lg:px-24 sm:px-12 px-4 md:flex-nowrap flex-wrap lg:pb-0 pb-12'>
                <div className='flex lg:gap-8 gap-2'>
                    <div className=' h-[416px] hidden sm:flex flex-col gap-6'>
                        {data.map((item) => {
                            return (
                                <Smallproduct ImageUrl={item.imageUrl} id={item.id} />

                            )
                        })}

                    </div>
                    <div className='md:h-[600px] h-auto relative  flex items-center justify-center bg-[#FFF9E5] rounded-xl p-6'><Image src={props.ImageUrl} alt='image' width={500} height={400} /></div>
                </div>
                <div className='w-[600px] h-[850px] flex flex-col gap-6  '>
                    <div>
                        <h1 className='text-[42px]'>{props.title}</h1>
                        <p className='text-[#9F9F9F] text-2xl font-medium'>Rs-{props.Cost}</p>
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
                    <div className='flex gap-[20px] mb-8'>
                        <div className='w-[130px] h-[64px] flex justify-between p-4 items-center border-2 border-[#9F9F9F] rounded-xl'>
                            <div>-</div>
                            <p>1</p>
                            <div>+</div>
                        </div>
                        <button className='flex items-center justify-center text-[20px] px-12 border-2 width-[215px] h-[64px] border-black rounded-2xl' onClick={()=>obj.add(props.pro)}>Add To Cart</button>
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
            
            {/* 4th section */}
            <div className="font-poppin flex flex-col items-center py-10 lg:mt-14 mt-4 max-w-[3000px]">
                <h1 className="text-4xl font-medium text-center">Related Products</h1>
                <div className="flex gap-6 justify-center w-full flex-wrap  py-6  mt-8 md:mt-14">
                    {data.map((pro) => {
                        return (
                            <Card2 id={pro.id} imageUrl={pro.imageUrl} text={pro.title} Cost={props.Cost} />
                        )
                    })}

                </div>
                <Link href={"/shop"}><p className="text-[20px] underline underline-offset-[16px] font-medium mt-6 md:mt-8">View More</p></Link>
            </div>

           

        </>
        

    )
}

