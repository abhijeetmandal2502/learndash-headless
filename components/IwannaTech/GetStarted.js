import React, { useEffect, useState } from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const GetStarted = ({ activeTabIndex }) => {

    const [loading, setLoading] = useState(false)
    //console.log('res', loading, activeTabIndex)

    setTimeout(() => {
        if (activeTabIndex === 11) {
            setLoading(true);
        }

        else {
            setLoading(false);
        }
    }, 1000)


    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}   `}>
                <div className='col-span-12 md:col-span-5 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold text-[65px] ${styles.shadow} leading-[80px] tracking-wide`}>ready to get started? </h2>
                        {/* <h4 className='text-[35px] py-4'>That’s kind of a big deal</h4> */}

                        <button className=' mt-5 rounded-3xl border border-white px-7 py-3 text-white font-normal text-2xl hover:text-black hover:bg-white transition-all ease-in-out duration-1000'>
                            click here!
                        </button>
                        <p className='text-white font-bold text-[18px] tracking-wide pt-5'> Your time has come! Make it happen!</p>

                    </div>
                </div>

                <div className={`relative col-span-12 md:col-span-7 h-[100vh]  ${loading ? styles.tranatationNone : 'opacity-0'}`}>
                    <div className={` relative  w-[100%] h-[100%]  `}>
                        <div className={`absolute top-[6%]  right-[20%]  w-[70%] `}>
                            <Image src='/images/getStartedRectangle.png' width={1000} height={600} alt="wanna tech png" className={`w-[100%]`} />
                        </div>

                        <div className={` absolute top-[2.2%]  right-[18%]   ${styles.animateGetStartedMan} w-[75%] h-[100%] ${styles.bgMainGetStarted}`}>
                            <Image src='/images/getStartedMan.png' width={1000} height={800} alt="wanna tech png" className={` `} />
                        </div>

                        <div className={`-rotate-[31deg] 2xl:top-[31.5%] top-[29.8%]  right-[10.5%] absolute  w-[74%] h-[20%] ${styles.bgcoverbottomGetStarted}`} >
                            <svg viewBox="0 0 450 378" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.659668L0 378L450 378V1.20398C442.38 63.947 388.934 112.555 324.135 112.555L125.93 112.555C60.9436 112.555 7.37568 63.6656 0 0.659668Z" fill="#96245A" />
                            </svg>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default GetStarted