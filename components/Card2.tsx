import React from 'react'
import Image from "next/image";
type Propstype={
    ImageUrl:string,
    text:string

}

function Card2(props:Propstype){
  return (
    <>
    <div className=' w-[287px] flex flex-col font-poppin'>
        <div className='h-[200px] flex items-center justify-center'>
        <Image src={props.ImageUrl} alt="images" width={200} height={200} className='self-center'/>
        </div>
        <div className='mt-8'>
        <p className='text-base'>{props.text}</p>
        <p className='text-2xl font-medium'>Rs 25,000.00</p>
        </div>

    </div>

    </>

  )
}

export default Card2