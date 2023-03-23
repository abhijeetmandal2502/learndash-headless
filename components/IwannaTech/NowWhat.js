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
                <div className='col-span-12 md:col-span-5 flex justify-center items-strat'>
                    <div className='mt-5'>
                        <h2 className={`text-white font-semibold 2xl:text-[65px] lg:text-[50px] md:text-[40px] text-[40px]  ${styles.shadow} leading-[80px] md:leading-[40px] 2xl:leading-[80px] tracking-wide`}>Now what?</h2>
                        <h4 className='2xl:text-[45px] md:text-[30px] text-[30px]  font-bold py-4 leading-[40px]'>now we enter<br></br>contact:</h4>
                        {/* <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" /> */}
                        {
                            data?.map((item, id) => {
                                return (<>
                                    <div key={id} className='py-2'>
                                        <div className='flex space-x-2 items-center'>
                                            <div className='p-1.5 rounded-full bg-white'>
                                                <FaCheck className='font-bold text-green-500 ' size={15} />
                                            </div>
                                            <p className=' font-thin text-[18px] md:text-[16px] xl:text-[18px] text-white'>{item}</p>
                                        </div>

                                    </div>
                                </>)

                            })
                        }

                    </div>
                </div>
                <div className='col-span-12 md:col-span-7 flex justify-center items-start 2xl:-mt-32 md:-mt-24'>
                    <div className={`${styles.shadow} ${styles.imgRotateNowWhat} `}>
                        <Image src='/images/nowWhat.png' width={550} height={550} alt="wanna tech png" className={``} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default NowWhat