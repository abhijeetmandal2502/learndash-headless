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

                <div className='flex justify-start col-span-12 md:col-span-6 items-strat'>
                    <div>
                        <h2 className={`text-white md:font-semibold leading-[100%]    fivexllargef font-bold ${styles.shadow} tracking-wide`}>so you <br />  wanna teach?</h2>
                        <p className='mt-2 font-thin text-white md:mt-2 lg:mt-4 dubblelargef'>cool! glad you’re here!</p>
                        <p className='mt-5 md:mt-10 triplelargef '>look around!</p>
                    </div>
                </div>

                {/* image for desktop */}
                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.vertmove} ${styles.imgbox}  col-span-12 md:col-span-6 md:flex hidden justify-center items-start 2xl:-mt-16 lg:-mt-0  `}>
                    <Image src='/images/iwannatech.png' width={700} height={700} alt="wanna tech png" className={``} />
                </div>

            </div>

        </>
    )
}

export default StartComponent






