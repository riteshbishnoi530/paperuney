import React from 'react'
import Header from './Header'
import Image from 'next/image'
import CustomSlider from './common/CustomSlider'

function Hero() {
    return (
        <>
            <div className='pt-[30px] pb-7 bg-[url("/assets/images/hero-bg.webp")] bg-no-repeat bg-cover bg-center'>
                <Header />
                <div>
                    <Image className='mx-auto mt-[63px] max-md:max-w-[373px] max-md:w-full pointer-events-none' width={777} height={283} src="/assets/images/peperuney-hero.webp" alt="peperuney" />
                    <Image className='mx-auto mt-[54px] max-md:max-w-[221px] pointer-events-none' width={341} height={317} src="/assets/images/pepruney-on-bike.webp" alt='peperuney on bike' />

                </div>
            </div>
            <div className='bg-[#DA291C] border border-t-4 border-b-4 border-black py-[30px] max-md:py-5'>
                <CustomSlider />
            </div>
        </>
    )
}

export default Hero