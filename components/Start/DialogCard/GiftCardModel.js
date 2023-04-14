
import Image from 'next/image'
import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import styles from '../../Start/DialogCard/GiftCardModel.module.css'
import { Tab } from '@headlessui/react'
import EGiftForm from '../giftForm/EGiftForm'
import PhysicalGiftCardForm from '../giftForm/PhysicalGiftCardForm'

const GiftCardModel = ({ isOpen, closeModal, activePhysicalGift, activeEgift }) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

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
                                <Dialog.Panel className="relative w-full -mt-[40px]  md:w-[72%] p-6 overflow-hidden text-left align-middle transition-all transform  max-w-7xl">
                                    <div className="absolute z-40 top-28 right-10">
                                        <button
                                            type="button"
                                            className="text-3xl"
                                            onClick={closeModal}
                                        >
                                            x
                                        </button>
                                    </div>
                                    {/* <div className='flex items-center justify-center pb-10 mt-2'>
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

                                    </div> */}
                                    {/* tab panel code start */}


                                    <Tab.Group>

                                        <Tab.List className="flex w-full max-w-[47rem]  px-2   sm:px-0">

                                            <Tab
                                                className={({ selected }) =>
                                                    classNames(
                                                        'w-full pt-1.5 text-sm  leading-5 text-black font-bold',
                                                        selected
                                                            ? ' text-black giftCardBg'
                                                            : 'text-black  giftCardActive mt-[8px] imgGray'
                                                    )
                                                }
                                            >
                                                <div className={` flex ecardBtn justify-between px-9 items-center space-x-3`}>
                                                    <div className='ecardRotate ecardImgBox'>
                                                        <Image src="/start/eGift.svg" width={71} height={60} alt="gift" />
                                                    </div>
                                                    <p className=' font-semibold text-[20px]  '>
                                                        e-gift cards
                                                    </p>
                                                    <div className={`bg-black rounded-full w-6 h-6 text-white text-[17px] text-center`}>
                                                        0
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab
                                                className={({ selected }) =>
                                                    classNames(
                                                        'w-full pt-1.5 text-sm  leading-5 text-black font-bold',
                                                        selected
                                                            ? ' text-black giftCardBg '
                                                            : 'text-black  giftCardActive boxShadow mt-[8px] imgGray'
                                                    )
                                                }
                                            >
                                                <div className={` flex ecardBtn justify-between px-9 w-100 items-center space-x-3`}>
                                                    <div className='ecardImgAni ecardImgBox'>
                                                        <Image src="/start/PhysicalGift.svg" width={71} height={60} alt="gift" />
                                                    </div>
                                                    <p className=' font-semibold text-[20px] '>
                                                        physical gift cards
                                                    </p>
                                                    <div className={`bg-black rounded-full w-6 h-6 text-white text-center text-[17px] `}>
                                                        0
                                                    </div>

                                                </div>
                                            </Tab>
                                        </Tab.List>
                                        <Tab.Panels className="">
                                            <Tab.Panel
                                                className={classNames(
                                                    ' bg-white px-3',
                                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                                )}
                                            >
                                                <EGiftForm />
                                            </Tab.Panel>
                                            <Tab.Panel
                                                className={classNames(
                                                    ' bg-white px-3',
                                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                                )}
                                            >
                                                <PhysicalGiftCardForm />
                                            </Tab.Panel>
                                        </Tab.Panels>
                                    </Tab.Group>



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