import React from 'react'
import Image from 'next/image';
import { Telegram } from '@/utils/icons';
const ClickToEarn = () => {
    return (
        <>
            <div className='bg-cover pt-[100px] bg-center bg-no-repeat bg-[url("/assets/images/casino-bg.webp")] mx-auto'>
                <div className="flex max-lg:flex-col-reverse max-w-[1440px] mx-auto px-4 relative">
                    <Image width={400} height={500} className='lg:absolute left-0 bottom-0 max-lg:-mt-[200px]' src="/assets/images/peperuney-arcade.webp" alt='arcade' />
                    <div className='max-w-[655px] lg:pb-[127px] ml-auto relative z-10'>
                        <div className="relative max-w-[555px] translate-x-[-45px] max-md:translate-x-0 ml-auto z-10 max-md:!mx-auto">
                            <Image
                                src="/assets/images/casino-heading.webp"
                                alt="heading"
                                width={555}
                                height={160}
                                className="w-full mx-auto pointer-events-none max-md:max-w-[205px] max-md:bottom-[-45%]"
                            />
                        </div>
                        <div className="relative max-w-[682px] ml-auto">
                            <Image
                                src="/assets/images/casino-frame.webp"
                                alt='frame'
                                width={682}
                                height={358}
                                className="w-full max-w-[682px] h-full absolute"
                            />
                            <p className="relative z-10 font-schoolbell font-normal text-2xl text-[#0E0E0E] leading-[180%] max-w-[682px] px-[30px] pb-[31px] max-md:text-xl pt-[150px]">
                                HEY YOU! Yeah, YOU! So you made it this far… Hell yeah I’m
                                impressed! Means you’re serious about pizza, vibes, and big-time
                                wins. Catch me at the slots or the poker table, always *ALL-IN*
                                for that next big score. It’s the thrill, baby—the gamble, the
                                grind—it keeps me fired up to build the ULTIMATE PIZZA EMPIRE!
                                Wanna roll with the best? Smash that button, start stackin’ up,
                                and show me what you got. FEELS GREAT MAN!
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-10 max-md:flex-col max-md:gap-2">
                            <button className="gap-[15px] font-luckiest font-normal lg:text-[36px] !text-2xl text-white lg:px-2 px-1 md:py-3 py-2 whitespace-nowrap lg:py-5 mt-5 cursor-pointer max-md:min-w-[343px] bg-[url(/assets/images/btn-bg.webp)] bg-[length:100%_100%] lg:min-w-[214px] h-[74px] flex justify-center items-center transition-all ease-linear duration-300  hover:scale-y-110 md:max-w-48 sm:max-w-40 max-w-[132px] w-full">
                                <Telegram />
                                Play now
                            </button>
                            <button className=" gap-[15px] font-luckiest font-normal lg:text-[36px] !text-2xl text-white lg:px-2 px-1 md:py-3 py-2 whitespace-nowrap lg:py-5 mt-5 max-md:min-w-[343px] max-md:mt-0 cursor-pointer bg-[url(/assets/images/green-btn.webp)] bg-[length:100%_100%] lg:min-w-[214px] h-[74px] flex justify-center items-center transition-all ease-linear duration-300  hover:scale-y-110 md:max-w-48 sm:max-w-40 max-w-[132px] w-full">
                                <Telegram />
                                mini app
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClickToEarn