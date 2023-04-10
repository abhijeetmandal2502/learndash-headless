import Image from 'next/image'
import React from 'react'

const SimpleGiftCard = () => {
    return (
        <>
            <div className='bg-transparent'>
                <div className=''>
                    <Image src="/start/GiftCard3D.svg" width={400} height={314} />
                </div>
                <div className='pl-5'>
                    <h3 className='pb-3'>ce as a gift? yep!</h3>
                    <p className='text-gray mb-6'>be a superhero in 3 minutes! have a beautifully crafted cesimple gift card instantly emailed to a lucky recipient or physically delivered within 5 days!
                        you’ll receive an email confirmation too! gift cards are valid for 5 years! <span className='text-black'>simple!</span></p>

                    <div className='md-4'>
                        <button className='text-black border-b leading-[100%]'>
                            gift card faq
                        </button>
                    </div>

                    <div className='md-3'>
                        <button className='text-black border-b leading-[100%]'>check gift card balance</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SimpleGiftCard