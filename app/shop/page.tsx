
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import React from 'react'
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import Card2 from "@/components/Card2";
import PreFooter from '@/components/PreFooter';
import Link from 'next/link';
import CartProvider from '../context/provider';
import Shop from '@/components/Shop';




function page() {

    return (
        <>

            <Header />
            <Hero text='Shop' />

            {/* 1 sec */}
            <div className='max-w-[3000px] h-[100px] bg-[#FAF4F4] mt-8 font-poppin flex items-center lg:text-xl text-base'>
                <div className='h-[55px]  w-full sm:justify-around justify-center flex sm:px-4 sm:gap-6'>
                    <div className='flex gap-6 items-center sm:px-0 px-2'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-[16px] h-[16px] relative'>
                                <Image src={"/Vector.png"} alt='filter' fill />
                            </div>
                            <p>Filter</p>
                        </div>
                        <HiViewGrid />
                        <BsViewList />
                        <div className='lg:text-base text-xs pl-6 border-l-2 border-[#9F9F9F]'>Showing 1-16 of 32 results</div>
                    </div>
                    <div className='sm:flex gap-6 hidden'>
                        <div className='flex gap-3 items-center'>
                            <p>Show</p>
                            <div className='w-[55px] h-[50px] bg-white flex items-center justify-center text-[#9F9F9F]'>16</div>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <p>Short by</p>
                            <div className='md:w-[180px] w-[80px] h-[50px] bg-white flex items-center md:pl-8 pl-2 text-[#9F9F9F]'>Default</div>
                        </div>

                    </div>
                </div>

            </div>

            {/* 2nd sec */}
            <CartProvider>
                <Shop/>

            </CartProvider>

            {/* 3rd section */ }
            < PreFooter />




        </>

    )

}


export default page
