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
                <div className='col-span-12 md:col-span-6 flex justify-center items-strat'>
                    <div>
                        <h2 className={`text-white font-semibold text-[70px] ${styles.shadow} leading-[80px] tracking-wide`}>Now what?</h2>
                        <h4 className='text-[35px] py-4'>now we enter<br></br> <br></br>contact:</h4>
                        {/* <Image src="/images/WhiteLogo.svg" width="350" height="250" alt="tech logo" /> */}
                        {
                            data?.map((item, id) => {
                                return (<>
                                    <div key={id} className='py-2'>
                                        <div className='flex space-x-2 items-center'>
                                            <div className='p-1.5 rounded-full bg-white'>
                                                <FaCheck className='font-bold text-green-500 ' size={15} />
                                            </div>
                                            <p className=' font-thin text-[18px] text-white'>{item}</p>
                                        </div>

                                    </div>
                                </>)

                            })
                        }

                    </div>
                </div>
                <div className='col-span-12 md:col-span-6 flex justify-center items-start'>
                    <div className={`${styles.shadow} ${styles.imgRotate} `}>
                        <Image src='/images/nowWhat.png' width={400} height={400} alt="wanna tech png" className={``} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default NowWhat