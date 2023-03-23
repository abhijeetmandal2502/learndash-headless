import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const Commission = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 xl:gap-20 lg:gap-10 ${styles.fadeAnimation}`}>
                <div className='col-span-12 md:col-span-6 flex justify-center items-strat'>
                    <div className='ml-20'>
                        <h2 className={`text-white font-semibold 2xl:text-[65px] lg:text-[50px] md:text-[40px] text-[40px]  ${styles.shadow} leading-[80px] lg:leading-[40px] xl:leading-[80px] tracking-wide`}>commission</h2>
                        {/* <h4 className='text-[35px] py-4'>tell us about <br></br> <br></br> your pedigree</h4> */}
                        <div className={`${styles.vertmove} mt-16 flex justify-center items-center`}>
                            <Image src="/images/money.png" width="250" height="200" alt="tech logo" />
                        </div>

                        <p className='text-white font-bold text-[18px] md:text-[16px] 2xl:text-[18px] pt-5'>earning are split 50/50 and you are paid once a month, forever!</p>

                    </div>
                </div>
                <div className='col-span-12 md:col-span-6 '>
                    <div className={`${styles.shadow} ${styles.imgRotate}   flex justify-center items-start`}>
                        <Image src='/images/commissionBanner.png' width={400} height={400} alt="wanna tech png" className={``} />
                    </div>
                    <p className='mt-5 px-16 text-white text-[19px] md:text-[16px] 2xl:text-[19px]'>…And you can check on your course’s progress and edit your course anytime on our realtime dashboard!</p>
                </div>

            </div>
        </>
    )
}

export default Commission