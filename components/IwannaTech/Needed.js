import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const Needed = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>
                <div className='col-span-12 md:col-span-5 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-[600] 2xl:text-[70px] text-[60px] ${styles.shadow} leading-[80px] tracking-wide`}>what’s needed?</h2>

                        {/* <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" /> */}
                        <p className='text-white font-bold 2xl:text-[18px] text-[16px] pt-5'> Both you AND your course need to already be approved by NCBTMB
                            <br></br><br></br>  Also, your course cannot teach Massage Technique, or Soft Tissue Manipulation.</p>
                        <h4 className='text-[35px] font-semibold py-4'>cool! glad you’re here!!</h4>

                    </div>
                </div>
                <div className='col-span-12 md:col-span-7 flex justify-center items-start -mt-16'>
                    <div className={`${styles.shadow} ${styles.imgRotate}  `}>
                        <Image src='/images/needed.png' width={550} height={550} alt="wanna tech png" className={``} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Needed