import React, { useState } from 'react'
import styles from '../src/styles/Conceierge.module.css'
import { BiArrowBack } from 'react-icons/bi'



const Conceierge = ({ conceiergeHide }) => {



    return (
        <>
            <div className=' bg-transparent max-w-lg '>


                <button className='flex items-center space-x-1 bg-black text-white px-3 py-1.5 rounded-3xl my-5' type='button' onClick={() => conceiergeHide()}  >
                    <BiArrowBack size={20} className="text-white bg-black" /><span className='text-sm font-semibold'>lobby</span></button>



                <h2 className='text-5xl my-10 leading-tight'>ok, deep breath.<br></br>how can we help?</h2>
                <form >
                    <div className='py-4'>

                        <label className='' >
                            your email
                        </label>
                        <input className="block w-full px-4 py-2 mt-2  bg-white border border-bordergray focus:outline-none " type="text"

                        />
                    </div>
                    <div className='py-4 flex flex-col space-y-2'>
                        <label>
                            ask away

                        </label>
                        <textarea name="postContent" rows={4} className="w-full border border-bordergray outline-bordergray" required />


                    </div>

                    <div className='flex space-x-4 items-center'>
                        <button className=" px-10 mt-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black hover:bg-voilet rounded-3xl focus:outline-none" type="submit">send

                        </button>
                        <p className='pt-3'>response in 24 hours or less</p>
                    </div>

                </form>

            </div>
        </>
    )
}

export default Conceierge