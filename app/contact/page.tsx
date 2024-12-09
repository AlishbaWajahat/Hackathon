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

    <div className='flex flex-col items-center max-w-[1800px]  font-poppin pt-24 '>
        <div>
            <h1 className='text-center text-4xl font-semibold'>Get In Touch With Us</h1>
            <p className='text-center text-base text-[#9F9F9F] mt-6'>For More Information About Our Product & Services. Please Feel Free To Drop Us</p>
            <p className='text-center text-base text-[#9F9F9F] '>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className=' flex w-full lg:justify-around flex-wrap lg:flex-nowrap'>
            <div className='py-16 pr-6 pl-24 flex flex-col gap-16 mt-16'>
                <ContactCard iconNode={<FaLocationDot />} heading='Address' text1='236 5th SE Avenue, New'text2='York NY10000, United States'/>
                <ContactCard iconNode={<FaPhone />} heading='Phone' text1='Mobile: +(84) 546-6789' text2='Hotline: +(84) 456-6789'/>
                <ContactCard iconNode={<FaClock />} heading='Address' text1='Monday-Friday: 9:00 - 22:00' text2='Saturday-Sunday: 9:00 - 21:00'/>
            </div>
            <div className='pt-32 pr-6 pl-16 pb-16 '>
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
