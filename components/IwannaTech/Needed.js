import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const Needed = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>

                <div className=' md:hidden  col-span-12 md:col-span-7 flex justify-center items-start '>
                    <div className={`${styles.shadow} ${styles.imgRotate}  `}>
                        <Image src='/images/needed.png' width={350} height={350} alt="wanna tech png" className={``} />
                    </div>
                </div>


                <div className='col-span-12 md:col-span-5 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold 2xl:text-[70px] 3xl:text-[100px] 4xl:text-[120px] lg:text-[50px] md:text-[40px] text-[32px] ${styles.shadow} 2xl:leading-[80px] 3xl:leading-[100px] 4xl:leading-[100px] lg:leading-[60px]  tracking-wide`}>what’s needed?</h2>

                        {/* <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" /> */}
                        <p className='text-white font-bold 2xl:text-[18px] 3xl:text-[28px] 4xl:text-[35px] md:text-[16px] text-[14px] pt-5'> Both you AND your course need to already be approved by NCBTMB
                            <br></br><br></br>  Also, your course cannot teach Massage Technique, or Soft Tissue Manipulation.</p>
                        <h4 className='2xl:text-[35px] 3xl:2xl:text-[50px] lg:text-[25px] font-semibold 3xl:py-6 py-4'>cool! glad you’re here!!</h4>

                    </div>
                </div>
                <div className='col-span-12 md:col-span-7 hidden md:flex justify-center items-start -mt-16 xl:-mt-16 lg:-mt-10'>
                    <div className={`${styles.shadow} ${styles.imgRotate}  `}>
                        <Image src='/images/needed.png' width={550} height={550} alt="wanna tech png" className={`3xl:w-[700px] 3xl:h-[700px]
                        4xl:w-[900px] 4xl:h-[900px]`} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Needed