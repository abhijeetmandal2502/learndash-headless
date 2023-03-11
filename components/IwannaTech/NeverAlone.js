import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const NeverAlone = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>
                <div className='col-span-12 md:col-span-6 flex justify-center items-center'>
                    <div>
                        <h2 className={`text-white font-semibold text-[70px] ${styles.shadow} leading-[80px] tracking-wide`}>never alone!</h2>
                        {/* <h4 className='text-[35px] py-4'>tell us about <br></br> <br></br> your pedigree</h4> */}
                        {/* <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" /> */}
                        <p className='text-white font-bold text-[18px] pt-5'>We are right here every step of the way to help you create the course you want on our e-learning platform! Just contact your concierge and they’ll walk you through any part of the course process you need!</p>

                    </div>
                </div>
                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.scaleAnimation}  col-span-12 md:col-span-6 flex justify-center items-start`}>
                    <Image src='/images/neverAlone.png' width={700} height={700} alt="wanna tech png" className={``} />
                </div>

            </div>
        </>
    )
}

export default NeverAlone