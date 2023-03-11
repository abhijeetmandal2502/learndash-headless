import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const Ncbtmb = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>
                <div className='col-span-12 md:col-span-6 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold text-[60px] ${styles.shadow} leading-[80px] tracking-wide`}>Are both you AND your course NCBTMB Approved?</h2>
                        <button className=' mt-5 rounded-3xl border border-white px-7 py-3 text-white font-normal text-2xl hover:text-black hover:bg-white transition-all ease-in-out duration-1000'>
                            if not, click here!
                        </button>
                        <h4 className='text-[35px] py-4'>That’s kind of a big deal</h4>
                        <p className='text-white font-bold text-[18px] pt-5'> Compliance requires both Provider and Course to be pre-approved.</p>

                    </div>
                </div>
                <div className='col-span-12 md:col-span-6 flex justify-center items-start'>
                    <div className={`${styles.shadow} ${styles.imgRotate} `}>
                        <Image src='/images/ncbtmbOrange.png' width={500} height={500} alt="wanna tech png" className={``} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Ncbtmb