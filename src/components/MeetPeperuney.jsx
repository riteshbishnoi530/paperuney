import React from 'react'
import Image from 'next/image'

function MeetPeperuney() {
    return (
        <div className='relative bg-[url("/assets/images/meet-peperuney.webp")] max-sm:bg-[url("/assets/images/meet-peperuney-mobile.webp")] bg-no-repeat bg-cover bg-center max-sm:bg-bottom min-h-[2239px] max-sm:min-h-[2000px]'>
            <Image className='w-full h-full' width={1400} height={300} src="/assets/images/melting-cheese.webp" alt="melting cheese" />
            <div className='flex max-w-[1332px] mx-auto max-[1348.98px]:flex-col-reverse  pl-0 pr-4'>
                <Image className='max-w-[580px] w-full mx-auto max-[1348.98px]:-mt-14 relative z-[1]' width={580} height={530} src="/assets/images/art-work.webp" alt='art work' />
                <div className='mx-auto'>
                    <p className="text-[80px] text-center relative max-lg:text-6xl max-sm:text-[52px] max-sm:leading-[52px] leading-20 text-black font-luckiest mx-auto max-w-max">
                        MEET PepeRuney
                        <span className="text-[80px] text-center mx-auto max-lg:text-6xl max-sm:text-[52px] max-sm:leading-[52px] leading-20 absolute font-luckiest -top-[3px] -left-[3px] text-white">MEET PepeRuney</span>
                    </p>
                    <div className='relative min-w-[720px] max-lg:min-w-0 max-w-[720px] pl-[69px] max-sm:pl-9 pr-10 max-sm:pr-4 pt-28 pb-12'>
                        <Image className='absolute h-full top-0 left-0' width={720} height={600} src="/assets/images/pizza-guy.webp" alt='piza' />
                        <div className='relative z-[1]'>
                            <p className='font-schoolbell text-2xl max-md:text-xl leading-[180%]'>The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse, here to leave his greasy mark on the memeverse one slice at a time. PepeRuney's the king of high-stakes and low-stress vibin’. Spot the red hat and polo? You know it’s pizza time, baby! Whether he’s hustlin’ for the next big score or chillin’ with the Boys Club, PepeRuney guarantees one thing: the vibes and the dough are always rollin’</p>
                            <div className='w-full h-[1px] bg-[#0E0E0E]'></div>
                            <div className='flex items-center justify-between mt-[21px]'>
                                <p className='font-schoolbell text-[32px] max-md:text-2xl'>FEELS GREAT MAN!</p>
                                <button className='cursor-pointer hover:scale-105 transition-all duration-300 ease-line bg-[url("/assets/images/btn-bg.webp")] bg-center bg-cover bg-no-repeat font-luckiest text-white text-[28px] max-md:text-base py-[16px] px-[60px] max-md:px-6 max-md:py-2'>Manifesto </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='cursor-pointer absolute bottom-[143px] left-1/2 -translate-1/2 hover:scale-105 transition-all duration-300 ease-line bg-[url("/assets/images/btn-bg.webp")] bg-center bg-[length:100%] bg-no-repeat font-luckiest text-white text-[28px] max-md:text-base py-[16px] px-[24px] max-md:px-6 max-md:py-2'>BUY $PEPERUNEY</button>
        </div>
    )
}

export default MeetPeperuney