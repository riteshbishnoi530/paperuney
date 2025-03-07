"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FLAGS_LIST, HEADER_LIST } from '@/utils/helper'
function Header() {
  const [isOpen, setIsOpen] = useState(false);
    const [selectedFlag, setSelectedFlag] = useState('/assets/images/flag.webp');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const selectFlag = (flagSrc) => {
        setSelectedFlag(flagSrc);
        setIsOpen(false);
    };
  return (
    <div className='flex justify-between items-center max-w-[1332px] mx-auto px-4'>
      <Link className='bg-[url("/assets/images/btn-bg.webp")] bg-center bg-cover bg-no-repeat font-luckiest text-white text-[28px] max-lg:text-xl max-sm:text-base max-sm:py-[8px] max-sm:px-2 py-4 max-lg:py-3 max-lg:px-4 px-6' href="/">BUY $PEPERUNEY
      </Link>
      <div className='flex gap-10 max-sm:gap-2 items-center'>
      <div className="relative">
                            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                                <img className="lg:max-w-[41px] lg:min-w-[41px] md:min-w-9 min-w-8 lg:h-[31px] h-6 md:max-w-9 max-w-8 w-full" src={selectedFlag} alt="selected-flag" width={41} height={31} />
                                <span className="lg:ml-2 ml-1 lg:text-xl text-sm transition-all ease-linear duration-300">{isOpen ? '▲' : '▼'}</span>
                            </div>

                            {isOpen && (
                                <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 shadow-md rounded-lg z-10">
                                    <ul className="space-y-2 p-2">
                                        {FLAGS_LIST.map((flag, index) => (
                                            <li key={index} className="cursor-pointer p-2 hover:bg-gray-100" onClick={() => selectFlag(flag.src)}>
                                                <img className="lg:max-w-[41px] md:max-w-9 max-w-8 w-full" src={flag.src} alt={flag.alt} width={41} height={31} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
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