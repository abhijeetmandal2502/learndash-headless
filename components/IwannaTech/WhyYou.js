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
                        <h2 className={`text-white font-semibold 2xl:text-[70px] md:text-[40px] text-[40px]  ${styles.shadow} leading-[80px] tracking-wide`}>why you?</h2>
                        <h4 className='2xl:text-[50px]  md:text-[30px] font-bold xl:py-4 lg:py-0 py-4 2xl:mt-6 lg:leading-[40px] leading-[40px]'>tell us about <br></br> your pedigree</h4>
                        <p className='text-white font-bold 2xl:text-[18px] md:text-[16px] pt-5'>In our introductory questionnaire you can tell us about yourself, describe your course, what the student can expect to learn, and why you are qualified to teach it!
                            <br></br><br></br>
                            If we determine your course is a good fit, we’ll let you into our clubhouse! From there you start creating!</p>

                    </div>
                </div>

                <div className={`relative col-span-12 md:col-span-8 h-[100vh] 2xl:block md:hidden ${loading ? styles.tranatationNone : 'opacity-0'}  `}>

                    <div className={` relative  flex xl:mr-20`}>
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



                <div className={`relative col-span-12 md:col-span-8 h-[100vh] 2xl:hidden md:block ${loading ? styles.tranatationNone : 'opacity-0'} -mt-20  `}>

                    <div className={` relative  flex 2xl:mr-20 md:-mr-16 lg:mr-5   mr-10`}>
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
                </div>


            </div>
        </>
    )
}

export default WhyYou