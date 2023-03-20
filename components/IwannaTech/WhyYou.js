import React, { useState } from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const WhyYou = ({ activeTabIndex }) => {
    const [loading, setLoading] = useState(false)
    //console.log('res', loading, activeTabIndex)

    setTimeout(() => {
        if (activeTabIndex === 6) {
            setLoading(true);
        }

        else {
            setLoading(false);
        }
    }, 1000)

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>
                <div className='col-span-12 md:col-span-4 flex justify-start items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold 2xl:text-[70px] text-[60px] ${styles.shadow} leading-[80px] tracking-wide`}>why you?</h2>
                        <h4 className='2xl:text-[50px] text-[45px] font-bold py-4 mt-6'>tell us about <br></br> <br></br> your pedigree</h4>
                        {/* <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" /> */}
                        <p className='text-white font-bold text-[18px] pt-5'>In our introductory questionnaire you can tell us about yourself, describe your course, what the student can expect to learn, and why you are qualified to teach it!
                            <br></br><br></br>
                            If we determine your course is a good fit, we’ll let you into our clubhouse! From there you start creating!</p>

                    </div>
                </div>

                {/* <div className={`relative col-span-12 md:col-span-8 h-[100vh] ${loading ? styles.tranatationNone : 'opacity-0'} -mt-5 `}>
                    <div className={` relative  w-[100%] h-[100%] `}>
                        <div className={`absolute top-[6%]  right-[20%]  w-[60%] `}>
                            <Image src='/images/WhyYouRectangle.png' width={1000} height={600} alt="wanna tech png" className={`w-[100%]`} />
                        </div>

                        <div className={` absolute -top-[9%]  right-[16%]   ${styles.fadeAnimationInfinite}   w-[70%]`}>
                            <Image src='/images/dog.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>

                        <div className={`-rotate-[31deg] top-[29.6%]   2xl:top-[31.2%]  right-[12%] absolute  w-[63%] h-[20%] ${styles.bgcoverbottomWhyYou} `}>
                            <svg viewBox="0 0 450 378" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.659668L0 378L450 378V1.20398C442.38 63.947 388.934 112.555 324.135 112.555L125.93 112.555C60.9436 112.555 7.37568 63.6656 0 0.659668Z" fill="#A53A3A" />
                            </svg>
                        </div>
                    </div>
                    <div className='z-50 absolute bottom-[37%] left-[45%]'>
                        <p className='text-white'>(her name is bubbless!)</p>
                    </div>

                </div> */}

                <div className={`relative col-span-12 md:col-span-8 h-[100vh] ${loading ? styles.tranatationNone : 'opacity-0'}  `}>

                    <div className={` relative  flex 2xl:mr-20  mr-0`}>
                        <div className='relative overflow-hidden w-full h-[500px]  '>
                            <div className={`w-[500px] absolute bottom-[46px] right-[50.5px]`}>

                                <Image src='/images/WhyYouRectangle.png' width={1000} height={600} alt="wanna tech png" className={` w-[500px]`} />
                            </div>
                            <div className={`-rotate-[30deg] absolute -bottom-[170px] -right-[80.5px]  z-10  `}>
                                <Image src='/images/SubtractBrown.png' width={1000} height={600} alt="wanna tech png" className={` w-[530px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[30px]  right-[60px] ${styles.fadeAnimationInfinite}    w-[560px]`}>
                            <Image src='/images/dog.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>
                        <div className='z-50 absolute bottom-[0%] left-[45%]'>
                            <p className='text-white'>(her name is bubbless!)</p>
                        </div>
                    </div>
                </div>



                {/* <div className={`relative col-span-12 md:col-span-8 h-[100vh] ${loading ? styles.tranatationNone : 'opacity-0'} -mt-20  `}>

                    <div className={` relative  flex 2xl:mr-20  mr-0`}>
                        <div className='relative overflow-hidden w-full h-[500px]  '>
                            <div className={`w-[400px] absolute bottom-[46px] right-[50.5px]`}>

                                <Image src='/images/WhyYouRectangle.png' width={1000} height={600} alt="wanna tech png" className={` w-[500px]`} />
                            </div>
                            <div className={`-rotate-[30deg] absolute -bottom-[140px] -right-[80.5px]  z-10 `}>
                                <Image src='/images/SubtractBrown.png' width={1000} height={600} alt="wanna tech png" className={` w-[450px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[40px]  right-[0px] ${styles.fadeAnimationInfinite} w-[500px]`}>
                            <Image src='/images/dog.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>
                        <div className='z-50 absolute bottom-[0%] left-[45%]'>
                            <p className='text-white'>(her name is bubbless!)</p>
                        </div>
                    </div>
                </div> */}


            </div>
        </>
    )
}

export default WhyYou