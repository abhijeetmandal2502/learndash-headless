import Image from 'next/image';
import React from 'react'
import { useState } from "react";

import styles from '../../components/IwannaTech/IwanntTech.module.css';

const StartComponent = () => {




    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation} mt-8`}>
                <div className='col-span-12 md:col-span-6 flex justify-start items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold text-[70px] ${styles.shadow} leading-[80px] tracking-wide`}>so you <br></br> wanna teach?</h2>
                        <p className=' font-thin text-[40px] text-white'>cool! glad you’re here!</p>
                        <div className='mt-10 text-[37px]'>look around!</div>
                    </div>
                </div>

                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.vertmove}  col-span-12 md:col-span-6 flex justify-center items-start -mt-16 `}>
                    <Image src='/images/iwannatech.png' width={700} height={700} alt="wanna tech png" className={``} />
                </div>

            </div>

        </>
    )
}

export default StartComponent






