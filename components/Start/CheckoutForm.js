import Image from "next/image";
import React, { useState } from "react";
import styles from '../Start/Start.module.css'

const CheckoutForm = () => {
    const countries = ["China", "Russia", "UK"];
    const [menu, setMenu] = useState(false);
    const [country, setCountry] = useState("United States");

    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };

    return (
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
                                <input className="border border-bordergray p-4  w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" />
                            </div>


                            <div className="mt-4 flex-col">
                                <div>
                                    <label className="mt-8 mb-1.5  font-bold text-base leading-4 ">enter card number</label>
                                    <input className="border   border-bordergray p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="**** **** **** *****" />
                                </div>
                                <div className="flex-row flex mt-5 space-x-5">
                                    <div>
                                        <label className="mt-8 mb-1.5 text-base leading-4 font-bold">exp. date</label>
                                        <input className="border  border-bordergray p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="MM/YY" />
                                    </div>
                                    <div>
                                        <label className="mt-8 mb-1.5 text-base leading-4 font-bold">security code</label>
                                        <input className="border  border-bordergray p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="CVC" />
                                    </div>
                                    <div>
                                        <label className="mt-8 mb-1.5 text-base leading-4 font-bold ">zip</label>
                                        <input className="border  border-bordergray p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" />
                                    </div>
                                </div>

                                <div className={`flex items-center space-x-1 py-4`}>
                                    <Image src="/images/savePassword.svg" width={19} height={19} alt="password icon" />
                                    <p className={`text-gray`}>save payment for future purchases?</p>
                                </div>

                                <div className={`relative`}>
                                    <label className="mt-8 mb-1.5 text-base leading-4 font-bold ">create Password</label>
                                    <input className="border rounded-tl  border-bordergray p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="password" placeholder="**** **** **** *****" />
                                    <div className="absolute cursor-pointer top-10 right-2">
                                        <Image src="/images/eyeIcon.svg" width={22} height={15} alt="show hide password icon" />
                                    </div>
                                </div>

                            </div>

                            <button className={`w-full px-4 mt-4 py-3 tracking-wide text-white    ${styles.submitbtnbg} rounded-3xl text-[18px] font-semibold traking-[0.02em] focus:outline-none`} type="submit">start course! $40.00

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
