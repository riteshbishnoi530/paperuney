import React from 'react'
import Image from 'next/image';
import CustomSlider from './common/CustomSlider';
const BackToEarn = () => {
    return (
        <>
            <div className="relative bg-[#DA291C] overflow-hidden">
                <Image
                    className="sm:w-full max-w-[972px] w-[972px] relative z-10 object-contain sm:max-w-full pointer-events-none"
                    src="/assets/images/pizza-layer.webp"
                    alt="pizzanomics-layer"
                    width={1920}
                    height={367}
                />
                <Image
                    src="/assets/images/pizzanimic-text.webp"
                    alt="text"
                    width={846}
                    height={99}
                    className="w-full max-w-[846px] absolute z-10 top-[56px] left-[88px] max-xl:max-w-[600px] max-md:max-w-[330px] max-md:left-5 max-md:top-5 pointer-events-none"
                />
                <div className="flex lg:flex-row flex-col-reverse justify-between gap-5">
                    <div className="relative z-10 lg:-mt-10 xl:-mt-20 lg:ml-[60px] xl:ml-[67px]">
                        <Image
                            className="max-w-[301px] sm:max-w-[420px] xl:max-w-[485px] w-full mx-auto lg:mx-0 max-md:pb-4 pointer-events-none"
                            width={420}
                            height={420}
                            src="/assets/images/peperruney-text-image.webp"
                            alt="peperunry-image"
                        />
                    </div>
                    <div className="xl:max-w-[812px] lg:w-full -mx-5 lg:mx-0">
                        <div className="bg-black relative -rotate-3 w-full h-[341px] pb-10 sm:pb-11 flex justify-center items-end xl:-mt-[240px] -mt-[237px] sm:-mt-[225px] lg:-mt-[260px]">
                            <p className="font-luckiest font-normal text-[70px] sm:text-[80px] md:text-[85px] xl:text-[135px] leading-[100%] text-white uppercase mb-0.5">
                                42 BILLION
                            </p>
                        </div>
                        <p className="font-luckiest text-4xl sm:text-[80px] uppercase sm:leading-[80px] font-normal text-white relative my-5 -rotate-3 text-center">
                            token supply
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between relative lg:-mt-4">
                    <div className="bg-black -rotate-[4deg] -mx-7 xl:h-[111px] lg:w-[630px] px-7 mt-14 h-fit relative z-10">
                        <p className="text-white font-luckiest font-normal text-[52px] sm:text-[75px] xl:text-[92px] text-center lg:text-left lg:ml-11 leading-[100%] text-nowrap mb-12 lg:mb-2.5 my-2.5">
                            LP BURNED
                        </p>
                    </div>
                    <div className="lg:max-w-[942px] lg:w-full relative z-10 -mt-12 lg:mt-0 -mx-10 lg:mx-0">
                        <Image
                            src="/assets/images/zero-tax-layer.webp"
                            alt="taxLayer"
                            className="w-full pointer-events-none"
                            width={610}
                            height={327}
                        />
                    </div>
                </div>
                <div className="sm:bg-[url('/assets/images/webp/pizzanomics-bg.webp')] bg-cover lg:bg-[length:100%_100%] bg-no-repeat bg-center max-sm:bg-[url('/assets/images/webp/mobile-view.webp')]">
                    <div className="bg-[url('/assets/images/pizza-bg-image.webp')] max-sm:bg-mobile-layer bg-100 -mt-[207px] bg-cover bg-no-repeat bg-center min-h-[1190px] pt-[162px]">
                        <div className="flex w-full flex-col lg:flex-row gap-7 sm:gap-12 xl:ml-auto px-5 xl:px-0 xl:mx-11 mx-auto xl:w-fit md:-mb-[200px]">
                            <div className="max-w-[503px] w-full pt-7 mx-auto lg:mx-0 flex flex-col items-center relative z-10">
                                <p className='text-[32px] text-white font-schoolbell absolute top-10 right-0 rotate-[24deg]'>Click on me</p>
                                <Image
                                    src="/assets/images/window.webp"
                                    alt="window"
                                    className="w-full"
                                    width={500}
                                    height={300}
                                />
                               <Image className='max-md:max-w-[335px] mt-5' width={503} height={80} src="/assets/images/bake-to-earn-text.webp" alt='bake to earn text'/>
                               <button className='cursor-pointer hover:scale-105 transition-all duration-300 ease-line mt-5 bg-[url("/assets/images/btn-bg.webp")] bg-center bg-[length:100%] bg-no-repeat font-luckiest text-white text-[28px] max-md:text-base py-7 w-[313px]'>Earn now </button>
                            </div>
                            <Image
                                src="/assets/images/pizza-delever.webp"
                                width={656}
                                height={828}
                                alt="pizza delever"
                                className="lg:max-w-[656px] -mb-30 max-lg:-mb-[180px] max-md:-mb-[450px] max-w-[468px] !mx-auto sm:w-full pointer-events-none -ml-14"
                            />
                        </div>
                        <div className="bg-cover max-md:min-h-[1000px] h-full max-lg:min-h-[800px] bg-no-repeat bg-top relative bg-[url('/assets/images/counter-image.webp')] md:pt-[160px] lg:pt-[320px]">
                            <div className="flex max-lg:translate-y-[300px] max-md:translate-y-[630px] flex-wrap justify-center lg:flex-nowrap lg:flex-row mx-auto max-w-[1240px] w-full px-5 gap-10 xl:gap-[60px] pb-[75px] sm:pb-8">
                                <Image
                                    src="/assets/images/coin-gecko.webp"
                                    alt="coin"
                                    width={360}
                                    height={140}
                                    className="max-lg:w-[250px]  md:w-[340px] w-[236px] pointer-events-none object-contain h-[92px] sm:h-auto sm:w-[280px]"
                                />
                                <Image
                                    width={360}
                                    height={140}
                                    src="/assets/images/dex.webp"
                                    alt="dexScreener"
                                    className="lg:w-[30%] md:w-[340px] w-[236px] object-contain h-[92px] sm:h-auto sm:w-[280px] pointer-events-none"
                                />
                                <Image
                                    width={360}
                                    height={140}
                                    src="/assets/images/tools.webp"
                                    alt="dexTools"
                                    className="lg:w-[30%] md:w-[340px] w-[236px] object-contain h-[92px] sm:h-auto sm:w-[280px] pointer-events-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#DA291C] py-[30px]'>
                <CustomSlider />
            </div>
        </>
    );
}

export default BackToEarn