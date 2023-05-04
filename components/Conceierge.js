import React, { useState } from 'react'
import styles from '../src/styles/Conceierge.module.css'
import { BiArrowBack } from 'react-icons/bi'
import { useForm } from 'react-hook-form';

const Conceierge = ({ conceiergeHide }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            <div className=' bg-transparent md:px-7 max-[768px]:max-w-xs min-[992px]:max-w-md max-w-lg 2xl:max-w-lg 3xl:max-w-3xl'>
                <button className={`md:flex hidden items-center space-x-1 md:mt-5 bg-black text-white font-bold  ${styles.lobby} px-4 3xl:px-6 py-2 3xl:py-2.5 rounded-3xl `} type='button' onClick={() => conceiergeHide()}  >
                    <BiArrowBack size={20} className="text-white 3xl:w-8 3xl:h-8" />
                    <span className='minismallf  '>lobby</span>
                </button>

                <h2 className='   2xl:my-10 my-5 font-normal tracking-wide leading-tight'>ok, deep breath.<br></br>how can we help?
                </h2>

                <form onSubmit={handleSubmit((data) => console.log('data', data))} >
                    <div className='py-2 2xl:py-4 '>

                        <label className='' >
                            your email
                        </label>
                        <input className="block w-full xl:w-full lg:w-[80%] md:w-[75%] px-4 py-2 3xl:py-4 mt-2  bg-white border border-bordergray outline-red-500 "
                            {...register('email', {
                                required: 'oops! email is blank!', pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'incorrect email format',
                                },
                            },)}
                        />

                        {errors.email ? <div className=' text-[#D30820] mt-1'> <span className='text-[#D30820] border border-[#D30820] rounded-full py-0.4 px-1.5 extsmallf' >!</span> {errors.email.message}</div> : null}
                    </div>
                    <div className='flex flex-col py-2 space-y-2 2xl:py-4'>
                        <label className=''>
                            ask away

                        </label>
                        <textarea name="postContent" rows={4} className="w-full xl:w-full lg:w-[80%] md:w-[75%] border border-bordergray outline-[#D30820] bg-white" {...register('message', { required: true })} />
                        {errors.message && <p className=' text-[#D30820]'> <span className='text-[#D30820] border border-[#D30820] rounded-full py-0.4 px-1.5 extsmallf' >!</span> oops! message is blank!</p>}


                    </div>

                    <div className='flex items-center space-x-4'>
                        <button className={`${styles.lobby} px-10  mt-5 3xl:px-16 3xl:py-3 py-2 tracking-wide text-white bg-black rounded-3xl focus:outline-none`} type="submit">send

                        </button>
                        <p className='pt-3 largef '>response in 24 hours or less</p>
                    </div>

                </form>

            </div>
        </>
    )
}

export default Conceierge