import React from 'react';
import Image from "next/image";
import Link from 'next/link';

type Propstype={
    ImageUrl:string,
    width:number,
    height:number
}

function Card1(props:Propstype){
  return (
    <>
    <div className='w-[500px] h-auto font-poppin flex flex-col'>
        <div> <Image src={props.ImageUrl} alt='Images' width={props.width} height={props.height} className='self-end'/></div>
        <p className='md:text-4xl sm:text-3xl text-2xl font-medium mt-4'>Side table</p>
        <Link href={"/shop"}><p className='md:text-2xl sm:text-xl text-lg underline underline-offset-[16px] font-medium mt-6'>View More</p></Link>
    </div>
    </>

  )
}

export default Card1
