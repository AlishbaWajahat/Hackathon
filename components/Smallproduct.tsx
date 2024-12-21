import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
type Propstype = {
    ImageUrl: string,
    id:number


}

export default function Smallproduct(props:Propstype) {
  return (
    <>
    <Link href={`/singleproduct/${props.id}`}><div className='w-[80px] h-[80px] relative bg-[#FFF9E5] rounded-xl flex items-center justify-center '><Image src={props.ImageUrl} alt='image' width={60} height={60}/></div></Link>
    </>

  )
}
