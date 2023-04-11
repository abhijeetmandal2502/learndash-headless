import Image from 'next/image'
import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import styles from '../../Start/DialogCard/GiftCardModel.module.css'

const PhysicalGiftCardForm = () => {
    return (
        <>
            <div className='relative'>
                <div className={`grid grid-cols-12 `}>
                    <div className={`md:col-span-4 col-span-12`}>
                        <Image src="/start/GiftCard3D.svg" width={392} height={251} alt="gift" />
                    </div>

                    <div className={`md:col-span-8 col-span-12`}>
                        <form className='grid grid-cols-12 gap-5'>

                            <div className='md:col-span-2 col-span-12 text-[38px]'>from:</div>

                            <div className='md:col-span-10 col-span-12'>
                                <div className='grid grid-cols-12 gap-3'>
                                    <div className='col-span-6'>
                                        <input placeholder='your first name' type='text' className='border text-[20px] py-3 px-4 mb-3 border-gray outline-none min-w-[100%]' />
                                    </div>

                                    <div className='col-span-6'>
                                        <input placeholder='your last name' type='text' className='border border-gray outline-none min-w-[100%] text-[20px] py-3 px-4 mb-3 ' />
                                    </div>

                                    <div className='col-span-12'>
                                        <input placeholder='company' type='text' className='border border-gray outline-none min-w-[100%] text-[20px] py-3 px-4 mb-3 ' />
                                    </div>
                                    <div className='col-span-12'>
                                        <input placeholder='your email address' type='text' className='border border-gray outline-none min-w-[100%] text-[20px] py-3 px-4 mb-3 ' />
                                    </div>
                                </div>




                            </div>

                        </form>

                    </div>
                </div>

                <div className='grid grid-cols-12 gap-2'>
                    <div className='col-span-12 md:col-span-1 text-[38px]'>to:</div>
                    <div className='col-span-12 md:col-span-11'>
                        <div className='grid grid-cols-11'>
                            <div className='col-span-2 mx-2'>
                                <input placeholder=' first name' type='text' className='border border-gray outline-none w-[100%] text-[20px] py-3 px-4 mb-3 ' />
                            </div>
                            <div className='col-span-2 mx-2'>
                                <input placeholder='last name' type='text' className='border border-gray outline-none w-[100%] text-[20px] py-3 px-4 mb-3 ' />
                            </div>
                            <div className='col-span-3 mx-2'>
                                <input placeholder='recipient email' type='text' className='border border-gray outline-none w-[100%] text-[20px] py-3 px-4 mb-3 ' />
                            </div>
                            <div className='col-span-1 mx-2'>
                                <input placeholder='qty' type='text' className='border border-gray outline-none w-[100%] text-[20px] py-3 px-4 mb-3 ' />
                            </div>
                            <div className='col-span-2 mx-2'>
                                <input placeholder='$ amount' type='text' className='border border-gray outline-none w-[100%] text-[20px] py-3 px-4 mb-3 ' />
                            </div>
                            <div className='col-span-1 ml-10'>
                                <RiDeleteBin6Line size={40} className="text-gray" />
                            </div>

                            <div className='col-span-4 mx-2 '>
                                <textarea id="w3review" rows="4" cols="60" className='border  border-gray outline-none w-[100%] text-[20px] py-3 px-4 mb-3 text-gray'>
                                    message (if left blank, this shows by default): ”this card may be small, but says a ton! a token of thanks for all you’ve done!”
                                </textarea>
                            </div>

                            <div className='col-span-3 mx-2 '>
                                <div className='flex justify-between items-center space-x-2'>
                                    <div className='col-span-2 '>
                                        <input placeholder='city' type='text' className='border border-gray outline-none w-[100%] text-[20px] py-3 px-4 mb-3 ' />
                                    </div>
                                    <div className='col-span-2 '>
                                        {/* <input placeholder='state' type='text' className='border border-gray outline-none w-[100%] text-[20px] py-3 px-4 mb-3 ' /> */}
                                        <select className='text-[20px] py-3.5 px-4 -mt-5 bg-white border border-gray text-gray' name="cars" id="cars">
                                            <option value="state" className='text-[20px]'>state</option>
                                            <option value="tx">tx</option>
                                            <option value="col">col</option>
                                            <option value="al">al</option>
                                        </select>
                                    </div>
                                    <div className='col-span-2 '>
                                        <input placeholder='zip' type='text' className='border border-gray outline-none w-[100%] text-[20px] py-3 px-4 mb-3 ' />
                                    </div>
                                </div>
                            </div>

                            <div className='col-span-12'>
                                <button className={`text-[20px] py-3 px-7  ${styles.formbtnbg}`}>+ add recipients</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' absolute -bottom-10 right-0'>
                    <button className={`text-[20px] py-3 px-40 ${styles.formbtnbg} flex items-center space-x-4`}><div className=''>+ add to basket:</div> <div className='text-[37px] leading-[130%] '>$0</div></button>
                </div>
            </div>
        </>
    )
}

export default PhysicalGiftCardForm