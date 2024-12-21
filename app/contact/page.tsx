import ContactCard from '@/components/ContactCard'
import ContactCard2 from '@/components/ContactCard2'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PreFooter from '@/components/PreFooter'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const page = () => {
  return (
    <>
    {/* header */}
    <Header/>
    {/* hero */}
    <Hero text='Contact'/>
    {/* 1st section */}

    <div className='flex flex-col items-center max-w-[2000px]  font-poppin sm:pt-24 pt-16 '>
        <div className=' mx-10'> 
            <h1 className='text-center sm:text-4xl text-2xl font-semibold'>Get In Touch With Us</h1>
            <p className='text-center sm:text-base text-sm text-[#9F9F9F] mt-6'>For More Information About Our Product & Services. Please Feel Free To Drop Us</p>
            <p className='text-center sm:text-base text-sm text-[#9F9F9F] '>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className=' flex w-full xl:gap-32 lg:gap-12 flex-wrap lg:flex-nowrap justify-center '>
            <div className='lg:py-16 lg:pr-6 sm:pl-24 pl-14 p-8  flex lg:flex-col flex-row flex-wrap lg:gap-16 gap-6 mt-16'>
                <ContactCard iconNode={<FaLocationDot />} heading='Address' text1='236 5th SE Avenue, New'text2='York NY10000, United States'/>
                <ContactCard iconNode={<FaPhone />} heading='Phone' text1='Mobile: +(84) 546-6789' text2='Hotline: +(84) 456-6789'/>
                <ContactCard iconNode={<FaClock />} heading='Working Time' text1='Monday-Friday: 9:00 - 22:00' text2='Saturday-Sunday: 9:00 - 21:00'/>
            </div>
            <div className='lg:pt-32 lg:pr-6 lg:pl-16 lg:pb-16 p-8  '>
                <div className=' flex flex-col gap-8'>
                <ContactCard2 text1='Your name' text2='Abc'/>
                <ContactCard2 text1='Email address' text2='Abc@def.com'/>
                <ContactCard2 text1='Subject' text2='This is an optional'/>
                <ContactCard2 text1='Message' text2="Hi! i'd like to ask about"/>
                <div className='px-10 py-2 rounded-xl  w-[200px] flex items-center justify-center border-2 border-black'>Submit</div>
                </div>


            </div>
        </div>

    </div>

    {/* pre footer */}
    <PreFooter/>

    </>

  )
}

export default page
