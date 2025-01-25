'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Wishlist from '@/components/Wishlist'
import React from 'react'


export default function page() {

    return (
        <>
        <Header/>
        <Hero text='Wishlist' />
        <Wishlist/>

        </>

    )
}
