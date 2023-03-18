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

                {/* <div className={`relative col-span-12 md:col-span-7 h-[100vh]  ${loading ? styles.tranatationNone : 'opacity-0'}`}>
                    <div className={` relative  w-[100%] h-[100%]  `}>
                        <div className={`absolute top-[6%]  right-[20%]  w-[70%] `}>
                            <Image src='/images/getStartedRectangle.png' width={1000} height={600} alt="wanna tech png" className={`w-[100%]`} />
                        </div>

                        <div className={` absolute top-[2.2%]  right-[18%]   ${styles.animateGetStartedMan} w-[75%] h-[100%] ${styles.bgMainGetStarted}`}>
                            <Image src='/images/getStartedMan.png' width={1000} height={800} alt="wanna tech png" className={` `} />
                        </div>
                </div> */}



                <div className={`relative col-span-12 md:col-span-7 h-[100vh] ${loading ? styles.tranatationNone : 'opacity-0'} mt-5 `}>
                    {/* <div className={` absolute  left-1/8 top-1/8 -translate-x-1/8 -translate-y-1/8  `}> */}

                    <div className={` relative  flex 2xl:mr-20  mr-0`}>
                        <div className='relative overflow-hidden w-full h-[500px]  '>
                            {/* <div className={` w-[500px] absolute bottom-[0px] left-[92.5px`}> */}
                            <div className={`w-[500px] absolute bottom-[46px] right-[50.5px]`}>

                                <Image src='/images/getStartedRectangle.png' width={1000} height={600} alt="wanna tech png" className={` w-[500px]`} />
                            </div>
                            <div className={`-rotate-[30deg] absolute -bottom-[170px] -right-[80.5px]  z-10  `}>
                                {/* <div className={`-rotate-[30deg] absolute -bottom-[425px] -left-[65px]  w-[00px]  z-10  `}> */}
                                <Image src='/images/SubtractHotpink.png' width={1000} height={600} alt="wanna tech png" className={` w-[530px]`} />

                            </div>
                        </div>
                        <div className={` absolute bottom-[27px]  right-[60px] ${styles.imgRotate}    w-[560px]`}>
                            <Image src='/images/getStartedMan.png' width={1000} height={700} alt="wanna tech png" className={` `} />
                        </div>
                    </div>
                    {/* </div> */}
                </div>



            </div>
        </>
    )
}

export default GetStarted