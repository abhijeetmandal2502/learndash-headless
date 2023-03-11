import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const GetStarted = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>
                <div className='col-span-12 md:col-span-6 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold text-[70px] ${styles.shadow} leading-[80px] tracking-wide`}>ready to get started? </h2>
                        {/* <h4 className='text-[35px] py-4'>That’s kind of a big deal</h4> */}

                        <button className=' mt-5 rounded-3xl border border-white px-7 py-3 text-white font-normal text-2xl hover:text-black hover:bg-white transition-all ease-in-out duration-1000'>
                            click here!
                        </button>
                        <p className='text-white font-bold text-[18px] tracking-wide pt-5'> Your time has come! Make it happen!</p>

                    </div>
                </div>
                <div className=' relative col-span-12 md:col-span-6 flex justify-center items-start'>
                    <div className={`${styles.shadow} `}>
                        <Image src='/images/getStartedRectangle.png' width={400} height={400} alt="wanna tech png" className={``} />
                    </div>

                    <div className={` absolute top-[10px]  left-1/4 ${styles.shadow} ${styles.fadeAnimationInfinite}    col-span-12 md:col-span-6 flex justify-center items-start`}>
                        <Image src='/images/getStartedMan.png' width={300} height={300} alt="wanna tech png" className={` opacity-1`} />
                    </div>
                    {/* <div className={` absolute -top-0  left-0 ${styles.shadow}     col-span-12 md:col-span-6 flex justify-center items-start`}>
                        <Image src="/images/getStartedShadow.png" width="100" height="100" alt="shadow png" />
                    </div> */}
                </div>

            </div>
        </>
    )
}

export default GetStarted