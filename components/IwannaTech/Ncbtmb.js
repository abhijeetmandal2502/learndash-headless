import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const Ncbtmb = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>

                <div className='col-span-12 md:col-span-7 flex justify-center items-start md:hidden '>
                    <div className={`${styles.shadow} ${styles.imgRotate} `}>
                        <Image src='/images/ncbtmbOrange.png' width={250} height={250} alt="wanna tech png" className={``} />
                    </div>
                </div>
                <div className='col-span-12 md:col-span-5 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-[600] 2xl:text-[62px] 3xl:text-[75px] lg:text-[40px] md:text-[45px] text-[30px]  ${styles.shadow} xl:leading-[70px] 3xl:leading-[75px] lg:leading-[50px] leading-[35px] md:leading-[50px]  tracking-wide`}>are both you <span className='border-b-4'>and</span> your course ncbtmb approved?</h2>
                        <button className=' mt-5 rounded-3xl border border-white px-7 py-2.5 text-white font-normal md:text-2xl text-md 3xl:text-4xl hover:text-black 4xl:text-5xl hover:bg-white transition-all ease-in-out duration-1000'>
                            if not, click here!
                        </button>
                        <h4 className='2xl:text-[35px] 3xl:2xl:text-[45px] 4xl:2xl:text-[60px] md:text-[25px] font-bold xl:py-4 md:py-4 3xl:md:py-6 py-4'>That’s kind of a big deal</h4>
                        <p className='text-white font-bold 2xl:text-[18px] 3xl:text-[26px] 4xl:text-[30px] md:text-[16px] xl:pt-5 lg:pt-0 md:py-4'> Compliance requires both Provider and Course to be pre-approved.</p>

                    </div>
                </div>
                <div className='col-span-12 md:col-span-7 hidden md:flex justify-center items-start xl:-mt-16 lg:-mt-10 -mt-10 '>
                    <div className={`${styles.shadow} ${styles.imgRotate} `}>
                        <Image src='/images/ncbtmbOrange.png' width={550} height={550} alt="wanna tech png" className={`3xl:w-[700px] 3xl:h-[700px]
                        4xl:w-[900px] 4xl:h-[900px]`} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Ncbtmb