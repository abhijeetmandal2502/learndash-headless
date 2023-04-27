import GiftCardModel from 'components/Start/DialogCard/GiftCardModel'
import GiftCardBtn from 'components/Start/GiftCardBtn'
import Image from 'next/image'
import React, { useState } from 'react'

const GiftCardMobile = () => {
    const [activeEgift, setActiveEgift] = useState(false);

    const [activePhysicalGift, setActivePhysicalGift] = useState(false);

    let [isOpenD, setIsOpenD] = useState(false)

    function closeModal() {
        setIsOpenD(false)
    }

    function openModal() {
        setIsOpenD(true)
    }

    return (
        <>
            <div className='px-5'>
                <div className='flex items-center px-3 py-5 space-x-5'>
                    <Image alt='start' src="/images/homeColor.svg" height='80' width='80' />
                    <h3 className='mt-4 text-black dubblelargef '>gift shoppe</h3>
                </div>
                <div className='bg-transparent'>
                    <div className=''>
                        <Image className='w-full' src="/start/GiftCard3D.svg" width={500} height={314} />
                    </div>
                    <div>
                        <h3 className='pb-3 text-black dubblelargef'>ce as a gift? yep!</h3>
                        <p className='mb-6 leading-7 smallf text-blck'>be a superhero in 3 minutes! have a beautifully crafted cesimple gift card instantly emailed to a lucky recipient or physically delivered within 5 days!
                            you’ll receive an email confirmation too! gift cards are valid for 5 years! <span className='font-bold text-black '>simple!</span></p>


                    </div>
                    {/* course checkout */}
                    <div className='col-span-12 md:col-span-7'>
                        <div className='flex flex-col space-y-8'>
                            <div className='w-full' onClick={() => { openModal(), setActiveEgift(true), setActivePhysicalGift(false) }} >
                                <GiftCardBtn animationCss={"ecardRotate"} title="e-gift card" icon="/start/eGift.svg" />
                                {/* giftcard button model */}
                                <GiftCardModel isOpenD={isOpenD} closeModal={closeModal} activeEgift={activeEgift} activePhysicalGift={activePhysicalGift} />
                            </div>
                            <div className='w-full' onClick={() => { openModal(), setActivePhysicalGift(true), setActiveEgift(false) }} >
                                <GiftCardBtn animationCss={"ecardImgAni"} title="physical gift card" icon="/start/PhysicalGift.svg" />
                            </div>
                        </div>
                    </div>
                    {/* giftcard faq section  */}
                    <div className='my-10'>
                        <div className='flex justify-center md-4 '>
                            <button className='text-black mediumf my-2 font-bold border-b leading-[100%]'>
                                gift card faq
                            </button>
                        </div>

                        <div className='flex justify-center md-3'>
                            <button className='text-black mediumf my-2 font-bold border-b leading-[100%]'>check gift card balance</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GiftCardMobile