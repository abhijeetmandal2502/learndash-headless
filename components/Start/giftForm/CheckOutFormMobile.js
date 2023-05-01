import React from 'react'
import styles from '../../Start/Start.module.css'
import Image from 'next/image'

const CheckOutFormMobile = () => {
    return (
        <div><div className="flex items-center justify-center ">
            <div className="flex ">
                <div className="flex flex-col items-start justify-start ">

                    <div className="flex flex-col justify-center w-full space-y-6 xl:flex-row xl:justify-between xl:space-y-0 xl:space-x-6">
                        <div className="flex flex-col lg:w-full">
                            <div className="flex-col mt-2">

                                <div className={`${styles.formbg} p-4`}>
                                    <label className="mt-5 mb-1.5  font-bold  leading-4 smallf">credit card info</label>
                                    <div className="flex justify-between mb-2 ">
                                        <div className="max-w-[48%]">
                                            <input className="w-full leading-3 border smallf border-bordergray md:p-2 p-1" type="text" placeholder="first name" />
                                        </div>
                                        <div className="max-w-[48%]">
                                            <input className="w-full leading-3 border smallf border-bordergray md:p-2 p-1" type="text" placeholder="last name" />
                                        </div>
                                    </div>
                                    <div>
                                        <input className="w-full leading-3 border border-bordergray md:p-2 p-1 " type="number" placeholder="**** **** **** *****" />
                                    </div>
                                    <div className="flex flex-row mt-2 space-x-2">
                                        <div>
                                            <input className="w-full leading-3 border smallf border-bordergray md:p-2 p-1 " type="email" placeholder="mm/yy" />
                                        </div>
                                        <div>
                                            <input className="w-full leading-3 text-gray-600 border smallf border-bordergray md:p-2 p-1 " type="email" placeholder="cvc" />
                                        </div>
                                        <div>
                                            <input className="w-full leading-3 border smallf border-bordergray md:p-2 p-1 " type="text" placeholder="zip" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div type="button"
                                onClick={``} className={`w-full px-4 mt-3 py-2 tracking-wide text-white    ${styles.submitbtnbg} rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none flex justify-center items-center space-x-2`}  > <Image src="/start/giftBtnIcon.svg" alt="gift btn" width="25" height="25" /> <div>send gift: $92.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div ></div>
    )
}

export default CheckOutFormMobile