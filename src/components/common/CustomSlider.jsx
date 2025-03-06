import { SLIDER_LIST } from '@/utils/helper'
import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

function CustomSlider() {
    return (
        <div >
            <Marquee direction='left'>
                <div className='flex gap-10'>
                    {SLIDER_LIST.map((item, index) => (
                        <Image className='max-md:max-w-[163px]' width={233} height={40} key={index} src={item} alt='slider' />
                    ))}
                </div>
            </Marquee>
        </div>
    )
}

export default CustomSlider