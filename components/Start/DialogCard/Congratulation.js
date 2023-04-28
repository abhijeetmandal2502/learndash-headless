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
            <div className='md:mx-10'>

                <h3 className='text-center hidden md:block tracking-wider md:text-[61px] text-[24px] leading-tight pb-12'>congratulations! <br></br> your course has begun!</h3>
                {/* title for mobile */}
                <h3 className='text-center md:hidden  tracking-wider text-[30px] leading-tight pb-12'>congratulations! your course has begun!</h3>

                <div className="md:flex md:space-x-5 justify-between">

                    {congrateData && congrateData.map((item, index) => {
                        return (<>
                            <div key={index} className=" md:px-10 md:block flex justify-start items-start" >
                                <div className='md:flex justify-center items-center'>
                                    <AiOutlineCheck size={25} className='text-[#9747FF]' />
                                </div>
                                <div className='md:flex justify-center items-center' >
                                    <p className='md:text-center text-[18px]'>{item}</p>
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