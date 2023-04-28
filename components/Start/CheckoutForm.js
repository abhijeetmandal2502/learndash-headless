import Image from "next/image";
import React, { useState } from "react";
import styles from '../Start/Start.module.css'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Congratulation from "./DialogCard/Congratulation";

const CheckoutForm = () => {
    const countries = ["China", "Russia", "UK"];
    const [menu, setMenu] = useState(false);
    const [country, setCountry] = useState("United States");

    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };


    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="flex items-center justify-center ">
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
                                            {/* <label className="mt-5 mb-1.5  font-bold  leading-4 text-xs  ">enter card number</label> */}
                                            <input className="w-full leading-3 border border-bordergray md:p-2 p-1 " type="number" placeholder="**** **** **** *****" />
                                        </div>
                                        <div className="flex flex-row mt-2 space-x-2">
                                            <div>
                                                {/* <label className="mt-5 mb-1.5  leading-4 text-xs font-bold">exp. date</label> */}
                                                <input className="w-full leading-3 border smallf border-bordergray md:p-2 p-1 " type="email" placeholder="mm/yy" />
                                            </div>
                                            <div>
                                                {/* <label className="mt-5 mb-1.5  leading-4 text-xs font-bold">security code</label> */}
                                                <input className="w-full leading-3 text-gray-600 border smallf border-bordergray md:p-2 p-1 " type="email" placeholder="cvc" />
                                            </div>
                                            <div>
                                                {/* <label className="mt-5 mb-1.5 text-xs  leading-4 font-bold ">zip</label> */}
                                                <input className="w-full leading-3 border smallf border-bordergray md:p-2 p-1 " type="text" placeholder="zip" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center py-2 ">
                                        {/* <div className="p-[2px] flex item-center  border-black border-[1px] h-6 w-6"> */}
                                        <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-black border-gray-300 cursor-pointer" />
                                        {/* </div> */}
                                        <label Htmlfor="link-checkbox" className={`text-black text-sm ml-2 cursor-pointer`}>save payment for future purchases?</label>
                                    </div>

                                    <div className={`relative`}>
                                        {/* <label className="mt-8 mb-1.5 text-xs leading-4 font-bold ">create Password</label> */}
                                        <input className="w-full leading-4 border border-bordergray md:p-2 p-1" type="password" placeholder="create password" />
                                        <div className="absolute cursor-pointer top-2 right-2">
                                            <Image src="/images/eyeIcon.svg" width={22} height={15} alt="show hide password icon" />
                                        </div>
                                    </div>

                                </div>

                                <button type="button"
                                    onClick={openModal} className={`w-full px-4 mt-3 py-2 tracking-wide text-white    ${styles.submitbtnbg} rounded-3xl smallf font-semibold traking-[0.02em] focus:outline-none`}  >start course! $40.00
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* model popup */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 " onClose={closeModal}>
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
                                <Dialog.Panel className="w-full max-w-4xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white">
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
                                        <Congratulation />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    );
};

export default CheckoutForm;
