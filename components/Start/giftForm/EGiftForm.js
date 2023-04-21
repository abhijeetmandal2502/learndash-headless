import Image from 'next/image'
import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import styles from '../../Start/DialogCard/GiftCardModel.module.css'

const EGiftForm = () => {
    const giftcardQty = ["1", "2"]
    return (
        <>
            <div className='relative p-6 pb-28'>
                <div className={`grid grid-cols-12 p-10 `}>
                    <div className={`md:col-span-4 col-span-12`}>
                        <Image src="/start/GiftCard3D.svg" width={392} height={251} alt="gift" />
                    </div>

                    <div className={`md:col-span-8 col-span-12`}>
                        <form className='grid grid-cols-12 gap-5'>

                            <div className='col-span-12 md:col-span-2 dubblelargef'>from:</div>

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

                        </form>

                    </div>
                </div>

                <div className='col-span-12 md:col-span-1 dubblelargef'>to:</div>
                <div className='bg-[#f2e9ff] p-[16px] max-h-[220px] overflow-scroll'>
                    {giftcardQty.map((item, key) =>
                        <div key={key} className={`grid grid-cols-12 gap-2 `}>
                            <div className='col-span-1 dubblelargef'><span className='flex justify-center w-6 h-6 text-sm rounded-full bg-[#e0c9ff] line-height-[1.5rem] item-center'>1</span></div>
                            <div className='col-span-12 md:col-span-11'>
                                <div className='grid grid-cols-10 '>
                                    <div className='col-span-2 mx-1.5'>
                                        <input placeholder=' first name' type='text' className='border border-gray outline-none w-[100%] smallf py-2 px-4' />
                                    </div>
                                    <div className='col-span-2 mx-1.5'>
                                        <input placeholder='last name' type='text' className='border border-gray outline-none w-[100%] smallf py-2 px-4' />
                                    </div>
                                    <div className='col-span-4 mx-1.5'>
                                        <input placeholder='recipient email' type='text' className='border border-gray outline-none w-[100%] smallf py-2 px-4' />
                                    </div>
                                    <div className='col-span-2 mx-1.5'>
                                        <input placeholder='$ amount' type='text' className='border border-gray outline-none w-[100%] smallf py-2 px-4' />
                                    </div>
                                    <div className='flex items-center col-span-1 '>
                                        <RiDeleteBin6Line size={28} className="text-gray" />
                                    </div>

                                    <div className='col-span-4 mx-1.5 '>
                                        <textarea id="w3review" rows="4" cols="60" className='border  border-gray outline-none w-[100%] smallf max-h-[90px] py-2 px-4 mb-6 mt-3 text-gray'>
                                            message (if left blank, this shows by default): ”this card may be small, but says a ton! a token of thanks for all you’ve done!”
                                        </textarea>
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
                        <div className='col-span-11'>
                            <button className={`smallf py-2 px-7 font-bold text-black  ${styles.formbtnbg}`}>+ add recipients</button>
                        </div>
                    </div>
                </div>

                <div className='absolute flex right-5 bottom-5'>
                    <div className='flex items-center triplelargef'>2<p className='w-12 ml-1 font-bold leading-4 extsmallf'>gift card</p></div>
                    <button className={`smallf py-1 px-20 text-black  ${styles.formbtnbg} flex items-center space-x-4`}><div className='font-bold'>+ add to basket:</div> <div className='triplelargef leading-[130%] '>$0</div></button>
                </div>
            </div>
        </>
    )
}

export default EGiftForm