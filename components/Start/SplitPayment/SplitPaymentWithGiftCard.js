import Image from 'next/image'
import React, { useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'
import { HiOutlineSearch } from 'react-icons/hi'
import { RiDeleteBin6Line } from 'react-icons/ri'

import styles from '../../Start/Start.module.css'

const SplitPaymentWithGiftCard = ({ giftCardDetail, openModal, setShowSplitPayment }) => {

    // manage state for gift card detail for mobile device

    const cardData = [

        {
            cardId: 1,
            giftSrNo: 'xxxx xxxx xxxx xxxx',
            giftSrNoDcript: 'E75P  TL96  DPDD  D667',
            balance: '$40.00',
            expires: 'Jan 15, 2025',
            redeemHowMuch: '20'
        },

        {
            cardId: 2,
            giftSrNo: 'xxxx xxxx xxxx xxxx',
            giftSrNoDcript: 'E75P  TL96  DPDD  D667',
            balance: '$40.00',
            expires: 'Jan 15, 2025',
            redeemHowMuch: '20'
        },
        {
            cardId: 3,
            giftSrNo: 'xxxx xxxx xxxx xxxx',
            giftSrNoDcript: 'E75P  TL96  DPDD  D667',
            balance: '$40.00',
            expires: 'Jan 15, 2025',
            redeemHowMuch: '20'
        },
        {
            cardId: 4,
            giftSrNo: 'xxxx xxxx xxxx xxxx',
            giftSrNoDcript: 'E75P  TL96  DPDD  D667',
            balance: '$40.00',
            expires: 'Jan 15, 2025',
            redeemHowMuch: '20'
        },
    ]

    const [showGiftCardDetail, setShowGiftCardDetail] = useState(true);
    const [showGiftCardDetail2, setShowGiftCardDetail2] = useState(false);
    const [showGiftCardDetail3, setShowGiftCardDetail3] = useState(false);
    const [showGiftCardDetail4, setShowGiftCardDetail4] = useState(false);

    return (
        <>
            <div className='md:mx-5 md:p-0 p-4'>
                {/* gift card */}
                <div className=''>
                    <div className='flex  md:space-x-5 space-x-2 items-center'>
                        <Image src={giftCardDetail.image} width={349} height={221} alt="redeem card" className='md:w-[349px] w-[150px] h-[125px]  md:h-[221px]' />

                        <div >
                            <h2 className='md:text-[50px] text-[19px] tracking-wide md:leading-[107%] leading-tight '>{giftCardDetail.title}</h2>
                            <p className='md:block hidden md:text-[32px] text-[16px] leading-tight md:leading-[107%]'>{giftCardDetail.DueBalance}</p>

                        </div>
                    </div>

                    <p className=' text-center md:hidden  text-voilet text-[24px] font-bold py-2 leading-tight '>{giftCardDetail.DueBalance}</p>
                </div>


                {/* card detail  */}

                <div className=' grid  grid-cols-12 gap-2'>

                    <div className=' md:col-span-5 col-span-12'>
                        <p className='px-9 mb-3'>gift card #</p>

                        <div className='flex items-center space-x-2 mb-4'>
                            <p className='bg-lightgray text-black px-2.5 py-0.5 text-[18px] rounded-full'>{cardData[0].cardId}</p>
                            <div className='flex justify-between items-center w-full border border-gray p-1' onClick={() => { setShowGiftCardDetail(true) }}>
                                <div className={`text-[18px] leading-[130%] ${showGiftCardDetail ? 'text-black' : 'text-gray'}`}>
                                    {showGiftCardDetail ? (cardData[0].giftSrNoDcript) : (cardData[0].giftSrNo)}
                                </div>
                                <div className='bg-voilet p-1'><HiOutlineSearch size={18} className="text-white" /></div>
                            </div>
                        </div>
                        {showGiftCardDetail ? <div className=' md:hidden grid grid-cols-8 gap-2 md:ml-0 ml-10'>
                            <div className='col-span-4'>

                                <div className=''>
                                    balnce
                                </div>
                                <div className='  p-1.5 bg-lightgray text-[14px]'>
                                    {cardData[0].balance}
                                </div>
                            </div>

                            <div className='col-span-4'>
                                <div className=''>
                                    expires
                                </div>
                                <div className=' p-1.5 bg-lightgray text-[14px]'>
                                    {cardData[0].expires}
                                </div>
                            </div>

                            <div className=' col-span-8'>

                                <div className=''>
                                    redeem how much
                                </div>
                                <div className=' flex justify-between items-center p-1.5 border border-gray'>
                                    <div className='text-[14px]'>$ {cardData[0].redeemHowMuch}</div>
                                    <BsCheck2 className='text-green' size={19} />
                                </div>
                            </div>
                            <div className=' md:block hidden col-span-1 pl-5'>
                                <RiDeleteBin6Line size={24} />
                            </div>

                        </div> : ""}

                        <div className='flex items-center space-x-2 mb-4 md:mt-0 mt-4'>
                            <p className='bg-lightgray text-black px-2.5 py-0.5 text-[18px] rounded-full'>{cardData[1].cardId}</p>
                            <div className='flex justify-between items-center w-full border border-gray p-1' onClick={() => { setShowGiftCardDetail2(true) }}>
                                <div className={`text-[18px] leading-[130%] ${showGiftCardDetail2 ? 'text-black' : 'text-gray'}`}>
                                    {showGiftCardDetail2 ? (cardData[1].giftSrNoDcript) : (cardData[1].giftSrNo)}
                                </div>
                                <div className='bg-voilet p-1'><HiOutlineSearch size={18} className="text-white" /></div>
                            </div>
                        </div>
                        {showGiftCardDetail2 ? <div className=' md:hidden grid grid-cols-8 gap-2 md:ml-0 ml-10'>
                            <div className='col-span-4'>

                                <div className=''>
                                    balnce
                                </div>
                                <div className='  p-1.5 bg-lightgray text-[14px]'>
                                    {cardData[1].balance}
                                </div>
                            </div>

                            <div className='col-span-4'>
                                <div className=''>
                                    expires
                                </div>
                                <div className=' p-1.5 bg-lightgray text-[14px]'>
                                    {cardData[1].expires}
                                </div>
                            </div>

                            <div className=' col-span-8'>

                                <div className=''>
                                    redeem how much
                                </div>
                                <div className=' flex justify-between items-center p-1.5 border border-gray'>
                                    <div className='text-[14px]'>$ {cardData[1].redeemHowMuch}</div>
                                    <BsCheck2 className='text-green' size={19} />
                                </div>
                            </div>
                            <div className=' md:block hidden col-span-1 pl-5'>
                                <RiDeleteBin6Line size={24} />
                            </div>

                        </div> : ""}

                        <div className='flex items-center space-x-2 mb-4 md:mt-0 mt-4'>
                            <p className='bg-lightgray text-black px-2.5 py-0.5 text-[18px] rounded-full'>{cardData[2].cardId}</p>
                            <div className='flex justify-between items-center w-full border border-gray p-1' onClick={() => { setShowGiftCardDetail3(true) }}>
                                <div className={`text-[18px] leading-[130%] ${showGiftCardDetail3 ? 'text-black' : 'text-gray'}`}>
                                    {showGiftCardDetail3 ? (cardData[2].giftSrNoDcript) : (cardData[2].giftSrNo)}
                                </div>
                                <div className='bg-voilet p-1'><HiOutlineSearch size={18} className="text-white" /></div>
                            </div>
                        </div>
                        {showGiftCardDetail3 ? <div className=' md:hidden grid grid-cols-8 gap-2 md:ml-0 ml-10'>
                            <div className='col-span-4'>

                                <div className=''>
                                    balnce
                                </div>
                                <div className='  p-1.5 bg-lightgray text-[14px]'>
                                    {cardData[2].balance}
                                </div>
                            </div>

                            <div className='col-span-4'>
                                <div className=''>
                                    expires
                                </div>
                                <div className=' p-1.5 bg-lightgray text-[14px]'>
                                    {cardData[2].expires}
                                </div>
                            </div>

                            <div className=' col-span-8'>

                                <div className=''>
                                    redeem how much
                                </div>
                                <div className=' flex justify-between items-center p-1.5 border border-gray'>
                                    <div className='text-[14px]'>$ {cardData[2].redeemHowMuch}</div>
                                    <BsCheck2 className='text-green' size={19} />
                                </div>
                            </div>
                            <div className=' md:block hidden col-span-1 pl-5'>
                                <RiDeleteBin6Line size={24} />
                            </div>

                        </div> : ""}

                        <div className='flex items-center space-x-2 mb-4 md:mt-0 mt-4'>
                            <p className='bg-lightgray text-black px-2.5 py-0.5 text-[18px] rounded-full'>{cardData[3].cardId}</p>
                            <div className='flex justify-between items-center w-full border border-gray p-1' onClick={() => { setShowGiftCardDetail4(true) }}>
                                <div className={`text-[18px] leading-[130%] ${showGiftCardDetail4 ? 'text-black' : 'text-gray'}`}>
                                    {showGiftCardDetail4 ? (cardData[3].giftSrNoDcript) : (cardData[3].giftSrNo)}
                                </div>
                                <div className='bg-voilet p-1'><HiOutlineSearch size={18} className="text-white" /></div>
                            </div>
                        </div>
                        {showGiftCardDetail4 ? <div className=' md:hidden grid grid-cols-8 gap-2 md:ml-0 ml-10'>
                            <div className='col-span-4'>

                                <div className=''>
                                    balnce
                                </div>
                                <div className='  p-1.5 bg-lightgray text-[14px]'>
                                    {cardData[3].balance}
                                </div>
                            </div>

                            <div className='col-span-4'>
                                <div className=''>
                                    expires
                                </div>
                                <div className=' p-1.5 bg-lightgray text-[14px]'>
                                    {cardData[3].expires}
                                </div>
                            </div>

                            <div className=' col-span-8'>

                                <div className=''>
                                    redeem how much
                                </div>
                                <div className=' flex justify-between items-center p-1.5 border border-gray'>
                                    <div className='text-[14px]'>$ {cardData[3].redeemHowMuch}</div>
                                    <BsCheck2 className='text-green' size={19} />
                                </div>
                            </div>
                            <div className=' md:block hidden col-span-1 pl-5'>
                                <RiDeleteBin6Line size={24} />
                            </div>

                        </div> : ""}
                        {/* card detail card for mobile */}
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
                                        onClick={() => { openModal(), setShowSplitPayment() }}
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

export default SplitPaymentWithGiftCard