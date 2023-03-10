import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const WhyUs = () => {

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
                        <h2 className={`text-white font-semibold text-[70px] ${styles.shadow} leading-[80px] tracking-wide`}>Why Us?</h2>
                        <h4>because we’re</h4>
                        <Image src="/images/WhiteLogo.svg" width="200" height="200" alt="tech logo" />
                        <p>You’ve probably already explored around and noticed we do things a little differently from other online ce sites!
                            We’re happy to disrupt the universe, and we’d love to have you part of it!</p>

                    </div>
                </div>

                <div className={`${styles.shadow}  ${styles.imgRotate}  col-span-12 md:col-span-6 flex justify-center items-start`}>
                    <Image src='/images/WhyUs.svg' width={700} height={700} alt="wanna tech png" className={``} />
                </div>

            </div>
        </>
    )
}

export default WhyUs