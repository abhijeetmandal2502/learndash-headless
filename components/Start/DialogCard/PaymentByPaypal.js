import Image from 'next/image'
import React from 'react'
import styles from '../../Start/Start.module.css'

const PaymentByPaypal = ({ giftCardDetail }) => {
    return (
        <div>
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

                <div className='px-48'>
                    <div className='mt-14 flex flex-col justify-center space-y-5'>

                        <div className='px-24 py-16 bg-lightgray flex flex-col justify-center items-center'>

                            <Image src="/start/PayPalLogo.png" width={260} height={70} alt="paypal logo" />
                            <p className='text-[35px] tracking-wide '>$20 payment successful!</p>

                        </div>

                        <div className={` mx-auto mt-16`}>
                            <button type="button"
                                // onClick={() => { openModal() }}
                                className={`px-16  py-2 tracking-[0.02em] text-white  ${styles.paymentbyGiftCardBtn}  rounded-3xl text-[16px] font-semibold traking-[0.02em] focus:outline-none`}  >continue

                            </button>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default PaymentByPaypal