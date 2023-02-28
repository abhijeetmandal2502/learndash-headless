import React from 'react'
import { FaMobileAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
    return (
        <>
            <div className='bg-transparent'>
                <div className='text-white text-[30px] font-normal font-Barlow py-2 '>
                    1234 address here<br></br>
                    city, state placeholder text
                </div>

                <div className='flex bg-transparent py-1 mt-10 items-center space-x-2'>
                    <FaMobileAlt size={30} className='text-white' />

                    <div className='text-white text-[30px]'>
                        123-456-7890
                    </div>

                </div>
                <div className='flex bg-transparent py-1 items-center space-x-2'>

                    <AiOutlineMail size={30} className=' text-black ' fill='white' />


                    <div className='text-white text-[30px]'>
                        email@cesimple.com
                    </div>

                </div>

                <div className=' flex  space-x-5 bg-transparent py-5 mt-16 items-center  '>
                    <FaFacebookF size={35} className=' rounded-full p-1.5 text-white bg-dakgray' />
                    <FaTwitter size={35} className='rounded-full p-1.5 text-white  bg-dakgray' />
                    <FaLinkedinIn size={35} className='rounded-full text-white p-1.5 bg-dakgray' />
                </div>

            </div>
        </>
    )
}

export default Contact