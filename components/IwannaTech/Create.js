import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const Create = () => {

    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>

                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.vertmove} md:hidden col-span-12 md:col-span-7 flex justify-center items-start mt-5`} >
                    <Image src='/images/create.png' width={250} height={250} alt="wanna tech png" className={``} />
                </div>
                <div className='col-span-12 md:col-span-5 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold 2xl:text-[65px] 3xl:text-[95px] 4xl:text-[120px] xl:text-[50px]  md:text-[40px] text-[30px]  ${styles.shadow} md:leading-[80px] leading-[40px] xl:leading-[80px] 3xl:leading-[110px] 4xl:leading-[120px] lg:leading-[40px] tracking-wide`}>start creating</h2>
                        <p className='text-white font-bold text-[14px] 2xl:text-[18px] 3xl:text-[24px] md:text-[16px] lg:leading-[25px]
                        3xl:leading-[40px] xl:leading-[40px] pt-5'>Follow our easy step-by-step template to get your course organized for proper online structuring. Then jump in and create your masterpiece! <br></br>
                            Once we’ve reviewed and approved your course it’s time to go live and make money! <br></br>
                            Then create your next masterpiece! Simple!</p>

                    </div>
                </div>
                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.vertmove}  col-span-12 md:col-span-7 hidden md:flex justify-center items-start xl:-mt-5 lg:-mt-3 -mt-5  `} >
                    <Image src='/images/create.png' width={550} height={550} alt="wanna tech png" className={`3xl:w-[700px] 3xl:h-[700px]
                        4xl:w-[900px] 4xl:h-[900px]`} />
                </div>

            </div>
        </>
    )
}

export default Create