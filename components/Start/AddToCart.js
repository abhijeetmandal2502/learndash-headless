import React, { useState } from 'react'
import styles from '../../src/styles/CoursePage.module.css'
import Image from 'next/image'

import { RiDeleteBin6Line } from 'react-icons/ri'
import CheckoutForm from './CheckoutForm'
import PaypalPayment from './PaypalPayment'
import PaymentGiftCard from './PaymentGiftCard'
import SplitPayment from './SplitPayment'
import { MdArrowDropDown, MdKeyboardArrowDown } from 'react-icons/md'
import { BsToggleOff } from 'react-icons/bs'

const AddToCart = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const [ShowPaymentOption, setShowPaymentOption] = useState(false)
    const [lessMoreBtn, setLessMoreBtn] = useState("view more")


    const paymentCart = [
        {
            icon: "/start/credit.png",
            content: <CheckoutForm />,
            cardTooltips: "pay with credit card"
        },
        {
            icon: "/start/paypal.png",
            content: <PaypalPayment />,
            cardTooltips: "pay with paypal"
        },
        {
            icon: "/start/giftCard.png",
            content: <PaymentGiftCard />,
            cardTooltips: "use gift card"
        },
        {
            icon: "/start/split.png",
            content: <SplitPayment />,
            cardTooltips: "split payment method"
        },
    ]
    const HandlePaymentOption = () => {

        if (!ShowPaymentOption) setShowPaymentOption(true);
        else setShowPaymentOption(false);

    }

    const HandleMoreLessBTn = () => {
        if (lessMoreBtn == 'view more') {
            setLessMoreBtn('view less')
        } else {
            setLessMoreBtn('view more')
        }
    }

    return (
        <>

            {/* selected items componets  */}

            <div className={` relative grid grid-cols-9 bg-white my-5 mx-5 shadow-2xl  p-3 md:p-4`}>
                <div className={`col-span-1 relative flex items-start justify-start`}>
                    <Image src="/start/cart.svg" width={40} height={40} alt="empty basket" />
                    <div className='absolute w-5 h-5 text-white rounded-full left-6 md:left-6 2xl:left-7 -top-[6px] bg-voilet'><p className='flex items-center justify-center'>2</p></div>
                </div>
                <div className='col-span-8 pl-4'>
                    <div className={`flex justify-between items-center`}>
                        <div className={`flex space-x-5 items-center `}>
                            <p className={`text-black text-[16px] font-bold leading-[130%]`}>useing research to market your practice</p>
                        </div>
                        <div className={`flex space-x-3 items-center`}>
                            <div className='text-black text-[26px]' >$40</div>
                            <RiDeleteBin6Line size={24} />
                        </div>
                    </div>
                    {/* <div className='w-full my-2 border-b-[2px] border-lightgray'></div>
                    <div className={`flex justify-between items-center`}>
                        <div className={`flex space-x-5 items-center `}>
                            <p className={`text-black text-[16px] font-bold leading-[130%]`}>useing research to market your practice</p>
                        </div>
                        <div className={`flex space-x-3 items-center`}>
                            <p className='text-black  font-thin text-[26px]'>$40</p>
                            <RiDeleteBin6Line size={24} />
                        </div>
                    </div> */}
                </div>
                <div onClick={() => HandleMoreLessBTn()} className={`item-center transition duration-[1000ms] ease-in-out cursor-pointer rounded-full bg-black w-max h-max absolute -bottom-2 flex px-2  left-1/2 -translate-x-1/2 `}>
                    {/* ${ShowPaymentOption ? styles.toggleOn : styles.toggleOff} `}> */}
                    <div className={` ${lessMoreBtn == 'view more' ? styles.toggleOff : styles.toggleOn} `}>
                        <MdKeyboardArrowDown className='text-white' size={20} />
                    </div>
                    <p className={`text-white md:text-[13px]   pr-1 font-thin`}>{lessMoreBtn}</p>

                </div>

            </div>

            {/* checkout componets  */}
            <div className={`${styles.readyToCheckoutBg} mt-3 mx-5 cursor-pointer relative `} onClick={() => { HandlePaymentOption() }}>

                <div className={`flex justify-between items-center px-6 py-2`}>
                    <div className={`flex space-x-1 items-center `}>
                        <Image src="/start/emptyBasketPrice.svg" width={25} height={27} alt="empty basket" />
                        <p className={`text-white text-[16px] font-semibold  leading-[130%]`}>simple checkout</p>
                    </div>
                    <div className={`flex flex-col justify-end items-end`}>
                        <p className='text-white -mb-[5px] font-bold text-[10px]'>total</p>
                        <div className='text-white font-thin  text-[26px]' >$40</div>
                    </div>

                </div>

                <div className={`rounded-full bg-black w-5 h-5 absolute -bottom-2  left-1/2 -translate-x-1/2 ${ShowPaymentOption ? styles.toggleOn : styles.toggleOff} `}>
                    <MdKeyboardArrowDown className='text-white' size={20} />
                </div>

            </div>

            {/* payment option componet  */}


            <div className={`mx-5 bg-white shadow-2xl pb-4 ${ShowPaymentOption ? 'transition-all ease-in duration-1000' : "hidden"}`}>

                <div className='px-3'>

                    <input type="email" placeholder='your email' className='w-full px-5 py-[6px] mt-4 mb-2 border border-gray' />

                    <div className='flex items-center justify-between'>
                        {paymentCart?.map((item, id) => {
                            console.log("active", activeIndex)
                            return (

                                <>
                                    <div className={`tooltip cursor-pointer p-[2.5px] rounded-md  ${activeIndex == id ? styles.coursePriceSelectedBg : ""}`} key={id} onClick={() => { setActiveIndex(id) }}>
                                        <div className={`${!activeIndex && styles.image_wrapper, styles.shine} `}>
                                            <Image className={`rounded-md     `} src={item.icon} width={200} height={60} alt="empty basket" />
                                        </div>
                                        <div class="tooltiptext text-[12px] z-10">
                                            <div className='relative'>
                                                <span>{item.cardTooltips}</span>
                                                <MdArrowDropDown className='absolute right-[40%] text-black -bottom-[16px] ' size={22} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>

                    {/* credit card info  */}

                    <div className='h-auto duration-1000 transation-all ease'>{paymentCart[activeIndex].content}</div>

                </div>

            </div>



        </>
    )
}

export default AddToCart