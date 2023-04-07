import Image from 'next/image'
import React from 'react'

import styles from '../Start/Start.module.css'

const PaypalPayment = () => {
    return (
        <>
            <div className='flex justify-center items-center'>

                <div>
                    <div className='py-8 flex flex-col justify-center items-center'>

                        <Image src="/start/PayPalLogo.png" width={152} height={40} />

                        <p className='text-[27px] pt-3 leading-[107%]'>$40 payment successful!</p>
                    </div>
                    <div className={`relative`}>
                        {/* <label className="mt-8 mb-1.5 text-xs leading-4 font-bold ">create Password</label> */}
                        <input className="border  border-bordergray md:p-2 w-full  leading-4" type="password" placeholder="create password" />
                        <div className="absolute cursor-pointer top-2 right-2">
                            <Image src="/images/eyeIcon.svg" width={22} height={15} alt="show hide password icon" />
                        </div>
                    </div>

                    <button type="button"
                        className={`w-full px-4 mt-4 py-2 tracking-wide text-white    ${styles.submitbtnbg} rounded-3xl text-[18px] font-semibold traking-[0.02em] focus:outline-none`}  >start course! $40.00

                    </button>
                </div>

            </div>
        </>
    )
}

export default PaypalPayment