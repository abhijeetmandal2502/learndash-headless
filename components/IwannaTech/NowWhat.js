import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

const NowWhat = () => {
    const data = [
        'there is no cost to you',
        'you re under no obligation either party cancel anytime.',
        'we are none of your material you retain all rights !',

    ]
    return (
        <>
            <div className={`bg-transparent grid grid-cols-12 ${styles.fadeAnimation}`}>
                <div className='col-span-12 md:col-span-7 md:hidden flex justify-center items-start '>
                    <div className={`${styles.shadow} ${styles.imgRotateNowWhat} `}>
                        <Image src='/images/nowWhat.png' width={250} height={250} alt="wanna tech png" />
                    </div>
                </div>
                <div className='col-span-12 md:col-span-5 flex justify-center items-strat'>
                    <div className='mt-5'>
                        <h2 className={`text-white font-semibold  md:text-[40px] dubblelargef  ${styles.shadow} leading-[0px] md:leading-[40px] 2xl:leading-[80px] tracking-wide`}>Now what?
                        </h2>
                        <h4 className=' dubblelargef text-black font-bold py-4 3xl:leading-[60px] leading-[25px] md:mt-0 mt-5'>now we enter<br></br>contact:
                        </h4>

                        {/* <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" /> */}
                        {
                            data?.map((item, id) => {
                                return (<>
                                    <div key={id} className='py-2'>
                                        <div className='flex space-x-2 items-center'>
                                            <div className='md:p-1.5 p-1 rounded-full bg-white'>
                                                <FaCheck className='font-bold text-green-500 3xl:w-7 3xl:h-7' size={15} />
                                            </div>
                                            <p className=' font-thin smallf text-white'>{item}</p>
                                        </div>

                                    </div>
                                </>)

                            })
                        }

                    </div>
                </div>
                <div className='  hidden col-span-12 md:col-span-7 md:flex justify-center items-start 2xl:-mt-32 md:-mt-24'>
                    <div className={`${styles.shadow} ${styles.imgRotateNowWhat} `}>
                        <Image src='/images/nowWhat.png' width={550} height={550} alt="wanna tech png" className={`3xl:w-[700px] 3xl:h-[700px]
                        4xl:w-[900px] 4xl:h-[900px]`} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default NowWhat