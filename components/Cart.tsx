"use client"
import React from 'react'
import { CartContext } from '@/app/context/context'
import { useContext,useState,useEffect } from 'react'
import { product } from '@/types/types'
import Image from "next/image";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Cart() {
  const obj = useContext(CartContext)
      const [isLoading, setIsLoading] = useState(true); // Default to true since loading starts immediately.
          useEffect(() => {
              // Simulate an API call with a delay
              setTimeout(() => {
                  setIsLoading(false); // Set loading to false once data is fetched.
              }, 1000); // Simulated 2-second delay.
          }, []);
  return (
    <>
      <div className='max-w-[3000px] font-poppin '>
        <div className='flex xl:m-16 sm:my-16 my-8 sm:mx-4 mx-[2px] sm:px-4 px-[4px] gap-8 justify-center lg:flex-nowrap flex-wrap'>
          <div className='2xl:w-[60%] lg:w-[70%] w-[100%] h-auto sm:py-8 lg:py-0  '>
            <div className='w-full table-auto flex flex-col sm:gap-8 gap-4'>
              <div className='bg-[#FFF9E5] w-full  h-[70px] items-center flex xl:gap-12 sm:gap-6 gap-2 xl:pr-12 pr-0 lg:text-lg sm:text-md text-sm text-center'>
                <div className='w-[150px]'></div>
                <div className='w-[200px]'>Product</div>
                <div className='w-[200px]'>Price</div>
                <div className='w-[200px]'>Quantity</div>
                <div className='w-[200px]'>Subtotal</div>
              </div>
              {
                isLoading?<p className='text-center text-xl'>Loading cart...</p>:
              obj.cart.length > 0 ? obj.cart.map((item: product) => {
                return (
                  <div className='w-full sm:h-[150px] h-[100px] flex items-center xl:gap-12 sm:gap-6 gap-2 text-center xl:pr-12 pr-0 lg:text-base text-xs relative'>
                    <RiDeleteBin5Line className='absolute top-1 right-4 md:text-2xl text-lg cursor-pointer'onClick={()=>obj.handleDeleteItem(item.id)} />

                    <div className='flex justify-center items-center lg:w-[150px] lg:h-[150px] rounded-lg p-2'><Image src={item.imagePath} alt='image' width={150} height={150} />
                    </div>
                    <div className='text-[#9F9F9F] w-[200px]'>{item.name}</div>
                    <div className='text-[#9F9F9F] w-[200px]'>Rs-{item.price}</div>
                    <div className='w-[200px] flex justify-center items-center'>
                      <div className='sm:w-[70px] w-[50px] border-2 border-[#9F9F9F] px-[4px] gap-2 flex justify-center items-center rounded-lg'>
                      <div onClick={()=>obj.handleUpdateQuantity(item.id,+1)} className='cursor-pointer sm:text-xl text-md'>+</div>
                      {item.quantity}
                      <div onClick={()=>obj.handleUpdateQuantity(item.id,-1)} className='cursor-pointer sm:text-xl text-md'>-</div>
                      </div>
                      </div>

                    <div className='w-[200px]'>{item.price*item.quantity}</div>

                  </div>
                )
              }) : <div className='text-red-500 text-xl ml-8'>Cart is empty!</div>}


            </div>
          </div>


          <div className='xl:w-[20%] lg:w-[30%] w-[70%] lg:h-[390px] h-[350px]  bg-[#FFF9E5] sm:px-16 px-8 pt-8 gap-12 flex flex-col items-center '>
            <h1 className='sm:text-3xl text-2xl font-semibold mb-6'>Cart Totals</h1>
            <div className='flex gap-8 items-center'>
              <h1 className='text-base font-medium'>Total</h1>
              <p className='text-xl font-medium text-[#B88E2F]'>{obj.total}</p>
            </div>
            <div className='text-xl sm:w-[220px] w-[150px] h-[60px] flex justify-center items-center border-2 border-black rounded-xl py-3'>Check Out</div>
          </div>



        </div>

      </div>


    </>

  )
}
