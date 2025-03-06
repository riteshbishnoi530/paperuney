import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HEADER_LIST } from '@/utils/helper'
function Header() {
  return (
    <div className='flex justify-between items-center max-w-[1332px] mx-auto px-4'>
        <Link href="/">
        <Image className='max-md:max-w-[120px]' width={262} height={75} src="/assets/images/logo.webp" alt="logo"/>
        </Link>
        <div className='flex gap-10 max-sm:gap-3 items-center'>
          <Image className='max-w-[69px] max-sm:max-w-[30px] w-full h-full' width={69} height={31} src="/assets/images/flag.webp" alt='flag'/>
        <div className='flex gap-2'>
            {HEADER_LIST.map((item, index) => (
                <Link target='_blank' key={index} href={item.link}>
                    <Image className='max-md:max-w-10' width={77} height={67} src={item.image} alt="media link"/>
                </Link>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Header