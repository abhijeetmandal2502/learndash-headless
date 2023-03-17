import React, { useState } from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'
import AnimateImg from 'components/card/AnimateImg'

const WhyUs = ({ activeTabIndex }) => {

    const [loading, setLoading] = useState(false)
    //console.log('res', loading, activeTabIndex)

    setTimeout(() => {
        if (activeTabIndex === 2) {
            setLoading(true);
        }

        else {
            setLoading(false);
        }
    }, 1000)

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation} max-h-screen overflow-hidden `}>
                <div className='col-span-12 md:col-span-4 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold 2xl:text-[70px] text-[60px]  ${styles.shadow} leading-[80px] tracking-wide`}>Why Us?</h2>
                        <h4 className='text-[35px] font-semibold py-4'>because we’re</h4>
                        <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" />
                        <p className='text-white font-bold 2xl:text-[18px] text-[16px]  pt-5'>You’ve probably already explored around and noticed we do things a little differently from other online ce sites!
                            <br></br><br></br>
                            We’re happy to disrupt the universe, and we’d love to have you part of it!</p>

                    </div>
                </div>
                <div className={`relative col-span-12 md:col-span-8 h-[100vh] ${loading ? styles.tranatationNone : 'opacity-0'} `}>
                    <div className={` relative  w-[100%] h-[100%] `}>
                        <div className={`absolute top-[6%]  right-[20%]  w-[62%] `}>
                            <Image src='/images/RectangleWhyUs.png' width={1000} height={600} alt="wanna tech png" className={`w-[100%]`} />
                        </div>

                        <div className={` absolute -top-[7%]  right-[18%]   ${styles.imgRotate}    w-[70%]`}>
                            <Image src='/images/man.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>

                        <div className={`-rotate-[31deg]  2xl:top-[31.8%]  top-[29.9%]  right-[11.5%] absolute  w-[66%] h-[20%] ${styles.bgcoverbottomWhyUs}`}>
                            <svg viewBox="0 0 450 378" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.659668L0 378L450 378V1.20398C442.38 63.947 388.934 112.555 324.135 112.555L125.93 112.555C60.9436 112.555 7.37568 63.6656 0 0.659668Z" fill="#E6A84B" />
                            </svg>
                        </div>
                    </div>

                    {/* <AnimateImg /> */}


                </div>

            </div>
        </>
    )
}

export default WhyUs