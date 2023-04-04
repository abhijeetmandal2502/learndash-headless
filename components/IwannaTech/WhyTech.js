import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const WhyTech = () => {

    const data = [
        {
            title: "so you wanna teach? ",
            content: "There’s no denying it! That’s why you’re here!"
        },
        {
            title: "passive income",
            content: "create the course once,get paid forever!"
        },
        {
            title: "zero investment",
            content: "Not one penny! Your only investment is time to craft your course!"
        },
        {
            title: "self-service",
            content: "Create & edit your course with our simple e-learning platform!"
        },
        {
            title: "customer service, every step of the way!",
            content: "We’re with you! Contact us anytime for assistance with anything! Simple!"
        },
    ]
    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>

                <div className={`${styles.shadow}  ${styles.imgRotate}  col-span-12 md:col-span-6 flex justify-center items-start 2xl:-mt-20 md:hidden`}>
                    <Image src='/images/whyTech.png' width={700} height={700} alt="wanna tech png" className={``} />
                </div>


                <div className='col-span-12 md:col-span-6 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold 2xl:text-[70px] 3xl:text-[100px] md:text-[45px] text-[30px] ${styles.shadow} leading-[80px] tracking-wide`}>Why teach?</h2>
                        {
                            data?.map((item, id) => {
                                return (<>
                                    <div key={id} className='2xl:py-2 py-1'>
                                        <div className='flex space-x-2 items-center'>
                                            <div className='p-1.5 rounded-full bg-white'>
                                                <FaCheck className='font-bold 3xl:w-7 3xl:h-7' size={15} />
                                            </div>
                                            <h6 className='font-bold 2xl:text-[22px] lg:text-[18px] md:text-[16px] 3xl:text-[30px] 4xl:text-[35px] text-[16px]'>{item.title}</h6>
                                        </div>
                                        <p className=' font-thin 2xl:text-[19px] lg:text-[14px] md:text-[13px] 3xl:text-[24px] 4xl:text-[30px] text-[14px] text-white'>{item.content}</p>
                                    </div>
                                </>)
                            })
                        }

                    </div>
                </div>

                <div className={`${styles.shadow}  ${styles.imgRotate}  col-span-12 md:col-span-6 md:flex justify-center items-start 2xl:-mt-20   hidden `}>
                    <Image src='/images/whyTech.png' width={700} height={700} alt="wanna tech png" className={``} />
                </div>

            </div>
        </>
    )
}

export default WhyTech