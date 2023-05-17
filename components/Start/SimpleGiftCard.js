import Image from 'next/image'
import React from 'react'
import styles from '../Start/GiftCard.module.css'

const SimpleGiftCard = () => {
    return (
        <>
            <div className='bg-transparent'>
                <div className=''>
                    <Image className={`max-w-[335px] -ml-[16%] ${styles.giftCardImage}`} src="/start/GiftCard3D.svg" width={500} height={314} alt="gift" />
                </div>
                <div className='pl-5'>
                    <h3 className='pb-3 text-black dubblelargef'>ce as a gift? yep!</h3>
                    <p className={`mb-5 leading-7 smallf text-blck ${styles.giftCardContent}`}>be a superhero in 3 minutes! have a beautifully crafted cesimple gift card instantly emailed to a lucky recipient or physically delivered within 5 days!
                        you’ll receive an email confirmation too! gift cards are valid for 5 years! <span className='font-bold text-black '>simple!</span></p>

                    <div className='md-4'>
                        <button className='text-black smallf font-bold border-b leading-[100%]'>
                            gift card faq
                        </button>
                    </div>

                    <div className=''>
                        <button className='text-black smallf font-bold border-b leading-[100%]'>check gift card balance</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SimpleGiftCard