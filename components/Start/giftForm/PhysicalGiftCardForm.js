import Image from 'next/image'
import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import styles from '../../Start/DialogCard/GiftCardModel.module.css'

const PhysicalGiftCardForm = () => {
    const giftcardQty = ["1", "2"]
    return (
        <>
            {/* <div className='relative p-6'>
                <div className={`grid grid-cols-12 `}>
                    <div className={`md:col-span-4 col-span-12`}>
                        <Image src="/start/GiftCard3D.svg" width={392} height={251} alt="gift" />
                    </div>

                    <div className={`md:col-span-8 col-span-12`}>
                        <form className='grid grid-cols-12 gap-5'>

                            <div className='md:col-span-2 col-span-12 text-[38px]'>from:</div>

                            <div className='col-span-12 md:col-span-10'>
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
                                <div className='flex items-center justify-between space-x-2'>
                                    <div className='col-span-2 '>
                                        <input placeholder='city' type='text' className='border border-gray outline-none w-[100%] text-[20px] py-3 px-4 mb-3 ' />
                                    </div>
                                    <div className='col-span-2 '>
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

                <div className='absolute right-0 -bottom-10'>
                    <button className={`text-[20px] py-3 px-40 ${styles.formbtnbg} flex items-center space-x-4`}><div className=''>+ add to basket:</div> <div className='text-[37px] leading-[130%] '>$0</div></button>
                </div>
            </div> */}
            <div className='relative md:pb-28'>
                <div className={`grid grid-cols-12 p-6 md:p-10  `}>
                    <div className={`flex items-center mm:block md:col-span-4 col-span-12`}>
                        <Image className='w-[150px]' src="/start/GiftCard3D.svg" width={392} height={251} alt="gift" />
                        <div className='col-span-12 md:hidden md:col-span-2 triplelargef'>from:</div>
                    </div>

                    <div className={`md:col-span-8 col-span-12`}>
                        <div className='grid grid-cols-12 gap-5'>

                            <div className='hidden col-span-12 md:block md:col-span-2 dubblelargef'>from:</div>

                            <div className='col-span-12 md:col-span-10'>
                                <div className='grid grid-cols-12 gap-3'>
                                    <div className='col-span-6'>
                                        <input placeholder='your first name' type='text' className='w-full px-4 py-2 border outline-none smallf border-gray ' />
                                    </div>

                                    <div className='col-span-6'>
                                        <input placeholder='your last name' type='text' className='w-full px-4 py-2 border outline-none border-gray smallf' />
                                    </div>

                                    <div className='col-span-12'>
                                        <input placeholder='company' type='text' className='border border-gray outline-none min-w-[100%] smallf py-2 px-4 ' />
                                    </div>
                                    <div className='col-span-12'>
                                        <input placeholder='your email address' type='text' className='border border-gray outline-none min-w-[100%] smallf py-2 px-4 ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 m-6 md:col-span-1 dubblelargef'>to:</div>
                <div className='bg-[#f2e9ff] md:m-6 p-[16px] max-h-[220px] overflow-scroll'>
                    {giftcardQty.map((item, key) =>
                        <div key={key} className={`grid grid-cols-12 gap-2 `}>
                            <div className='col-span-6 md:col-span-1 dubblelargef'><span className='flex justify-center w-6 h-6 text-sm rounded-full bg-[#e0c9ff] item-center'>1</span></div>
                            <div className='flex items-end justify-end col-span-6 md:hidden '>
                                <RiDeleteBin6Line size={28} className="text-gray" />
                            </div>
                            <div className='col-span-12 md:col-span-11'>
                                <div className='grid grid-cols-12 md:grid-cols-10 '>
                                    <div className='col-span-6 md:col-span-2 md:mx-1.5'>
                                        <input placeholder=' first name' type='text' className='border border-gray outline-none w-[100%] smallf py-2 px-4' />
                                    </div>
                                    <div className='col-span-6 md:col-span-2 md:mx-1.5'>
                                        <input placeholder='last name' type='text' className='border border-gray outline-none w-[100%] smallf py-2 px-4' />
                                    </div>
                                    <div className='col-span-12 md:col-span-3 md:mx-1.5'>
                                        <input placeholder='recipient email' type='text' className='border border-gray outline-none w-[100%] smallf py-2 px-4' />
                                    </div>

                                    {/*this code for  mobile */}
                                    <div className='col-span-12 md:hidden '>
                                        <input placeholder='city' type='text' className='border border-gray outline-none w-[100%] smallf py-2 px-4 mb-3 ' />
                                    </div>
                                    <div className='col-span-6 md:hidden '>
                                        <select className='smallf py-2.5 px-4 -mt-5 bg-white border border-gray text-gray' name="cars" id="cars">
                                            <option value="state" className='smallf'>state</option>
                                            <option value="tx">tx</option>
                                            <option value="col">col</option>
                                            <option value="al">al</option>
                                        </select>
                                    </div>


                                    <div className='col-span-6 md:hidden '>
                                        <input placeholder='zip' type='text' className='border border-gray outline-none w-[100%] smallf py-2 px-4 mb-3 ' />
                                    </div>
                                    {/*this code for  mobile end*/}
                                    <div className='col-span-6 md:col-span-1 md:mx-1.5'>
                                        <input placeholder='qty' type='text' className='border border-gray outline-none w-[100%] smallf py-2 px-4' />
                                    </div>

                                    <div className='col-span-6 md:col-span-2 md:mx-1.5'>
                                        <input placeholder='$ amount' type='text' className='border border-gray outline-none w-[100%] smallf py-2 px-4' />
                                    </div>

                                    <div className='items-center hidden col-span-1 md:flex '>
                                        <RiDeleteBin6Line size={28} className="text-gray" />
                                    </div>

                                    <div className='col-span-12 md:col-span-4 mx-1.5 '>
                                        <textarea id="w3review" rows="4" cols="60" className='border  border-gray outline-none w-[100%] smallf max-h-[90px] py-2 px-4 mb-6 mt-3 text-gray'>
                                            message (if left blank, this shows by default): ”this card may be small, but says a ton! a token of thanks for all you’ve done!”
                                        </textarea>
                                    </div>
                                    <div className=' hidden md:block col-span-4 mx-1.5 mt-3 '>
                                        <div className='flex items-center justify-between space-x-2'>
                                            <div className='col-span-2 '>
                                                <input placeholder='city' type='text' className='border border-gray outline-none w-[100%] smallf py-2 px-4 mb-3 ' />
                                            </div>
                                            <div className='col-span-2 '>
                                                <select className='smallf py-2.5 px-4 -mt-5 bg-white border border-gray text-gray' name="cars" id="cars">
                                                    <option value="state" className='smallf'>state</option>
                                                    <option value="tx">tx</option>
                                                    <option value="col">col</option>
                                                    <option value="al">al</option>
                                                </select>
                                            </div>
                                            <div className='col-span-2 '>
                                                <input placeholder='zip' type='text' className='border border-gray outline-none w-[100%] smallf py-2 px-4 mb-3 ' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-span-12'>

                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                    }
                    <div className={`grid grid-cols-12 gap-2 `}>

                        <div className='col-span-12 md:col-span-1 dubblelargef'></div>
                        <div className='w-full col-span-12 md:col-span-11'>
                            <button className={`smallf w-full md:w-auto py-2 px-7 font-bold text-black  ${styles.formbtnbg}`}>+ add recipients</button>
                        </div>
                    </div>
                </div>


                <div className='absolute justify-center hidden mx-3 md:flex md:right-5 bottom-5'>
                    <div className='flex items-center triplelargef'>1<p className='w-12 ml-1 font-bold leading-4 extsmallf'>gift card</p></div>
                    <button className={`smallf py-1 px-20 text-black  ${styles.formbtnbg} flex items-center space-x-4`}><div className='font-bold'>+ add to basket:</div> <div className='triplelargef leading-[130%] '>$0</div></button>
                </div>
            </div>
        </>
    )
}

export default PhysicalGiftCardForm