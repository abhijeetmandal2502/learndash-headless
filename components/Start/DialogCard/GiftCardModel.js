
import Image from 'next/image'
import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import styles from '../../Start/DialogCard/GiftCardModel.module.css'
import EGiftForm from '../giftForm/EGiftForm'
import PhysicalGiftCardForm from '../giftForm/PhysicalGiftCardForm'

const GiftCardModel = ({ isOpen, closeModal, activePhysicalGift, activeEgift }) => {

    console.log('activeEgift', activeEgift, activePhysicalGift)
    return (
        <>
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
                                <Dialog.Panel className=" relative w-full max-w-7xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
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
                                        <div className={`flex items-center absolute top-0 left-0 z-[1000]`}>
                                            <div className={`${activeEgift ? styles.giftCardActive : styles.giftCardBg} flex justify-between px-9 items-center space-x-3`}>
                                                <div>
                                                    <Image src="/start/eGift.svg" width={71} height={60} alt="gift" />
                                                </div>
                                                <p className=' font-semibold text-[28px]'>
                                                    e-gift cards
                                                </p>
                                                <div className={`bg-black rounded-full w-6 h-6 text-white text-[17px] text-center`}>
                                                    0
                                                </div>

                                            </div>

                                            <div className={`${activePhysicalGift ? styles.giftCardActive : styles.giftCardBg} flex justify-between px-9 items-center space-x-3`}>
                                                <div>
                                                    <Image src="/start/PhysicalGift.svg" width={71} height={60} alt="gift" />
                                                </div>
                                                <p className=' font-semibold text-[28px]'>
                                                    physical gift cards
                                                </p>
                                                <div className={`bg-black rounded-full w-6 h-6 text-white text-center text-[17px] `}>
                                                    0
                                                </div>

                                            </div>
                                        </div>
                                        <div className='mt-10'>
                                            {activeEgift ? <EGiftForm /> : ""}
                                            {activePhysicalGift ? <PhysicalGiftCardForm /> : ""}
                                        </div>

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

export default GiftCardModel