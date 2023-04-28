
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../Start/Start.module.css'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import SplitPayMethod from './DialogCard/SplitPayMethod'
import { FiArrowLeft } from 'react-icons/fi'

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

                        <p className='triplelargef pt-3 leading-[107%]'>due: $40</p>
                    </div>

                    <div className={`max-w-[100%] mx-auto mb-6`}>
                        <button type="button"

                            onClick={() => { openModal() }}
                            className={`w-full px-4 mt-4 py-3 tracking-[0.02em] text-white  ${styles.paymentbyGiftCardBtn}  rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >split payment method

                        </button>
                    </div>
                </div>

            </div>

            {/* model popup */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative md:z-10 z-50 " onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed md:inset-0  bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed md:inset-0 top-0 md:h-auto h-screen overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full md:p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[1077px] transform overflow-hidden  bg-white md:p-6 text-left align-middle shadow-xl transition-all h-screen md:h-auto overflow-y-scroll">
                                    <div className="flex items-center md:justify-end justify-between ">
                                        <div className='md:hidden flex space-x-2 justify-center items-center pl-5'>
                                            <FiArrowLeft size={25} />
                                            <h4>simple checkout</h4>
                                        </div>
                                        <button
                                            type="button"
                                            className="text-3xl md:pr-0 pr-5"
                                            onClick={closeModal}
                                        >
                                            x
                                        </button>
                                    </div>
                                    <div className='flex items-center justify-center md:pb-10 mt-2'>
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