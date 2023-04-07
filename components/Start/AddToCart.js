import React, { useState } from 'react'
import styles from '../../src/styles/CoursePage.module.css'
import Image from 'next/image'

import { RiDeleteBin6Line } from 'react-icons/ri'
import CheckoutForm from './CheckoutForm'
import PaypalPayment from './PaypalPayment'
import PaymentGiftCard from './PaymentGiftCard'
import SplitPayment from './SplitPayment'

const AddToCart = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const paymentCart = [

        {
            icon: "/start/credit.png",
            content: <CheckoutForm />
        },
        {
            icon: "/start/paypal.png",
            content: <PaypalPayment />
        },
        {
            icon: "/start/giftCard.png",
            content: <PaymentGiftCard />
        },
        {
            icon: "/start/split.png",
            content: <SplitPayment />
        },
    ]

    const selectCourse = [


    ]


    return (
        <>

            {/* selected items componets  */}

            <div className={` relative bg-white mt-5 mx-5`}>

                <div className={`flex justify-between items-center px-6 py-3 shadow-2xl`}>
                    <div className={`flex space-x-5 items-center `}>
                        <Image src="/start/cart.svg" width={30} height={26} alt="empty basket" />
                        <p className={`text-black text-[18px] leading-[130%]`}>useing research to market your practice</p>
                    </div>
                    <div className={`flex space-x-3 items-center`}>
                        <div className='text-black text-[26px]' >$40</div>
                        <RiDeleteBin6Line size={20} />
                    </div>

                </div>
                <div className=' absolute top-3 left-11   w-5 h-5 rounded-full text-white bg-voilet'><p className='flex justify-center items-center'>2</p></div>

            </div>

            {/* checkout componets  */}
            <div className={`${styles.readyToCheckoutBg} mt-3 mx-5`}>

                <div className={`flex justify-between items-center px-6 py-3`}>
                    <div className={`flex space-x-1 items-center `}>
                        <Image src="/start/emptyBasketPrice.svg" width={25} height={27} alt="empty basket" />
                        <p className={`text-white text-[18px] leading-[130%]`}>ready to checkout</p>
                    </div>
                    <div className={`flex flex-col justify-end items-center`}>
                        <p className='text-white text-[12px] '>total</p>
                        <div className='text-white text-[26px]' >$40</div>
                    </div>

                </div>

            </div>

            {/* payment option componet  */}


            <div className={`mx-5 bg-white shadow-2xl pb-4`}>

                <div className='px-3'>

                    <input type="email" placeholder='your email' className='py-3 px-5 my-5 border border-gray w-full' />

                    <div className='flex items-center justify-between'>
                        {paymentCart?.map((item, id) => {
                            return (
                                <>
                                    <div className={` cursor-pointer shadow-2xl`} key={id} onClick={() => { setActiveIndex(id) }}>
                                        <Image className={`rounded-xl ${paymentCart[activeIndex] == id ? 'shadow-2xl' : ""}  `} src={item.icon} width={80} height={60} />
                                    </div>
                                </>
                            )
                        })}
                    </div>

                    {/* credit card info  */}

                    <div className=' transation-all ease  duration-1000 h-auto'>{paymentCart[activeIndex].content}</div>

                </div>

            </div>



        </>
    )
}

export default AddToCart