import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const WhyUs = () => {



    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>
                <div className='col-span-12 md:col-span-6 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold text-[70px] ${styles.shadow} leading-[80px] tracking-wide`}>Why Us?</h2>
                        <h4 className='text-[35px] py-4'>because we’re</h4>
                        <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" />
                        <p className='text-white font-bold text-[18px] pt-5'>You’ve probably already explored around and noticed we do things a little differently from other online ce sites!
                            <br></br><br></br>
                            We’re happy to disrupt the universe, and we’d love to have you part of it!</p>

                    </div>
                </div>
                <div className=' relative col-span-12 md:col-span-6 flex justify-center items-start max-h-[400px]'>
                    <div className={` relative overflow-hidden  `}>
                        <Image src='/images/RectangleWhyUs.png' width={350} height={400} alt="wanna tech png" className={``} />
                        <div className={` absolute -bottom-[20px]  left-[0%]  ${styles.imgRotate}    col-span-12 md:col-span-6 flex justify-center items-start `}>
                            <Image src='/images/man.png' width={500} height={500} alt="wanna tech png" className={`h-[350px] w-[500px] opacity-1`} />
                        </div>


                    </div>
                    <div className={`${styles.rotatebgImg} ${styles.aboutMain} absolute  top-[220px] right-[0px]`}>
                        <svg width="400" height="100">
                            <rect width="400" height="100" fill='#E6A84B' />
                            Sorry, your browser does not support inline SVG.
                        </svg></div>

                </div>

            </div>
        </>
    )
}

export default WhyUs