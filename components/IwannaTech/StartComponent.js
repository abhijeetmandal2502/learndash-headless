import Image from 'next/image';
import React from 'react'
import { useState } from "react";

import styles from '../../components/IwannaTech/IwanntTech.module.css';

const StartComponent = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation} xl:mt-8 lg:mt-8 mt-8`}>
                {/* image for mobile */}
                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.vertmove}  col-span-12 md:col-span-6 flex  md:hidden justify-center items-start   `}>
                    <Image src='/images/iwannatech.png' width={200} height={200} alt="wanna tech png" className={``} />
                </div>

                <div className='col-span-12 md:col-span-6 flex justify-start items-strat'>
                    <div>
                        <h2 className={`text-white md:font-semibold   lg:text-[50px] md:text-[40px] text-[35px]  font-bold ${styles.shadow} leading-[40px] lg:leading-[70px] md:leading-[60px] 3xl:leading-[110px] 4xl:leading-[120px]tracking-wide`}>so you  wanna teach?</h2>
                        <p className=' md:mt-0 mt-5 font-thin md:text-[40px] text-[19px]  text-white'>cool! glad you’re here!</p>
                        <div className='md:mt-10 mt-5 text-[30px] md:text-[37px] '>look around!</div>
                    </div>
                </div>

                {/* image for desktop */}
                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.vertmove}  col-span-12 md:col-span-6 md:flex hidden justify-center items-start 2xl:-mt-16 lg:-mt-0  `}>
                    <Image src='/images/iwannatech.png' width={700} height={700} alt="wanna tech png" className={``} />
                </div>

            </div>

        </>
    )
}

export default StartComponent






