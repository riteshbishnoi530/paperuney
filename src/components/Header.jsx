"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HEADER_LIST } from '@/utils/helper'
import { DownArrow } from '@/utils/icons';
function Header() {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex justify-between items-center max-w-[1332px] mx-auto px-4'>
      <Link className='bg-[url("/assets/images/btn-bg.webp")] bg-center bg-cover bg-no-repeat font-luckiest text-white text-[28px] max-lg:text-xl max-sm:text-base max-sm:py-[8px] max-sm:px-2 py-4 max-lg:py-3 max-lg:px-4 px-6' href="/">BUY $PEPERUNEY
      </Link>
      <div className='flex gap-10 max-sm:gap-2 items-center'>
        <button onClick={() => setOpen(!open)} className="flex cursor-pointer items-center gap-[14px] max-sm:gap-1 relative">
          <Image src={'/assets/images/flag.webp'} alt="flag" height={31} width={41} className="max-sm:w-6 pointer-events-none" />
          <div className={`absolute flex flex-col gap-2 transition-all duration-200 ${open ? "opacit-100 top-14 max-sm:top-10" : "opacity-0 top-0"}`}>
            <Image src={'/assets/images/india-flag.webp'} alt="indian-flag" height={31} width={41} className="max-sm:w-6 pointer-events-none" />
            <Image src={'/assets/images/flag.webp'} alt="flag" height={31} width={41} className=" max-sm:w-6 pointer-events-none" />
          </div>
          <div><DownArrow myClass={`${open ? "rotate-180" : ""} transition-all duration-200`} /></div>
        </button>
        <div className='flex gap-2'>
          {HEADER_LIST.map((item, index) => (
            <Link target='_blank' key={index} href={item.link}>
              <Image className='max-md:max-w-10 hover:scale-105 transition-all duration-300 ease-linear' width={77} height={67} src={item.image} alt="media link" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header