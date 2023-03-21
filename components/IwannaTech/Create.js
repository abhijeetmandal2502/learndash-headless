import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const Create = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>
                <div className='col-span-12 md:col-span-5 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold xl:text-[65px] lg:text-[42px] md:text-[40px] text-[40px]  ${styles.shadow} leading-[80px] xl:leading-[80px] lg:leading-[40px] tracking-wide`}>start creating</h2>
                        <p className='text-white font-bold text-[18px] xl:text-[18px] lg:text-[16px] lg:leading-[25px] xl:leading-[40px] pt-5'>Follow our easy step-by-step template to get your course organized for proper online structuring. Then jump in and create your masterpiece! <br></br>
                            Once we’ve reviewed and approved your course it’s time to go live and make money! <br></br>
                            Then create your next masterpiece! Simple!</p>

                    </div>
                </div>
                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.vertmove}  col-span-12 md:col-span-7 flex justify-center items-start xl:-mt-5 lg:-mt-3 -mt-5  `} >
                    <Image src='/images/create.png' width={550} height={550} alt="wanna tech png" className={``} />
                </div>

            </div>
        </>
    )
}

export default Create