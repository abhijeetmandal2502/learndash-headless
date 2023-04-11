
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../Start/Start.module.css'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import SplitPayMethod from './DialogCard/SplitPayMethod'

const SplitPayment = () => {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            <div className='flex items-center justify-center'>

                <div>
                    <div className='flex items-center justify-center pt-8'>

                        <Image src="/start/splitPayment.png" width={100} height={100} alt="split payment" />

                        <p className='text-[34px] pt-3 leading-[107%]'>due: $40</p>
                    </div>
                    {/* <div className={`relative`}>
        
        <input className="w-full leading-4 border border-bordergray md:p-2" type="password" placeholder="create password" />
        <div className="absolute cursor-pointer top-2 right-2">
            <Image src="/images/eyeIcon.svg" width={22} height={15} alt="show hide password icon" />
        </div>
    </div> */}

                    <div className={`max-w-[100%] mx-auto mb-6`}>
                        <button type="button"

                            onClick={() => { openModal() }}
                            className={`w-full px-4 mt-4 py-3 tracking-[0.02em] text-white  ${styles.paymentbyGiftCardBtn}  rounded-3xl text-[16px] font-semibold traking-[0.02em] focus:outline-none`}  >split payment method

                        </button>
                    </div>
                </div>

            </div>

            {/* model popup */}
            <Transition appear show={isOpen} as={Fragment}>
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
                                <Dialog.Panel className="w-full max-w-[1077px] transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
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

                                        <SplitPayMethod />
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}

export default SplitPayment