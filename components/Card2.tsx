"use client"
import Image from "next/image";
import Link from 'next/link';
import { BsCart2 } from "react-icons/bs";

import { useContext } from 'react'
import { CartContext } from '@/app/context/context';
import { product } from "@/types/types";
import { useToast } from "@/hooks/use-toast"

type Propstype = {
  imageUrl: string,
  text: string,
  id: string,
  Cost: number,
  Product?: { id: string, name: string, imagePath: string, description?: string, price: number }

}

function Card2(props: Propstype) {
  const obj = useContext(CartContext)
  const { toast } = useToast()

  return (
    <>

      <div className=' w-[320px] p-2 flex flex-col font-poppin relative '>
        <Link href={`/singleproduct/${props.id}`}>
          <div className='h-[300px] w-[300px] flex items-center justify-center relative'>
            <Image src={props.imageUrl} alt="images" fill className='self-center' />
          </div>
          <div className='mt-8'>
            <p className='text-base'>{props.text}</p>
            <p className='text-2xl font-medium'>${props.Cost}</p>
          </div>

        </Link>
        <div>
          <BsCart2 className='text-2xl absolute right-16 cursor-pointer' onClick={() => {
            toast({
              description: `${props.text} Added to cart`,
            })
              ; obj.handleAddtoCart(props.Product)
          }} />

        </div>

      </div>

    </>

  )
}

export default Card2