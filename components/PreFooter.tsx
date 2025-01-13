import React from 'react'

function PreFooter(){
  return (
    <>
    <div className='font-poppin flex max-w-[3000px] sm:h-[300px] h-auto sm:p-14 py-8 px-8 sm:px-16 xl:px-32 sm:flex-nowrap flex-wrap sm:gap-8 gap-4 bg-[#FAF4F4] items-center justify-center'>
        <div>
            <h1 className='lg:text-3xl  text-lg text-center lg:text-start'>Free Delivery</h1>
            <p className='lg:text-xl text-sm text-[#9F9F9F] mt-4 text-center lg:text-start'>For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        <div >
            <h1 className='lg:text-3xl text-lg text-center lg:text-start'>90 Days Return</h1>
            <p className='lg:text-xl text-sm text-[#9F9F9F] mt-4 text-center lg:text-start'>If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div>
            <h1 className='lg:text-3xl text-lg text-center lg:text-start'>Secure Payment</h1>
            <p className='lg:text-xl text-sm text-[#9F9F9F] mt-4 text-center lg:text-start'>100% secure payment, consectetur adipim scing elit.</p>
        </div>

    </div>
</>

  )
}

export default PreFooter
