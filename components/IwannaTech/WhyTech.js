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
            <div className=' bg-transparent grid grid-cols-12 '>
                <div className='col-span-12 md:col-span-6 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold text-[70px] ${styles.shadow} leading-[80px] tracking-wide`}>Why teach?</h2>
                        {
                            data?.map((item, id) => {
                                return (<>
                                    <div className='py-2'>
                                        <div className='flex space-x-2 items-center'>
                                            <div className='p-1.5 rounded-full bg-white'>
                                                <FaCheck className='font-bold' size={15} />
                                            </div>
                                            <h6 className='font-bold text-[20px]'>{item.title}</h6>
                                        </div>
                                        <p className=' font-thin text-[18px] text-white'>{item.content}</p>
                                    </div>
                                </>)

                            })
                        }

                    </div>
                </div>

                <div className={`${styles.shadow}  ${styles.imgRotate}  col-span-12 md:col-span-6 flex justify-center items-start`}>
                    <Image src='/images/whyTech.png' width={700} height={700} alt="wanna tech png" className={``} />
                </div>

            </div>
        </>
    )
}

export default WhyTech