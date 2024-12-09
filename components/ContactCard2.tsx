import React from 'react'

type Propstype = {

    text1:string,
    text2:string
}

function ContactCard2(props:Propstype){
  return (
    <>
    <div className='w-[510px]  text-base font-poppin'>
        <h1 className='font-medium'>{props.text1}</h1>
        <div className='w-full h-[75px] border-2 border-[#9F9F9F] rounded-lg text-[#9F9F9F] flex items-center p-6 mt-4'>{props.text2}</div>
    </div>
    </>

  )
}

export default ContactCard2
