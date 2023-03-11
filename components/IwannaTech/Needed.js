import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const Needed = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>
                <div className='col-span-12 md:col-span-6 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold text-[70px] ${styles.shadow} leading-[80px] tracking-wide`}>what’s needed?</h2>

                        {/* <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" /> */}
                        <p className='text-white font-bold text-[18px] pt-5'> Both you AND your course need to already be approved by NCBTMB
                            <br></br><br></br>  Also, your course cannot teach Massage Technique, or Soft Tissue Manipulation.</p>
                        <h4 className='text-[35px] py-4'>cool! glad you’re here!!</h4>

                    </div>
                </div>
                <div className='col-span-12 md:col-span-6 flex justify-center items-start'>
                    <div className={`${styles.shadow} ${styles.imgRotate} `}>
                        <Image src='/images/needed.png' width={400} height={400} alt="wanna tech png" className={``} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Needed