import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const NeverAlone = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>
                <div className='col-span-12 md:col-span-5 flex justify-center items-center'>
                    <div>
                        <h2 className={`text-white font-semibold 2xl:text-[65px] xl:text-[50px] md:text-[40px] text-[40px]  ${styles.shadow} leading-[80px] lg:leading-[40px] xl:leading-[80px] tracking-wide`}>never alone!</h2>

                        <p className='text-white font-bold xl:text-[18px] lg:text-[16px] text-[18px] pt-5'>We are right here every step of the way to help you create the course you want on our e-learning platform! Just contact your concierge and they’ll walk you through any part of the course process you need!</p>

                    </div>
                </div>
                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.scaleAnimation}  col-span-12 md:col-span-7 flex justify-center items-start`}>
                    <Image src='/images/neverAlone.png' width={450} height={450} alt="wanna tech png" className={``} />
                </div>

            </div>
        </>
    )
}

export default NeverAlone