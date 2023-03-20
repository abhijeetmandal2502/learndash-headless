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
            <div className=' bg-transparent  max-[768px]:max-w-xs min-[992px]:max-w-md max-w-lg 2xl:max-w-lg'>


                <button className={`flex items-center space-x-1 bg-black text-white font-bold  ${styles.lobby} px-4 py-2 rounded-3xl `} type='button' onClick={() => conceiergeHide()}  >
                    <BiArrowBack size={20} className="text-white" /><span className='text-sm '>lobby</span></button>



                <h2 className=' 2xl:text-5xl max-[768px]:text-[xl] 2xl:my-10 my-5 font-normal tracking-wide leading-tight'>ok, deep breath.<br></br>how can we help?</h2>
                <form onSubmit={handleSubmit((data) => console.log('data', data))} >
                    <div className='2xl:py-4 py-2'>

                        <label className='' >
                            your email
                        </label>
                        <input className="block w-full px-4 py-2 mt-2  bg-white border border-bordergray outline-red-500 "
                            {...register('email', {
                                required: 'oops! email is blank!', pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'incorrect email format',
                                },
                            },)}
                        />

                        {errors.email ? <div className=' text-[#D30820] mt-1'> <span className='text-[#D30820] border border-[#D30820] rounded-full py-0.4 px-1.5 text-xs' >!</span> {errors.email.message}</div> : null}
                    </div>
                    <div className='py-2 2xl:py-4 flex flex-col space-y-2'>
                        <label>
                            ask away

                        </label>
                        <textarea name="postContent" rows={4} className="w-full border border-bordergray outline-[#D30820]" {...register('message', { required: true })} />
                        {errors.message && <p className=' text-[#D30820]'> <span className='text-[#D30820] border border-[#D30820] rounded-full py-0.4 px-1.5 text-xs' >!</span> oops! message is blank!</p>}


                    </div>

                    <div className='flex space-x-4 items-center'>
                        <button className={`${styles.lobby} px-10 mt-5 py-2 tracking-wide text-white bg-black rounded-3xl focus:outline-none`} type="submit">send

                        </button>
                        <p className='pt-3 max-[768px]:text-[14px] text-[24px]'>response in 24 hours or less</p>
                    </div>

                </form>

            </div>
        </>
    )
}

export default Conceierge