import Image from 'next/image'
import React from 'react'
import styles from '../../Start/Start.module.css'


const PaymentByCreditCard = ({ giftCardDetail }) => {
    return (
        <>

            <div className='mx-5'>
                {/* gift card */}
                <div className=''>
                    <div className='flex  space-x-5 items-center'>
                        <Image src={giftCardDetail.image} width={349} height={221} alt="gift card" />

                        <div >
                            <h2 className='text-[45px] tracking-wide leading-[107%]'>{giftCardDetail.title}</h2>
                            <p className='text-[32px] leading-[107%]'>{giftCardDetail.DueBalance}</p>

                        </div>
                    </div>
                </div>
                {/* credit card detail  */}

                <div className='px-72'>
                    <div className={``}>
                        <label className="mt-5 mb-1.5  font-bold  leading-4 text-[16px]">credit card info</label>
                        <div className="flex justify-between mb-3 ">
                            <div className="max-w-[48%]">
                                <input className="border border-bordergray md:p-2  w-full  leading-3" type="text" placeholder="first name" />
                            </div>
                            <div className="max-w-[48%]">
                                <input className="border border-bordergray md:p-2  w-full  leading-3" type="text" placeholder="last name" />
                            </div>
                        </div>
                        <div>
                            {/* <label className="mt-5 mb-1.5  font-bold  leading-4 text-xs  ">enter card number</label> */}
                            <input className="border   border-bordergray md:p-2 w-full  leading-3" type="number" placeholder="**** **** **** *****" />
                        </div>
                        <div className="flex-row flex mt-3 space-x-2">
                            <div>
                                {/* <label className="mt-5 mb-1.5  leading-4 text-xs font-bold">exp. date</label> */}
                                <input className="border  border-bordergray md:p-2 w-full text-sm   leading-3  " type="email" placeholder="MM/YY" />
                            </div>
                            <div>
                                {/* <label className="mt-5 mb-1.5  leading-4 text-xs font-bold">security code</label> */}
                                <input className="border  border-bordergray md:p-2 w-full  leading-3 text-gray-600 text-sm " type="email" placeholder="CVC" />
                            </div>
                            <div>
                                {/* <label className="mt-5 mb-1.5 text-xs  leading-4 font-bold ">zip</label> */}
                                <input className="border  border-bordergray md:p-2 w-full  leading-3 text-sm  " type="text" placeholder="zip" />
                            </div>
                        </div>
                    </div>

                    <div className={`flex items-center space-x-1 py-3 mt-2`}>
                        <Image src="/images/savePassword.svg" width={19} height={19} alt="password icon" />
                        <p className={`text-gray md:text-[16px]`}>save payment for future purchases?</p>
                    </div>

                    <div className='mt-14 flex flex-col justify-center space-y-5'>
                        <div className='text-[20px] text-center '>apply <span className='text-voilet border-b'>$20 payment</span> to credit card</div>

                        <div className={` mx-auto`}>
                            <button type="button"
                                // onClick={() => { openModal() }}
                                className={`px-16  py-2 tracking-[0.02em] text-white  ${styles.paymentbyGiftCardBtn}  rounded-3xl text-[16px] font-semibold traking-[0.02em] focus:outline-none`}  >continue

                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentByCreditCard