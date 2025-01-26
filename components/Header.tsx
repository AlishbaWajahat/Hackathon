"use client"

import React from 'react';
import { BsPersonExclamation } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CartContext } from '@/app/context/context'
import { WishListContext } from '@/app/context/wishListcontext';
import { useContext } from 'react'
import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

function Header() {
    const obj = useContext(CartContext)
    const wislistobj=useContext(WishListContext)
    return (
        <>
            <div className='max-w-[3000px] h-[90px] font-poppin flex  justify-end '>
                <div className='flex sm:gap-32 gap-24 xl:gap-[200px] lg:mr-24 md:mr-16 mr-8'>
                    <div className='lg:w-[430px] xl:w-[500px] sm:w-[300px] sm:block hidden h-6 font-medium text-base xl:text-xl  self-center '>
                        <ul className='flex justify-between'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='flex sm:gap-8 gap-4  sm:ml-0'>
                        <div className='flex sm:gap-8 gap-4 self-center sm:text-2xl text-xl mt-2'>
                        <Link href={"/profile"}><BsPersonExclamation /></Link>
                        <RiSearchLine />
                        </div>

                        <div className=' flex h-[40px] sm:gap-4 gap-1 self-start sm:text-2xl text-xl mt-[22px]'>
                            <div className='  w-[50px] h-[40px] pt-4 relative'>
                                <div className='sm:w-6 sm:h-6 w-5 h-5 flex items-center justify-center rounded-full bg-red-900 text-white sm:text-sm text-xs absolute sm:top-0 top-1 sm:right-0 right-3 mb-6'>
                                    {wislistobj.wishList.length}
                                </div>
                                <Link href={"/wishlist"}><IoHeartOutline /></Link>
                            </div>

                            <div className='  w-[50px] h-[40px] pt-4 relative'>
                                <div className='sm:w-6 sm:h-6 w-5 h-5 flex items-center justify-center rounded-full bg-red-900 text-white sm:text-sm text-xs absolute sm:top-0 top-1 sm:right-0 right-3 mb-6'>
                                    {obj.cart.length}
                                </div>
                                <Link href={"/cart"}><IoCartOutline /></Link>
                            </div>
                        </div>



                    </div>
                    <div className='sm:hidden flex'><Sheet>
                        <SheetTrigger><GiHamburgerMenu className='text-2xl self-center' /></SheetTrigger>
                        <SheetContent className='h-3/4 bg-black text-white p-12 w-64'>
                            <ul>
                                <li className='mt-4'><a href="/">Home</a></li>
                                <li className='mt-4'><a href="/shop">Shop</a></li>
                                <li className='mt-4'><a href="">About</a></li>
                                <li className='mt-4'><a href="/contact">Contact</a></li>
                            </ul>


                        </SheetContent>



                    </Sheet></div>
                </div>

            </div>
        </>

    )
}

export default Header
