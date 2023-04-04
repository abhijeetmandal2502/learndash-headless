import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const WhyNow = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>

                {/* for mobile */}

                <div className=' md:hidden col-span-12 md:col-span-7 flex justify-center items-start'>
                    <div className={`${styles.shadow} ${styles.scaleAnimation} mt-10 `}>
                        <Image src='/images/whyNow.png' width={250} height={250} alt="wanna tech png" className={``} />
                    </div>
                </div>

                {/* for desktop */}

                <div className='col-span-12 md:col-span-5 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold 2xl:text-[70px] 3xl:text-[100px] 4xl:text-[120px] lg:text-[50px] md:text-[40px] text-[40px] ${styles.shadow} xl:leading-[80px] leading-[20px] md:leading-[50px]  tracking-wide`}>why now?</h2>
                        <h4 className=' leading-10 md:text-[40px] text-[30px] font-bold 2xl:pt-10 pt-5 pb-4'>we ve been <br></br> here 15 years !</h4>
                        <p className='text-white font-bold 2xl:text-[18px] 3xl:text-[24px] md:text-[16px] text-[14px] md:pt-5'>But it seems just over the last few years, Online Continuing Education has exploded thanks to improved tech, and increased concerns for social distancing!
                            <br></br><br></br>
                            We want to help you succeed and we have created a nice e-learning platform to do it!</p>

                    </div>
                </div>
                <div className=' hidden  col-span-12 md:col-span-7 md:flex justify-center items-start'>
                    <div className={`${styles.shadow} ${styles.scaleAnimation} -mt-10 `}>
                        <Image src='/images/whyNow.png' width={500} height={500} alt="wanna tech png" className={`3xl:w-[700px] 3xl:h-[700px]
                        4xl:w-[900px] 4xl:h-[900px]`} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default WhyNow