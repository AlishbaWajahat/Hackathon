import React from 'react';
import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

type Propstype = {
    ImageUrl: string,
}


function Card3(props: Propstype) {
    return (
        <div className=' flex flex-col items-center '>
            <div><Image src={props.ImageUrl} alt='images' width={350} height={350} /></div>
            <p className='text-lg mt-4 text-center'>Going all-in with millennial design</p>
            <p className='md:text-xl text-lg  underline underline-offset-[12px] font-medium mt-2'>Read More</p>
            <div className='text-sm flex gap-2 mt-4'>
                <div className='flex gap-2 items-center'>
                    <FaRegClock />
                    <p >5 min</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <SlCalender />
                    <p>12th Oct 2022</p>
                </div>

            </div>

        </div>
    )
}

export default Card3
