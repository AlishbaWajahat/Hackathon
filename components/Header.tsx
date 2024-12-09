import React from 'react';
import { BsPersonExclamation } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

function Header() {
    return (
        <>
            <div className='max-w-[1800px] h-[90px] font-poppin flex items-center justify-end'>
                <div className='flex sm:gap-32 gap-24 lg:mr-24 md:mr-16 mr-8'>
                    <div className='lg:w-[430px] sm:w-[300px] sm:block hidden h-6 font-medium text-base'>
                        <ul className='flex justify-between'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='lg:w-[247px] w-[150px] h-7 flex justify-between text-lg'>
                        <BsPersonExclamation />
                        <RiSearchLine />
                        <IoHeartOutline />
                        <IoCartOutline />
                    </div>
                    <div className='sm:hidden'><Sheet>
                        <SheetTrigger><GiHamburgerMenu className='text-2xl'/></SheetTrigger>
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
