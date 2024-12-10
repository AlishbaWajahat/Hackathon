import React from 'react'

type Propstype = {

  text1: string,
  text2: string
}

function ContactCard2(props: Propstype) {
  if (props.text2 === "Hi! i'd like to ask about") {
    return (
      <div className='sm:w-[510px] w-[270px]  text-base font-poppin'>
        <h1 className='font-medium'>{props.text1}</h1>
        <div className='w-full sm:h-[120px] h-[80px] border-2 border-[#9F9F9F] rounded-xl text-[#9F9F9F] flex sm:p-6 p-4 mt-4'>{props.text2}</div>
      </div>
    )

  }
  else return (
    <>
      <div className='sm:w-[510px] w-[270px]  text-base font-poppin'>
        <h1 className='font-medium'>{props.text1}</h1>
        <div className='w-full sm:h-[75px] h-[50px] border-2 border-[#9F9F9F] rounded-xl text-[#9F9F9F] flex items-center p-6 mt-4'>{props.text2}</div>
      </div>
    </>

  )

}

export default ContactCard2
