import React from 'react'
import CustomSlider from './common/CustomSlider'
import Image from 'next/image'
import { HOW_TO_BUY_LIST } from '@/utils/helper'

function HowToBuy() {
  return (
    <div>
      <div className='bg-[#067A52] pt-[30px]'>
        <CustomSlider />
      </div>
      <Image width={1440} height={195} className='w-full' src="/assets/images/top-layer-image.webp" alt='top layer'/>
      <Image className='mx-auto pt-[50px] max-sm:pt-10 pb-6 max-md:max-w-[288px]' width={443} height={155} src="/assets/images/how-to-buy-heading.webp" alt='heading' />
      <div className='bg-[url("/assets/images/how-to-buy-bg.webp")] bg-top bg-no-repeat bg-cover -mt-1 px-4'>
        <div className='flex max-lg:flex-wrap gap-[37px] justify-center pt-[200px] max-lg:pt-'>
          {HOW_TO_BUY_LIST.map((item, index) => (
            <div key={index}>
              <div className={`max-w-[322px] border-4 border-black bg-white p-4 ${index === 1 ? "lg:-translate-y-14":""}`}>
                <Image className='mx-auto -translate-y-14' width={85} height={74} src={item.image} alt='number' />
                <p className='text-[40px] font-luckiest leading-[100%] text-center'>{item.heading}</p>
                <p className='text-lg font-schoolbell text-center'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Image className='mx-auto h-full w-full max-w-[1000px] lg:-mt-10' width={1200} height={495} src="/assets/images/pizza.webp" alt='pizza'/>
      </div>
      <Image className='w-full -mt-10' width={1500} height={134} src="/assets/images/pizza-box-pattern.webp" alt='pattren'/>
    </div>
  )
}

export default HowToBuy