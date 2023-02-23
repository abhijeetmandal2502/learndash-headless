import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

import styles from '../../Start/Start.module.css'

const Congratulation = () => {

    const congrateData = [
        'come and go  as you please',
        'stress free quiz at the end',
        'questions ? contact our concierge any time',

    ]
    return (
        <>
            <div className='mx-10'>

                <h3 className='text-center  tracking-wider text-[61px] leading-tight pb-12'>congratulations! <br></br> your course has begun!</h3>

                <div className="flex space-x-5 justify-between">

                    {congrateData && congrateData.map((item, index) => {
                        return (<>
                            <div key={index} className=" px-10  " >
                                <div className='flex justify-center items-center'>
                                    <AiOutlineCheck size={25} className='text-[#9747FF]' />
                                </div>
                                <div className='flex justify-center items-center' >
                                    <p className='text-center'>{item}</p>
                                </div>
                            </div>
                        </>)
                    })}

                </div>



                <div className='flex justify-center items-center py-4'>
                    <button className={` px-10 mt-4 py-2 tracking-wide text-white ${styles.submitbtnbg} rounded-3xl text-[18px] font-semibold traking-[0.02em] focus:outline-none`} type="submit">Continue To Course

                    </button>
                </div>
                <div className='flex justify-center items-center py-4'>
                    <button className={`font-semibold border-b text-voilet  border-black leading-4 text-center`}>
                        go to my room
                    </button>
                </div>
            </div>

        </>
    )
}

export default Congratulation