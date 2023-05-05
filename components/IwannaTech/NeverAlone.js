import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const NeverAlone = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>

                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.scaleAnimation}  col-span-12 md:col-span-7 flex justify-center items-start md:hidden`}>
                    <Image src='/images/neverAlone.png' width={300} height={300} alt="wanna tech png" />
                </div>

                <div className='col-span-12 md:col-span-5 flex justify-center items-center'>
                    <div>
                        <h2 className={`text-white font-semibold  md:text-[40px] dubblelargef  ${styles.shadow} md:leading-[80px] leading-[30px] lg:leading-[40px] xl:leading-[80px] tracking-wide`}>never alone!
                        </h2>

                        <p className='text-white font-bold smallf pt-5'>We are right here every step of the way to help you create the course you want on our e-learning platform! Just contact your concierge and they’ll walk you through any part of the course process you need!</p>
                    </div>
                </div>
                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.scaleAnimation}  col-span-12 md:col-span-7 md:flex hidden justify-center items-start`}>
                    <Image src='/images/neverAlone.png' width={450} height={450} alt="wanna tech png" className={`3xl:w-[600px] 3xl:h-[600px]
                        4xl:w-[900px] 4xl:h-[900px]`} />
                </div>

            </div>
        </>
    )
}

export default NeverAlone