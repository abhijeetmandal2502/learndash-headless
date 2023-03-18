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
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation} max-h-screen  `}>
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
                    {/* <div className={` absolute  left-1/8 top-1/8 -translate-x-1/8 -translate-y-1/8  `}> */}

                    <div className={` relative  flex 2xl:mr-20  mr-0`}>
                        <div className='relative overflow-hidden w-full h-[500px]  '>
                            {/* <div className={` w-[500px] absolute bottom-[0px] left-[92.5px`}> */}
                            <div className={`w-[500px] absolute bottom-[46px] right-[50.5px]`}>

                                <Image src='/images/RectangleWhyUs.png' width={1000} height={600} alt="wanna tech png" className={` w-[500px]`} />
                            </div>
                            <div className={`-rotate-[30deg] absolute -bottom-[170px] -right-[80.5px]  z-10  `}>
                                {/* <div className={`-rotate-[30deg] absolute -bottom-[425px] -left-[65px]  w-[00px]  z-10  `}> */}
                                <Image src='/images/SubtractYellow.png' width={1000} height={600} alt="wanna tech png" className={` w-[530px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[30px]  right-[60px] ${styles.imgRotate}    w-[560px]`}>
                            <Image src='/images/man.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default WhyUs