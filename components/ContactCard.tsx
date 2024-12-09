import { Icon } from 'lucide-react';

import React from 'react'

type Propstype = {
    iconNode:React.ReactNode,
    heading:string,
    text1:string,
    text2?:string
}


function ContactCard(props:Propstype){
  return (
    <>
    <div className='flex gap-4  w-[250px]'>
        <div className='text-2xl mt-[4px]'>{props.iconNode}</div>
        <div>
            <h1 className='text-2xl font-medium'>{props.heading}</h1>
            <p className='text-base'>{props.text1}</p>
            <p className='text-base'>{props.text2}</p>
        </div>
    </div>

    </>

  )
}

export default ContactCard
