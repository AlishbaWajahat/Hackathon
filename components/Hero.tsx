import Image from 'next/image'
import React from 'react'
import { PiGreaterThan } from "react-icons/pi";

type Propstype = {
    text: string,
}

function Hero(props:Propstype) {
    return (
        <>
            <div className=' max-w-[1800px] h-[300px] font-poppin flex justify-center items-center relative'>
                <Image src={"/shop hero.png"} alt='shop hero' fill />
                <div className='flex flex-col gap-3 items-center  z-10'>
                    <Image src={"/hero logo.png"} alt='logo' width={50} height={50} />
                    <h1 className='text-5xl font-medium'>{props.text}</h1>
                    <div className='text-base flex gap-2 items-center'>
                        <p className='font-medium'>Home</p>
                        <PiGreaterThan />
                        <p className='font-light'>{props.text}</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Hero
