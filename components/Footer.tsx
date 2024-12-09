import React from 'react'

function Footer() {
    return (
        <>
        <div className='max-w-[1800px] auto font-poppin md:pt-12 pt-8'> 
            <div className='mx-12 mt-12 mb-6 md:pr-12'>
            <div className='flex md:justify-between md:flex-row flex-col gap-4'>
            <div className=' text-base text-[#9F9F9F] h-24 md:self-center'>
                <p>400 University Drive Suite 200 Coral </p>
                <p>Gables,</p>
                <p>FL 33134 USA</p>
            </div>
            <div className='font-medium border-t-2 border-[#9F9F9F] md:border-0'>
                <ul>
                    <li className='text-[#9F9F9F]'>Links</li>
                    <li className='mt-8'>Home</li>
                    <li className='mt-8'>Shop</li>
                    <li className='mt-8'>About</li>
                    <li className='mt-8'>Contact</li>
                </ul>
            </div>
            <div className='font-medium border-t-2 border-[#9F9F9F] md:border-0'>
                <ul>
                    <li className='text-[#9F9F9F]'>Help</li>
                    <li className='mt-8'>Payment Options</li>
                    <li className='mt-8'>Returns</li>
                    <li className='mt-8'>Privacy Policies</li>
                </ul>
            </div>
            <div className='font-medium border-t-2 border-[#9F9F9F] md:border-0'>
                <p className='text-[#9F9F9F]'>Newsletter</p>
                <div className='mt-8 gap-2 text-[14px] flex underline underline-offset-4 '>
                    <p className='text-[#9F9F9F]'>Enter Your Email Address</p>
                    <span>SUBSCRIBE</span>
                </div>

            </div>
            </div>
            <div className='mt-6  pt-6 text-base border-t-2 border-slate-200'>2022 Meubel House. All rights reverved</div>
            </div>
            

        </div>
        </>
    )
}

export default Footer
