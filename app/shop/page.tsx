import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import React from 'react'
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";
import Card2 from "@/components/Card2";
import PreFooter from '@/components/PreFooter';
import Link from 'next/link';

let products=[{
    id:1,
    title:"Trenton modular sofa_3",
    ImageUrl:"/pic1(2nd sec).png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},
{
    id:2,
    title:"Granite dining table with dining chair",
    ImageUrl:"/pic2 (2nd sec).png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:3,
    title:"Outdoor bar table and stool",
    ImageUrl:"/pic3(2nd sec) (2).png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:4,
    title:"Plain console with teak mirror",
    ImageUrl:"/pic4(2nd sec).png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:5,
    title:"Grain coffee table",
    ImageUrl:"/shop5.png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:6,
    title:"Kent coffee table",
    ImageUrl:"/shop6.png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:7,
    title:"Round coffee table_color 2",
    ImageUrl:"/shop7.png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:8,
    title:"Round coffee table_color 2",
    ImageUrl:"/shop8.png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:9,
    title:"Plain console_",
    ImageUrl:"/shop9.png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:10,
    title:"Reclaimed teak Sideboard",
    ImageUrl:"/shop10.png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:11,
    title:"SJP_0825 ",
    ImageUrl:"/shop11.png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:12,
    title:"Bella chair and table",
    ImageUrl:"/shop12.png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:13,
    title:"Granite square side table",
    ImageUrl:"/pic1(Home).png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:14,
    title:"Asgaard sofa",
    ImageUrl:"/section3.png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:15,
    title:"Maya sofa three seater",
    ImageUrl:"/shop15.png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},{
    id:16,
    title:"Outdoor sofa set",
    ImageUrl:"/shop16.png",
    description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound"
},]

function page() {
    return (
        <>
            <Header />
            <Hero text='Shop' />

            {/* 1 sec */}
            <div className='max-w-[2000px] h-[100px] bg-[#FAF4F4] mt-8 font-poppin flex items-center lg:text-xl text-base'>
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
            <div className='flex max-w-[2000px] items-center justify-center flex-col pt-12 md:pt-16  font-poppin'>
                <div className='flex gap-8 flex-wrap w-[90%] justify-center'>
                    {products.map((product)=>{
                        return(<Card2 key={product.id} ImageUrl={product.ImageUrl} text={product.title} id={product.id}/>)

                    })}

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
