import Cart from '@/components/Cart'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'
import Cartprovider from "@/app/context/provider"
import PreFooter from '@/components/PreFooter'

export default function page() {
  return (
    <>
    <Header/>
    <Hero text='Cart'/>

    

    <Cart/>
     <PreFooter/>
    
    </>

  )
}

