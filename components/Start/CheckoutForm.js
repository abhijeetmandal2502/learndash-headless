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
            <div className="flex justify-center items-center mt-10 px-5 ">
                <div className=" px-4 md:px-6 2xl:px-0 flex ">
                    <div className="flex flex-col justify-start items-start ">

                        <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">


                            <div className="p-4 bg-white flex flex-col lg:w-full ">

                                <div className="flex justify-between items-center border-b-2 py-2 mb-4 border-bordergray">
                                    <h2 className="font-semibold text-[18px]">light-speed checkout</h2>
                                    <div className="font-semibild text-[32px]">$40</div>
                                </div>

                                <div className="">
                                    <label className={`font-bold`}>email</label>
                                    <input className="border border-bordergray p-3  w-full  leading-3" type="email" />
                                </div>


                                <div className="mt-4 flex-col">
                                    <div>
                                        <label className="mt-8 mb-1.5  font-bold  leading-4 ">enter card number</label>
                                        <input className="border   border-bordergray p-3 w-full  leading-3" type="email" placeholder="**** **** **** *****" />
                                    </div>
                                    <div className="flex-row flex mt-5 space-x-5">
                                        <div>
                                            <label className="mt-8 mb-1.5  leading-4 font-bold">exp. date</label>
                                            <input className="border  border-bordergray p-3 w-full text-sm   leading-3  " type="email" placeholder="MM/YY" />
                                        </div>
                                        <div>
                                            <label className="mt-8 mb-1.5  leading-4 font-bold">security code</label>
                                            <input className="border  border-bordergray p-3 w-full  leading-3 text-gray-600 text-sm " type="email" placeholder="CVC" />
                                        </div>
                                        <div>
                                            <label className="mt-8 mb-1.5  leading-4 font-bold ">zip</label>
                                            <input className="border  border-bordergray p-3 w-full  leading-3 text-sm  " type="text" />
                                        </div>
                                    </div>

                                    <div className={`flex items-center space-x-1 py-4`}>
                                        <Image src="/images/savePassword.svg" width={19} height={19} alt="password icon" />
                                        <p className={`text-gray`}>save payment for future purchases?</p>
                                    </div>

                                    <div className={`relative`}>
                                        <label className="mt-8 mb-1.5  leading-4 font-bold ">create Password</label>
                                        <input className="border  border-bordergray p-3 w-full  leading-4" type="password" placeholder="**** **** **** *****" />
                                        <div className="absolute cursor-pointer top-10 right-2">
                                            <Image src="/images/eyeIcon.svg" width={22} height={15} alt="show hide password icon" />
                                        </div>
                                    </div>

                                </div>

                                <button type="button"
                                    onClick={openModal} className={`w-full px-4 mt-4 py-3 tracking-wide text-white    ${styles.submitbtnbg} rounded-3xl text-[18px] font-semibold traking-[0.02em] focus:outline-none`}  >start course! $40.00

                                </button>
                            </div>
                        </div>
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
    );
};

export default CheckoutForm;
