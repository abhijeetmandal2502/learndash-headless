import Image from 'next/image'
import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Congratulation from "./DialogCard/Congratulation";
import styles from '../Start/Start.module.css'

const PaypalPayment = () => {


    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
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
                        onClick={openModal}
                        className={`w-full px-4 mt-4 py-2 tracking-wide text-white    ${styles.submitbtnbg} rounded-3xl text-[18px] font-semibold traking-[0.02em] focus:outline-none`}  >start course! $40.00

                    </button>
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
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className=" flex justify-end items-center">
                                        <button
                                            type="button"
                                            className="text-3xl"
                                            onClick={closeModal}
                                        >
                                            x
                                        </button>
                                    </div>
                                    <div className='mt-2 flex items-center justify-center pb-10'>
                                        {/* <YourInstructor /> */}
                                        <Congratulation />
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

export default PaypalPayment