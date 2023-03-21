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
                        <h2 className={`text-white font-semibold xl:text-[65px] lg:text-[50px] md:text-[40px] text-[40px]  ${styles.shadow} leading-[80px] lg:leading-[60px] xl:leading-[80px] tracking-wide`}>ready to get started? </h2>
                        <button className=' mt-5 rounded-3xl border border-white px-7 py-2.5 text-white font-normal text-2xl hover:text-black hover:bg-white transition-all ease-in-out duration-1000'>
                            click here!
                        </button>
                        <p className='text-white font-bold text-[18px] xl:text-[16px] lg:text-[16px] tracking-wide pt-5'> Your time has come! Make it happen!</p>

                    </div>
                </div>

                <div className={`relative col-span-12 md:col-span-7 h-[100vh] xl:block lg:hidden ${loading ? styles.tranatationNone : 'opacity-0'} mt-5 `}>
                    <div className={` relative  flex 2xl:mr-20  mr-0`}>
                        <div className='relative overflow-hidden w-full h-[500px]  '>
                            <div className={`w-[500px] absolute bottom-[46px] right-[50.5px]`}>

                                <Image src='/images/getStartedRectangle.png' width={1000} height={600} alt="wanna tech png" className={` w-[500px]`} />
                            </div>
                            <div className={`-rotate-[30deg] absolute -bottom-[170px] -right-[80.5px]  z-10  `}>
                                <Image src='/images/SubtractHotpink.png' width={1000} height={600} alt="wanna tech png" className={` w-[530px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[27px]  right-[60px] ${styles.imgRotate}    w-[560px]`}>
                            <Image src='/images/getStartedMan.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>
                    </div>
                </div>

                <div className={`relative col-span-12 md:col-span-7 h-[100vh] xl:hidden lg:block ${loading ? styles.tranatationNone : 'opacity-0'} bottom-16 `}>

                    <div className={` relative  flex xl:mr-20 md:-mr-10 lg:-mr-16`}>
                        <div className='relative overflow-hidden w-full h-[500px]  '>
                            <div className={`w-[400px] absolute bottom-[46px] right-[50.5px]`}>

                                <Image src='/images/getStartedRectangle.png' width={1000} height={600} alt="wanna tech png" className={` w-[500px]`} />
                            </div>
                            <div className={`-rotate-[32deg] absolute -bottom-[130px] -right-[80.5px]  z-10 `}>
                                <Image src='/images/SubtractHotpink.png' width={1000} height={600} alt="wanna tech png" className={` w-[450px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[30px]  right-[60px] ${styles.imgRotate} w-[450px]`}>
                            <Image src='/images/getStartedMan.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>

                    </div>
                </div>



            </div>
        </>
    )
}

export default GetStarted