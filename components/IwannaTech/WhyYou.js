import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const WhyYou = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>
                <div className='col-span-12 md:col-span-6 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold text-[70px] ${styles.shadow} leading-[80px] tracking-wide`}>why you?</h2>
                        <h4 className='text-[50px] font-bold py-4'>tell us about <br></br> <br></br> your pedigree</h4>
                        {/* <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" /> */}
                        <p className='text-white font-bold text-[18px] pt-5'>In our introductory questionnaire you can tell us about yourself, describe your course, what the student can expect to learn, and why you are qualified to teach it!
                            <br></br><br></br>
                            If we determine your course is a good fit, we’ll let you into our clubhouse! From there you start creating!</p>

                    </div>
                </div>
                <div className=' relative col-span-12 md:col-span-6 flex justify-center items-start'>
                    <div className={` `}>
                        <Image src='/images/WhyYouRectangle.png' width={400} height={400} alt="wanna tech png" className={``} />
                        {/* <p className='text-white'>(hername's bubbles)</p> */}
                    </div>

                    <div className={` absolute -top-[100px]  left-[7%]  ${styles.fadeAnimationInfinite}    col-span-12 md:col-span-6 flex justify-center items-start`}>
                        <Image src='/images/dog.png' width={450} height={450} alt="wanna tech png" className={` h-[440px] opacity-1`} />
                    </div>
                    <div className={` -rotate-[22deg] ${styles.aboutMain} absolute  top-[259px] right-[5px]`}>
                        <svg width="400" height="100">
                            <rect width="400" height="100" fill='#A53A3A' />
                            Sorry, your browser does not support inline SVG.
                        </svg>
                    </div>

                </div>


            </div>
        </>
    )
}

export default WhyYou