import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../Start/Start.module.css'
import styles2 from '../../Start/PaymentMothod.module.css'
import PaymentByCreditCard from './PaymentByCreditCard'
import PaymentByPaypal from './PaymentByPaypal'
import SplitPaymentWithGiftCard from '../SplitPayment/SplitPaymentWithGiftCard'

const SplitPayMethod = ({ openModal }) => {
    const [showSplitPayment, setShowSplitPayment] = useState(false);
    const [CreditCardPayment, setCreditCardPayment] = useState(false);
    const [PaypalPayment, setPaypalPayment] = useState(false);
    // const [disabled, setDisabled] = useState(false);

    // paypal disabled 

    const ShowPaymentOptionWithGiftCard = () => {
        setShowSplitPayment(true)
    }
    const PaymentWithCreditCard = () => {

        setCreditCardPayment(true)
    }
    const PaymentWithPaypal = () => {

        setPaypalPayment(true);
    }
    const giftCardDetail = {
        image: "/start/GiftCard3D.png",
        title: "split payment with gift card(s)",
        DueBalance: "remaining due: $40"
    }

    const creditCardDetail = {
        image: "/start/creditCardShadow.svg",
        title: "split payment with credit card",
        DueBalance: "remaining due: $20"
    }

    const paypalCardDetail = {
        image: "/start/PayPalLogo.svg",
        title: "split payment with paypal",
        DueBalance: "remaining due: $20"
    }
    // payment options data 
    console.log('PaypalPayment', PaypalPayment, CreditCardPayment);

    return (
        <>
            <div className=' overflow-y-scroll md:h-auto h-screen'>
                <div className={`relative  ${showSplitPayment || CreditCardPayment || PaypalPayment ? styles2.hidebgComp : ""} `}>

                    <div className='md:px-16 md:block hidden'>
                        <div className='flex justify-between items-center space-x-3'>
                            <Image src="/start/splitPayment.png" width={250} height={165} alt="split card" />

                            <div>
                                <h2 className='text-[50px] tracking-wide leading-[107%]'>split payment methods</h2>
                                <p className='text-[26px]  font-Barlow  tracking-wide leading-[107%] md:mt-3'>use up to 4 gift cards plus one (1) additional payment method (simply click on an icon to pay)</p>

                            </div>
                        </div>
                    </div>

                    {/* card header for mpobile */}

                    <div className='md:hidden px-5'>
                        <div className='md:flex justify-between items-center space-x-3'>
                            <div className='flex justify-center items-center '>
                                <Image src="/start/splitPayment.png" width={80} height={60} alt="split card" />
                                <h2 className='md:text-[50px] text-[19px]  tracking-wide leading-[107%]'>split payment methods</h2>
                            </div>
                            <div>
                                <p className='text-[16px] text-center font-Barlow  tracking-wide leading-[107%] md:mt-3'>use up to 4 gift cards plus one (1) additional payment method (simply click on an icon to pay)</p>

                            </div>
                        </div>
                    </div>

                    {/* payment options */}

                    <div className=' grid grid-cols-12 md:mx-20 md:mt-[71px] relative md:mb-20 mb-5 md:px-0 px-5'>
                        {/* add fift payment card */}
                        <div className=' md:col-span-5 col-span-12 md:flex items-center justify-between px-7'>
                            <div className=' cursor-pointer' onClick={() => { ShowPaymentOptionWithGiftCard() }}>
                                <p className='md:text-[21px] text-14px tracking-wide py-3 text-center leading-[107%]'>+ add gift card(s)</p>
                                <div className=' flex justify-center'>
                                    <Image src={`/start/AddGiftPayment.svg`} width={218} height={150} alt="gift card" className={`md:w-auto md:h-auto w-[150px] h-[100px] ${showSplitPayment == undefined ? 'hidden' : ''}`} />

                                    {showSplitPayment == undefined ? <div className='relative'>
                                        <Image src={`/start/giftCardSelcted.svg`} width={300} height={200} alt="gift card" className='md:w-auto md:h-auto w-[250px] h-[150px]' />
                                        <div className={`absolute top-0 right-8`}>
                                            <Image src="/start/splitEdit.svg" width={30} height={30} alt="credit card" className='' />
                                        </div>
                                    </div> : ""}
                                </div>
                                <p className='md:text-[31px] text-gray mt-5 text-center leading-[121%] tracking-wider'>$0 applied</p>
                            </div>
                            <div className='flex justify-center py-2'>
                                <p className='bg-black text-white px-3 max-w-[38px] md:w-full  text-[26px] rounded-full'>+</p>
                            </div>
                        </div>

                        <div className=' md:col-span-7 col-span-12  '>
                            <div className='grid grid-cols-12  '>

                                {/* add credit card payment */}
                                <div className=' col-span-5' onClick={() => { PaymentWithCreditCard() }}>
                                    <p className='md:text-[21px] text-[12px] py-3 text-center leading-[107%]'>+ add credit card(s)</p>
                                    <div className='flex justify-center items-center relative'>
                                        < Image src={`/start/AddCreditCard.svg`} width={146} height={150} alt="credit card" className={`md:w-auto md:h-auto w-[80px] h-[70px] ${CreditCardPayment == undefined ? 'hidden' : ''}`} />

                                        {CreditCardPayment == undefined ?
                                            <div className='relative'>
                                                {PaypalPayment == undefined ?

                                                    <Image src={`/start/creditCardBlur.svg`} width={300} height={200} alt="gift card" className='md:w-auto md:h-auto w-[300px] h-[100px] ' />

                                                    : <Image src={`/start/creditCardSeleted.svg`} width={300} height={200} alt="gift card" className='md:w-auto md:h-auto w-[300px] h-[100px] ' />}



                                                <div className={`absolute top-0 right-3`}>
                                                    <Image src="/start/splitEdit.svg" width={30} height={30} alt="credit card" className='' />
                                                </div>
                                            </div> : ""}
                                    </div>

                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className=' text-black font-bold text-[21px] mt-10'>or</p>
                                </div>

                                {/* add paypal payment */}
                                <div className=' col-span-5' onClick={() => { PaymentWithPaypal() }}   >
                                    <p className='md:text-[21px] text-[12px] tracking-wide text-center py-3 leading-[107%]'>+ add paypal</p>
                                    <div className='flex justify-center items-center relative'>
                                        <Image src={`/start/AddPaypal.svg`} width={146} height={150} alt="credit card" className={`md:w-auto md:h-auto w-[80px] h-[70px] ${PaypalPayment == undefined ? 'hidden' : ''}`} />

                                        {PaypalPayment == undefined ? <div className='relative'>

                                            {CreditCardPayment == undefined ?

                                                <Image src={`/start/paypalBlur.svg`} width={300} height={200} alt="gift card" className='md:w-auto md:h-auto w-[300px] h-[100px] ' />

                                                : <Image src={`/start/paypalSelected.svg`} width={300} height={200} alt="gift card" className='md:w-auto md:h-auto w-[200px] h-[100px]' />}


                                            <div className={`absolute top-0 right-3`}>
                                                <Image src="/start/splitEdit.svg" width={30} height={30} alt="credit card" className='' />
                                            </div>
                                        </div> : ""}
                                    </div>

                                </div>
                            </div>

                            <p className='md:text-[31px] text-gray mt-5 text-center leading-[121%] tracking-wider'>$0 applied</p>
                        </div>

                    </div>

                    <div className=' md:px-0 px-5 absolute md:-bottom-28 -bottom-12 right-0'>
                        <div className='flex justify-between items-center space-x-5'>
                            <div className='md:text-[45px] text-[14px] text-voilet font-normal'>total due: $40</div>

                            <div className={` mx-auto`}>
                                <button type="button"
                                    // onClick={() => { openModal() }}
                                    className={`w-full px-16  py-2 tracking-[0.02em] text-white opacity-[0.3]  ${styles.btnDesabledBg}  rounded-3xl text-[16px] font-semibold traking-[0.02em] focus:outline-none`}  >continue

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* add gift card payment  */}
                <div className={`${showSplitPayment ? 'block transition-all ease-in duration-1000' : 'hidden'} w-full absolute top-20 left-0`}>
                    <SplitPaymentWithGiftCard giftCardDetail={giftCardDetail} openModal={openModal} setShowSplitPayment={setShowSplitPayment} />
                </div>

                {/* add credit card payment */}

                <div className={`${CreditCardPayment ? 'block transition-all ease-in duration-1000' : 'hidden'} w-full absolute top-20 left-0`}>
                    <PaymentByCreditCard giftCardDetail={creditCardDetail} setCreditCardPayment={setCreditCardPayment} openModal={openModal} />
                </div>


                <div className={`${PaypalPayment ? 'block transition-all ease-in duration-1000' : 'hidden'} w-full absolute top-20 left-0`}>
                    <PaymentByPaypal giftCardDetail={paypalCardDetail} setPaypalPayment={setPaypalPayment} openModal={openModal} />
                </div>

            </div>

        </>
    )
}

export default SplitPayMethod