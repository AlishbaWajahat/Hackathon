"use client"
import Image from "next/image";
import Link from 'next/link';
import { BsCart2 } from "react-icons/bs";

import { useContext } from 'react'
import { CartContext } from '@/app/context/context';
import { product } from "@/types/types";

type Propstype={
    imageUrl:string,
    text:string,
    id:number,
    Cost:number,
    Product?:{id:number,title:string,imageUrl:string,description?:string,cost:number}
    
}

function Card2(props:Propstype){
   const obj = useContext(CartContext)

  return (
    <>
    
    <div className=' w-[287px] flex flex-col font-poppin relative'>
    <Link href={`/singleproduct/${props.id}`}>
        <div className='h-[200px] flex items-center justify-center'>
        <Image src={props.imageUrl} alt="images" width={200} height={200} className='self-center'/>
        </div>
        <div className='mt-8'>
        <p className='text-base'>{props.text}</p>
        <p className='text-2xl font-medium'>Rs-{props.Cost}</p>
        </div>
 
        </Link>
        <div>
        <BsCart2 className='text-2xl absolute right-12 cursor-pointer'onClick={()=>obj.add(props.Product)} />
        </div>
        
    </div>
    
    </>

  )
}

export default Card2