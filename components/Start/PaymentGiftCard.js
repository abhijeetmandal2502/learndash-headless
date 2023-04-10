import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../Start/Start.module.css'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import RadeemCardDetail from './DialogCard/RadeemCardDetail'

const PaymentGiftCard = () => {
    // card detail
    const giftCardDetail = {
        image: "/start/GiftCard3D.png",
        title: "redeem gift cards",
        DueBalance: "(maximum 4)"
    }

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            <div className='flex items-center justify-center space-between'>

                <div >
                    <div className='flex items-center justify-center pt-8'>

                        <Image className='md:-ml-8 ' src="/start/GiftCard3D.png" width={190} height={126} alt="gift card" />

                        <p className='text-[34px] pt-3 leading-[107%]'>due: $40</p>
                    </div>
                    {/* <div className={`relative`}>
        
        <input className="w-full leading-4 border border-bordergray md:p-2" type="password" placeholder="create password" />
        <div className="absolute cursor-pointer top-2 right-2">
            <Image src="/images/eyeIcon.svg" width={22} height={15} alt="show hide password icon" />
        </div>
    </div> */}

                    <div className={`max-w-[75%] mx-auto mb-6`}>
                        <button type="button"
                            onClick={() => { openModal() }}
                            className={`w-full px-4 mt-4 py-3 tracking-[0.02em] text-white  ${styles.paymentbyGiftCardBtn}  rounded-3xl text-[16px] font-semibold traking-[0.02em] focus:outline-none`}  >redeem gift card

                        </button>
                    </div>
                </div>

            </div >
            {/* model popup */}
            < Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
                                    <div className="flex items-center justify-end ">
                                        <button
                                            type="button"
                                            className="text-3xl"
                                            onClick={closeModal}
                                        >
                                            x
                                        </button>
                                    </div>
                                    <div className='flex items-center justify-center pb-10 mt-2'>
                                        {/* <YourInstructor /> */}

                                        <RadeemCardDetail giftCardDetail={giftCardDetail} />
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    )
}

export default PaymentGiftCard