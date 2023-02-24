import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BiLeftArrowAlt } from 'react-icons/bi';

import styles from '../ForgetPassword/ForgetPassword.module.css'

const ForgetPasswordModel = ({ HideForgetPasswordModel, changeDuration }) => {
    return (
        <>
            <div className=" relative ">
                {/* <div className={` bg-transparent relative  border border-bordergray `}> */}
                <div className='flex justify-between pb-5 '>
                    <button className=' font-normal py-2 pb-4' onClick={() => HideForgetPasswordModel()}>
                        <div className='flex justify-center items-center space-x-2'>
                            <BiLeftArrowAlt size={25} />
                            <span className='font-semibold'>Back to login</span>
                        </div></button>

                </div>

                <button className='absolute top-3 right-3' onClick={() => { changeDuration(); }}><AiOutlineClose size={20} /></button>

                <div className='flex  items-center space-x-2'>
                    <div className=' border-b-4 text-left w-[33%] text-lg border-voilet text-voilet'>step1</div>
                    <div className=' border-b-4 text-left w-[33%] text-lg border-bodergray text-gray'>step2</div>
                    <div className=' border-b-4 text-left w-[33%] text-lg border-bodergray text-gray'>step3</div>
                </div>
                <h2 className='py-6'>Simple Password Reset</h2>
                <form >
                    <div className='py-2'>

                        <label className='font-bold'>
                            enter new password
                        </label>
                        <input className="block w-full px-4 py-2 mt-2  bg-white border border-bordergray focus:outline-none " type="password"


                        />
                    </div>

                    <button className="w-full px-4 mt-4 py-2 mb-5 tracking-wide text-white transition-colors duration-200 transform bg-black hover:bg-voilet rounded-3xl focus:outline-none" type="submit">next

                    </button>
                </form>
            </div>

            {/* </div> */}
        </>
    )
}

export default ForgetPasswordModel