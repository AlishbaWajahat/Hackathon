import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PreFooter from '@/components/PreFooter'
import React from 'react'

export default function page() {
    return (
        <>
            <Header />
            <Hero text='My Account' />
            {/* main section */}
            <div className='max-w-[2000px] font-poppin flex py-12 xl:px-20 px-8 justify-center xl:gap-8 gap-4 lg:flex-nowrap flex-wrap mb-8'>
                <div className='xl:w-[600px] xl:h-[630px] sm:w-[500px] h-[530px] w-[450px] flex flex-col xl:gap-10 gap-5  xl:py-12 py-6 xl:px-16 sm:px-12 px-0'>
                    <h1 className='text-4xl font-semibold'>Log In</h1>
                    <div className='flex flex-col gap-4'>
                        <p className='text-base font-medium'>Username or email address</p>
                        <input type="text" className='sm:w-[420px] w-[300px] h-[75px] border-2 border-[#9F9F9F] rounded-xl' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-base font-medium'>Password</p>
                        <input type="text" className='sm:w-[420px] w-[300px] h-[75px] border-2 border-[#9F9F9F] rounded-xl' />
                    </div>
                    <div className='flex gap-4'>
                        <input type="checkbox" className='w-[30px] h-[27px] border-2 border-[#9F9F9F] rounded-2xl' />
                        <p className='text-base'>Remember me</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='text-[20px] w-[215px] h-[64px] flex items-center justify-center rounded-2xl border-2 border-black'>Log In</div>
                        <p className='text-base font-light'>Lost Your Password?</p>
                    </div>



                </div>
                <div className='xl:w-[600px] xl:h-[630px] sm:w-[500px] h-[530px] w-[450px] flex flex-col xl:gap-10 gap-5  xl:py-12  py-6 xl:px-16 sm:px-12 px-0'>
                    <h1 className='text-4xl font-semibold'>Register</h1>
                    <div className='flex flex-col gap-4'>
                        <p className='text-base font-medium'>Email address</p>
                        <input type="text" className='sm:w-[420px] w-[300px] h-[75px] border-2 border-[#9F9F9F] rounded-xl' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-base font-light'>A link to set a new password will be sent to your email address.</p>
                        <p className='text-base font-light'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy.</span></p>
                    </div>

                    <div className='text-[20px] w-[215px] h-[64px] flex items-center justify-center rounded-2xl border-2 border-black mt-6'>Register</div>
                </div>
            </div>
            <PreFooter />
        </>


    )
}
