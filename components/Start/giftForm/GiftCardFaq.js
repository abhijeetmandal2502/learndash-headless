import React from 'react'

const GiftCardFaq = () => {

    const faqData = [
        {
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor'
        },

        {
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor'
        },
        {
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor'
        },
        {
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor'
        },
        {
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor'
        },
    ]

    return (
        <>
            <div className={`h-96 overflow-y-auto px-32 `}>
                <div className={``}>
                    <h2 className={` text-center supermediumf pb-8 tracking-[0.5px]`}>
                        gift card faq
                    </h2>
                    {
                        faqData?.map((item, key) => {
                            return (
                                <>
                                    <div key={key} className={``}>
                                        <div >
                                            <h4 className={`dubblelargefXL font-[500] text-center pb-2 tracking-[0.5px]`}>
                                                {item?.subTitle}
                                            </h4>
                                            <p className={`mediumf text-center tracking-[0.5px]`}>
                                                {item?.content}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }


                </div>

            </div>
        </>
    )
}

export default GiftCardFaq