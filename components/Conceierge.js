import React, { useState } from 'react'
import styles from '../src/styles/Conceierge.module.css'
import { BiArrowBack } from 'react-icons/bi'



const Conceierge = ({ conceiergeHide }) => {



    return (
        <>
            <div className=' bg-transparent max-w-lg '>


                <button className={`flex items-center space-x-1 bg-black text-white font-bold  ${styles.lobby} px-4 py-2 rounded-3xl `} type='button' onClick={() => conceiergeHide()}  >
                    <BiArrowBack size={20} className="text-white" /><span className='text-sm '>lobby</span></button>



                <h2 className='md:text-5xl my-10 font-normal tracking-wide leading-tight'>ok, deep breath.<br></br>how can we help?</h2>
                <form >
                    <div className='py-4'>

                        <label className='' >
                            your email
                        </label>
                        <input className="block w-full px-4 py-2 mt-2  bg-white border border-bordergray outline-red-500 " type="email"
                            required
                        />
                        {/* {errors.email.length > 0 &&
                            <span className='error'>{errors.email}</span>} */}
                    </div>
                    <div className='py-4 flex flex-col space-y-2'>
                        <label>
                            ask away

                        </label>
                        <textarea name="postContent" rows={4} className="w-full border border-bordergray outline-red-500" required />


                    </div>

                    <div className='flex space-x-4 items-center'>
                        <button className={`${styles.lobby} px-10 mt-5 py-2 tracking-wide text-white bg-black rounded-3xl focus:outline-none`} type="submit">send

                        </button>
                        <p className='pt-3 text-[24px]'>response in 24 hours or less</p>
                    </div>

                </form>

            </div>
        </>
    )
}

export default Conceierge