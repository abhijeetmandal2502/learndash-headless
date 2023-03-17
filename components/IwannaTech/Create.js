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
                        <h2 className={`text-white font-[600] text-[65px] ${styles.shadow} leading-[80px] tracking-wide`}>start creating</h2>
                        {/* <h4 className='text-[35px] py-4'>tell us about <br></br> <br></br> your pedigree</h4> */}
                        {/* <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" /> */}
                        <p className='text-white font-bold text-[18px] pt-5'>Follow our easy step-by-step template to get your course organized for proper online structuring. Then jump in and create your masterpiece!<br></br> <br></br>
                            Once we’ve reviewed and approved your course it’s time to go live and make money!<br></br> <br></br>
                            Then create your next masterpiece! Simple!</p>

                    </div>
                </div>
                <div className={`${styles.shadow} ${styles.bannerAnimation} ${styles.vertmove}  col-span-12 md:col-span-7 flex justify-center items-start -mt-5 `} >
                    <Image src='/images/create.png' width={550} height={550} alt="wanna tech png" className={``} />
                </div>

            </div>
        </>
    )
}

export default Create