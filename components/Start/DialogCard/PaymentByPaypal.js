import Image from 'next/image'
import React from 'react'
import styles from '../../Start/Start.module.css'

const PaymentByPaypal = ({ giftCardDetail, setPaypalPayment, openModal, setCreditCardPayment }) => {
    return (
        <div>
            <div className='mx-5'>
                {/* gift card */}

                <div className=''>
                    <div className='flex  space-x-5 items-center justify-center'>
                        <div className='hidden md:block'>
                            <Image src={giftCardDetail.image} width={149} height={221} alt="gift card" />
                        </div>
                        <div className='md:hidden'>
                            <Image src={giftCardDetail.image} width={100} height={100} alt="gift card" />
                        </div>

                        <div >
                            <h2 className='md:text-[45px] mediumf tracking-wide md:leading-[107%] leading-tight'>{giftCardDetail.title}</h2>
                            <p className='md:text-[32px] smallf md:leading-[107%] leading-tight hidden md:block'>{giftCardDetail.DueBalance}</p>

                        </div>
                    </div>
                    {/* title for mobile */}
                    <div className='md:hidden mb-10'>
                        <p className={`extlargef text-voilet text-center md:leading-[107%] leading-tight `}>{giftCardDetail.DueBalance}</p>
                    </div>
                </div>
                {/* credit card detail  */}

                <div className='md:px-48'>
                    <div className='mt-14 flex flex-col justify-center space-y-5'>

                        <div className='md:px-24 px-12 py-16 bg-lightgray flex flex-col justify-center items-center'>

                            <Image src="/start/PayPalsuccessfull.svg" width={260} height={70} alt="paypal logo" />
                            <p className='md:text-[35px] extlargef md:mt-0 mt-5 md:text-left text-center tracking-wide '>$20 payment successful!</p>

                        </div>

                        <div className={` mx-auto mt-16`}>
                            <button type="button"
                                onClick={() => { setPaypalPayment() }}
                                className={`px-16  py-2 tracking-[0.02em] text-white  ${styles.paymentbyGiftCardBtn}  rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >continue

                            </button>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default PaymentByPaypal