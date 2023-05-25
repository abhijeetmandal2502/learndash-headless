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
                <div className='flex items-start justify-center col-span-12 md:col-span-7 md:hidden '>
                    <div className={`${styles.shadow} ${styles.imgRotateNowWhat} `}>
                        <Image src='/images/nowWhat.png' width={250} height={250} alt="wanna tech png" />
                    </div>
                </div>
                <div className='flex justify-center col-span-12 md:col-span-5 items-strat'>
                    <div className='mt-5'>
                        <h2 className={`text-white font-semibold   fivexllargef ${styles.shadow} leading-[100%]  tracking-wide`}>Now what?
                        </h2>
                        <h4 className='py-4 font-semibold fourxllargef 3xl:py-8'>now we enter<br></br>contact:
                        </h4>

                        {/* <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" /> */}
                        {
                            data?.map((item, id) => {
                                return (<>
                                    <div key={id} className='py-2'>
                                        <div className='flex items-start space-x-2'>
                                            <div className='md:p-1.5 p-1 rounded-full mediumf bg-white'>
                                                <FaCheck className='font-bold text-green mediumf' />
                                            </div>
                                            <p className='font-thin leading-[120%] text-white largef'>{item}</p>
                                        </div>

                                    </div>
                                </>)

                            })
                        }
                    </div>
                </div>
                {/* <div className='items-start justify-center hidden col-span-12 md:col-span-7 md:flex 2xl:-mt-32 md:-mt-24'>
                    <div className={`${styles.shadow} ${styles.imgRotateNowWhat} ${styles.imgbox} `}>
                        <Image src='/images/nowWhat.png' width={550} height={550} alt="wanna tech png" className={`3xl:w-[700px] 3xl:h-[700px]
                        4xl:w-[900px] 4xl:h-[900px]`} />
                    </div>
                </div> */}
                <div className={`${styles.shadow} ${styles.imgRotateNowWhat}  ${styles.imgbox}  mt-[-15%] 2xl:mt-[-18%] col-span-12 md:col-span-6 md:flex hidden justify-center items-start   `}>
                    <Image src='/images/nowWhat.png' width={700} height={700} alt="wanna tech png" className={``} />
                </div>

            </div>
        </>
    )
}

export default NowWhat