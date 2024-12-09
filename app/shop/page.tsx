import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import React from 'react'
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import Card2 from "@/components/Card2";
import PreFooter from '@/components/PreFooter';

function page() {
    return (
        <>
            <Header />
            <Hero text='Shop' />

            {/* 1 sec */}
            <div className='max-w-[1800px] h-[100px] bg-[#FAF4F4] mt-8 font-poppin flex items-center lg:text-xl text-base'>
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
            <div className='flex max-w-[1800px] items-center justify-center flex-col pt-12 md:pt-16  font-poppin'>
                <div className='flex gap-8 flex-wrap w-[90%] justify-center'>
                <Card2 ImageUrl="/pic1(2nd sec).png" text="Trenton modular sofa_3" />
                <Card2 ImageUrl="/pic2 (2nd sec).png" text="Granite dining table with dining chair" />
                <Card2 ImageUrl="/pic3(2nd sec) (2).png" text="Outdoor bar table and stool" />
                <Card2 ImageUrl="/pic4(2nd sec).png" text="plain console with teak mirror" />
                <Card2 ImageUrl="/shop5.png" text="Trenton modular sofa_3" />
                <Card2 ImageUrl="/shop6.png" text="Granite dining table with dining chair" />
                <Card2 ImageUrl="/shop7.png" text="Outdoor bar table and stool" />
                <Card2 ImageUrl="/shop8.png" text="plain console with teak mirror" />
                <Card2 ImageUrl="/shop9.png" text="Trenton modular sofa_3" />
                <Card2 ImageUrl="/shop10.png" text="Granite dining table with dining chair" />
                <Card2 ImageUrl="/shop11.png" text="Outdoor bar table and stool" />
                <Card2 ImageUrl="/shop12.png" text="plain console with teak mirror" />
                <Card2 ImageUrl="/pic1(Home).png" text="Trenton modular sofa_3" />
                <Card2 ImageUrl="/section3.png" text="Granite dining table with dining chair" />
                <Card2 ImageUrl="/shop15.png" text="Outdoor bar table and stool" />
                <Card2 ImageUrl="/shop16.png" text="plain console with teak mirror" />
                </div>
                <div className=' h-[60px] flex sm:gap-8 gap-4  text-xl sm:mb-16 mb-12 sm:mt-24 mt-12'>
                    <div className='p-4 sm:p-6 flex justify-center items-center lg:hover:bg-[#FBEBB5] bg-[#FBEBB5]'>1</div>
                    <div className='p-4 sm:p-6 flex justify-center items-center lg:hover:bg-[#FBEBB5] bg-[#FFF9E5]'>2</div>
                    <div className='p-4 sm:p-6 flex justify-center items-center lg:hover:bg-[#FBEBB5] bg-[#FFF9E5]'>3</div>
                    <div className='p-4 sm:p-6 font-light flex justify-center items-center lg:hover:bg-[#FBEBB5] bg-[#FFF9E5]'>Next</div>
                </div>

            </div>

            {/* 3rd section */}
            <PreFooter/>
            
            


        </>

    )

}

export default page
