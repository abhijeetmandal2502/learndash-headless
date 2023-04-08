import Image from 'next/image'
import React from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { HiOutlineSearch } from 'react-icons/hi'
import { RiDeleteBin6Line } from 'react-icons/ri'

import styles from '../../Start/Start.module.css'

const RadeemCardDetail = ({ giftCardDetail }) => {

    //console.log('giftCardDetail', giftCardDetail);

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

    return (
        <>
            <div className='mx-5'>
                {/* gift card */}
                <div className=''>
                    <div className='flex  space-x-5 items-center'>
                        <Image src={giftCardDetail.image} width={349} height={221} alt="redeem card" />

                        <div >
                            <h2 className='text-[50px] tracking-wide leading-[107%]'>{giftCardDetail.title}</h2>
                            <p className='text-[32px] leading-[107%]'>{giftCardDetail.DueBalance}</p>

                        </div>
                    </div>
                </div>


                {/* card detail  */}

                <div className=' grid  grid-cols-12 gap-2'>

                    <div className=' col-span-5'>
                        <p className='px-9 mb-3'>gift card #</p>

                        {

                            cardData?.map((item, id) => {
                                return (
                                    <>
                                        <div key={id} className='flex items-center space-x-2 mb-4'>
                                            <p className='bg-lightgray text-black px-2.5 py-0.5 text-[18px] rounded-full'>{item.cardId}</p>
                                            <div className='flex justify-between items-center w-full border border-gray p-1'>
                                                <div className='text-[18px] text-gray leading-[130%]'>{item.giftSrNo}</div>
                                                <div className='bg-voilet p-1'><HiOutlineSearch size={18} className="text-white" /></div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })

                        }
                    </div>

                    <div className=' col-span-7 relative'>
                        <div className=' grid grid-cols-7 mb-3'>
                            <div className=' col-span-2'>
                                balnce
                            </div>
                            <div className=' col-span-2'>
                                expires
                            </div>
                            <div className=' col-span-2'>
                                redeem how much
                            </div>
                        </div>

                        <div className=' grid grid-cols-7 gap-2'>
                            <div className=' col-span-2 p-1.5 bg-lightgray text-[14px]'>
                                $40.00
                            </div>
                            <div className=' col-span-2 p-1.5 bg-lightgray text-[14px]'>
                                jan 15 ,2025
                            </div>
                            <div className=' col-span-2 flex justify-between items-center p-1.5 border border-gray'>
                                <div className='text-[14px]'>$ 20</div>
                                <BsCheck2 className='text-green' size={19} />
                            </div>

                            <div className=' col-span-1 pl-5'>
                                <RiDeleteBin6Line size={24} />
                            </div>

                        </div>



                        <div className='a absolute -bottom-10 left-1/2 -translate-x-1/2 w-full '>

                            <div className='flex justify-between items-center'>
                                <div className='text-[20px] '>redeem <span className='text-voilet border-b'>1 gift card</span> for <span className='text-voilet border-b'>$20</span></div>

                                <div className={` mx-auto`}>
                                    <button type="button"
                                        // onClick={() => { openModal() }}
                                        className={`w-full px-16  py-2 tracking-[0.02em] text-white  ${styles.paymentbyGiftCardBtn}  rounded-3xl text-[16px] font-semibold traking-[0.02em] focus:outline-none`}  >continue

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