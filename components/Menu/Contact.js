import React from 'react'
import { FaMobileAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
    return (
        <>
            <div className='bg-transparent'>
                <div className='text-white lg:text-[30px] 3xl:text-[40px] 4xl:text-[50px] text-[20px] font-normal font-Barlow py-2 '>
                    1234 address here<br></br>
                    city, state placeholder text
                </div>

                <div className='flex bg-transparent py-1 mt-10 items-center space-x-2'>
                    <FaMobileAlt size={30} className='text-white 3xl:w-10 3xl:h-10' />

                    <div className='text-white lg:text-[30px] 3xl:text-[40px] 4xl:text-[50px] text-[20px]'>
                        123-456-7890
                    </div>

                </div>
                <div className='flex bg-transparent py-1 items-center space-x-2'>

                    <AiOutlineMail size={30} className=' text-black 3xl:w-10 3xl:h-10' fill='white ' />


                    <div className='text-white lg:text-[30px] text-[20px] 3xl:text-[40px] 4xl:text-[50px]'>
                        email@cesimple.com
                    </div>

                </div>

                <div className=' flex  space-x-5 bg-transparent py-5 md:mt-16 items-center  '>
                    <FaFacebookF size={35} className=' rounded-full p-1.5 3xl:p-2.5 text-white bg-dakgray 3xl:w-16 3xl:h-16' />
                    <FaTwitter size={35} className='rounded-full p-1.5 3xl:p-2.5 text-white  bg-dakgray 3xl:w-16 3xl:h-16' />
                    <FaLinkedinIn size={35} className='rounded-full text-white p-1.5 3xl:p-2.5 bg-dakgray 3xl:w-16 3xl:h-16' />
                </div>

            </div>
        </>
    )
}

export default Contact