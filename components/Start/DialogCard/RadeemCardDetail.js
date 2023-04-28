import Image from 'next/image'
import React, { useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { HiOutlineSearch } from 'react-icons/hi'
import { RiDeleteBin6Line } from 'react-icons/ri'

import styles from '../../Start/Start.module.css'

const RadeemCardDetail = ({ giftCardDetail }) => {

    // manage state for gift card detail for mobile device

    const cardData = [

        {
            cardId: 1,
            giftSrNo: 'xxxx xxxx xxxx xxxx'
        },

        {
            cardId: 2,
            giftSrNo: 'xxxx xxxx xxxx xxxx'
        },
        {
            cardId: 3,
            giftSrNo: 'xxxx xxxx xxxx xxxx'
        },
        {
            cardId: 4,
            giftSrNo: 'xxxx xxxx xxxx xxxx'
        },
    ]

    const [showGiftCardDetail, setShowGiftCardDetail] = useState(false);

    return (
        <>
            <div className='md:mx-5 md:p-0 p-4'>
                {/* gift card */}
                <div className=''>
                    <div className='flex  md:space-x-5 space-x-2 items-center'>
                        <Image src={giftCardDetail.image} width={349} height={221} alt="redeem card" className='md:w-[349px] w-[150px] h-[125px]  md:h-[221px]' />

                        <div >
                            <h2 className='md:text-[50px] text-[19px] tracking-wide md:leading-[107%] leading-tight '>{giftCardDetail.title}</h2>
                            <p className='md:text-[32px] text-[16px] leading-tight md:leading-[107%]'>{giftCardDetail.DueBalance}</p>

                        </div>
                    </div>
                </div>


                {/* card detail  */}

                <div className=' grid  grid-cols-12 gap-2'>

                    <div className=' md:col-span-5 col-span-12'>
                        <p className='px-9 mb-3'>gift card #</p>

                        {
                            cardData?.map((item, id) => {
                                return (
                                    <>
                                        <div key={id} className='flex items-center space-x-2 mb-4'>
                                            <p className='bg-lightgray text-black px-2.5 py-0.5 text-[18px] rounded-full'>{item.cardId}</p>
                                            <div className='flex justify-between items-center w-full border border-gray p-1' onClick={() => { setShowGiftCardDetail(true) }}>
                                                <div className='text-[18px] text-gray leading-[130%]'>{item.giftSrNo}</div>
                                                <div className='bg-voilet p-1'><HiOutlineSearch size={18} className="text-white" /></div>
                                            </div>

                                        </div>
                                    </>
                                )
                            })

                        }

                        {/* card detail card for mobile */}

                        {showGiftCardDetail ? <div className=' md:hidden grid  grid-cols-8 gap-2'>

                            <div className='col-span-4'>

                                <div className=''>
                                    balnce
                                </div>
                                <div className='  p-1.5 bg-lightgray text-[14px]'>
                                    $40.00
                                </div>
                            </div>

                            <div className='col-span-4'>
                                <div className=''>
                                    expires
                                </div>
                                <div className=' p-1.5 bg-lightgray text-[14px]'>
                                    jan 15 ,2025
                                </div>
                            </div>

                            <div className=' col-span-8'>

                                <div className=''>
                                    redeem how much
                                </div>
                                <div className=' flex justify-between items-center p-1.5 border border-gray'>
                                    <div className='text-[14px]'>$ 20</div>
                                    <BsCheck2 className='text-green' size={19} />
                                </div>
                            </div>



                            <div className=' md:block hidden col-span-1 pl-5'>
                                <RiDeleteBin6Line size={24} />
                            </div>

                        </div> : ""}
                    </div>

                    <div className=' md:col-span-7 col-span-12 relative'>
                        {/* gift detail card for desktop */}
                        <div className='  hidden md:grid md:grid-cols-7 grid-cols-8 mb-3'>
                            <div className=' md:col-span-2 col-span-4'>
                                balnce
                            </div>
                            <div className=' md:col-span-2 col-span-4'>
                                expires
                            </div>
                            <div className=' md:col-span-2 col-span-8'>
                                redeem how much
                            </div>
                        </div>

                        <div className=' hidden md:grid md:grid-cols-7 grid-cols-8 gap-2'>
                            <div className=' md:col-span-2 col-span-4 p-1.5 bg-lightgray text-[14px]'>
                                $40.00
                            </div>
                            <div className=' md:col-span-2 col-span-4 p-1.5 bg-lightgray text-[14px]'>
                                jan 15 ,2025
                            </div>
                            <div className=' md:col-span-2 col-span-8 flex justify-between items-center p-1.5 border border-gray'>
                                <div className='text-[14px]'>$ 20</div>
                                <BsCheck2 className='text-green' size={19} />
                            </div>

                            <div className=' md:block hidden col-span-1 pl-5'>
                                <RiDeleteBin6Line size={24} />
                            </div>

                        </div>

                        {/* gift detail card for desktop end */}

                        {/* continue button */}

                        <div className=' absolute md:-bottom-10 -bottom-24 left-1/2 -translate-x-1/2 w-full '>

                            <div className='md:flex  flex-col md:space-y-0 space-y-5 justify-between items-center'>
                                {showGiftCardDetail ? <div className='text-[20px] '>redeem <span className='text-voilet border-b'>1 gift card</span> for <span className='text-voilet border-b'>$20</span></div> : ""}

                                <div className={` mx-auto`}>
                                    <button type="button"
                                        // onClick={() => { openModal() }}
                                        className={`w-full px-16  py-2 tracking-[0.02em] text-white   ${showGiftCardDetail ? styles.paymentbyGiftCardBtn : 'bg-gray opacity-[0.5]'}  rounded-3xl text-[16px] font-semibold traking-[0.02em] focus:outline-none`}  >continue

                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>



            </div>
        </>
    )
}

export default RadeemCardDetail