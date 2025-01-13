import React from 'react'
import Card2 from './Card2'
import { product } from '@/types/types'


export default async function Shop() {
    const fetching=await fetch("http://localhost:3000/api/book")
    const data=await fetching.json()
    return (
        <>
            <div className='flex max-w-[3000px] items-center justify-center flex-col pt-12 md:pt-16  font-poppin'>
                <div className='flex gap-8 flex-wrap w-[90%] justify-center'>
                    {data.map((product:product) => {
                        return (<Card2 key={product.id} imageUrl={product.imageUrl} text={product.title} id={product.id} Product={product} Cost={product.cost}/>)

                    })}
                </div>
                <div className=' h-[60px] flex sm:gap-8 gap-4  text-xl sm:mb-16 mb-12 sm:mt-24 mt-12'>
                    <div className='p-4 sm:p-6 flex justify-center items-center lg:hover:bg-[#FBEBB5] bg-[#FBEBB5]'>1</div>
                    <div className='p-4 sm:p-6 flex justify-center items-center lg:hover:bg-[#FBEBB5] bg-[#FFF9E5]'>2</div>
                    <div className='p-4 sm:p-6 flex justify-center items-center lg:hover:bg-[#FBEBB5] bg-[#FFF9E5]'>3</div>
                    <div className='p-4 sm:p-6 font-light flex justify-center items-center lg:hover:bg-[#FBEBB5] bg-[#FFF9E5]'>Next</div>
                </div>

            </div>
        </>

    )
}
