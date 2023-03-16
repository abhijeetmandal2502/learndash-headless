import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const WhyYou = (state) => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>
                <div className='col-span-12 md:col-span-4 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold text-[70px] ${styles.shadow} leading-[80px] tracking-wide`}>why you?</h2>
                        <h4 className='text-[50px] font-bold py-4'>tell us about <br></br> <br></br> your pedigree</h4>
                        {/* <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" /> */}
                        <p className='text-white font-bold text-[18px] pt-5'>In our introductory questionnaire you can tell us about yourself, describe your course, what the student can expect to learn, and why you are qualified to teach it!
                            <br></br><br></br>
                            If we determine your course is a good fit, we’ll let you into our clubhouse! From there you start creating!</p>

                    </div>
                </div>


                <div className=' relative col-span-12 md:col-span-8 h-[100vh]    '>
                    <div className={` relative  w-[100%] h-[100%] `}>
                        <div className={`absolute top-[6%]  right-[20%]  w-[50%] `}>
                            <Image src='/images/WhyYouRectangle.png' width={1200} height={600} alt="wanna tech png" className={`w-[100%]`} />
                        </div>

                        <div className={` absolute -top-[4%]  right-[20%]   ${styles.fadeAnimationInfinite}   w-[55%]`}>
                            <Image src='/images/dog.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>

                        <div className={`-rotate-[30deg] ${styles.aboutMain} ${styles.svgstyle} ${state === 6 ? styles.tranatationNone : ""}    top-[25%]  right-[12.5%] absolute  w-[54%] h-[20%]`}>
                            <svg viewBox="0 0 450 378" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.659668L0 378L450 378V1.20398C442.38 63.947 388.934 112.555 324.135 112.555L125.93 112.555C60.9436 112.555 7.37568 63.6656 0 0.659668Z" fill="#A53A3A" />
                            </svg>
                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default WhyYou