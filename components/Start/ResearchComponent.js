import Image from 'next/image'
import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'

import styles from '../Start/Start.module.css'

const ResearchComponent = () => {

    const courseData = [
        'ncbtmb approved',
        'start course instantly',
        'log in / out anytime',
        'finish with our ‘flunk-proof’ quiz',
        'instant certificate',
    ]

    return (
        <>

            <div className='bg-transparent  '>
                <div className='  border-b-2 border-bordergray py-5'>
                    <h2 className='text-[35px] leading-[50px]'>
                        using research
                        to market your practice
                    </h2>

                    <div className='flex space-x-5 items-center py-3 '>

                        <div className='flex space-x-1 cursor-pointer  items-center'>
                            <Image src="/images/GaelWood.png" width={75} height={75} alt="author" />

                            <h3 className={`${styles.element} border-b border-bordergray leading-4 text-[16px]`} >Geal Wood</h3>

                        </div>
                        <div className='flex space-x-1.5 items-center'>
                            <MdOutlineWatchLater size={20} />

                            <h3 className='font-semibold text-[16px]'>4 Hours</h3>

                        </div>

                    </div>

                    <p className='py-2 text-[18px] leading-[27px]'>Do you know the difference in valid research and website hype? Learn basic concepts of research...</p>
                    <button className={`font-semibold border-b ${styles.element} border-black leading-4`}>
                        show more
                    </button>


                </div>



                <div className='py-8'>
                    {courseData && courseData.map((item, index) => {
                        return (
                            <div key={index} className='flex items-center space-x-4 py-1.5'>
                                <AiOutlineCheck size={25} className='text-[#9747FF]' />
                                <p className='text-[16px]'>{item}</p>
                            </div>
                        )
                    })}


                    <button className=' border-b border-black leading-5 font-semibold text-[19px] pt-8'>
                        read our refund policy
                    </button>
                </div>

            </div>
        </>
    )
}

export default ResearchComponent