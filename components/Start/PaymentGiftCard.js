import Image from 'next/image'
import React from 'react'

import styles from '../Start/Start.module.css'

const PaymentGiftCard = () => {
    return (
        <div className='flex justify-center items-center'>

            <div>
                <div className='py-8 flex justify-center items-center'>

                    <Image src="/start/GiftCard3D.png" width={199} height={126} />

                    <p className='text-[36px] pt-3 leading-[107%]'>due: $40</p>
                </div>
                {/* <div className={`relative`}>
                    
                    <input className="border  border-bordergray md:p-2 w-full  leading-4" type="password" placeholder="create password" />
                    <div className="absolute cursor-pointer top-2 right-2">
                        <Image src="/images/eyeIcon.svg" width={22} height={15} alt="show hide password icon" />
                    </div>
                </div> */}

                <div className={`max-w-[75%] mx-auto`}>
                    <button type="button"
                        className={`w-full px-4 mt-4 py-2 tracking-[0.02em] text-white  ${styles.paymentbyGiftCardBtn}  rounded-3xl text-[18px] font-semibold traking-[0.02em] focus:outline-none`}  >redeem gift card

                    </button>
                </div>
            </div>

        </div>
    )
}

export default PaymentGiftCard