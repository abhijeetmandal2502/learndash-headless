import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const CheckCardBalance = () => {

    const [count, setCount] = useState(0);
    const [showBalaence, setShowBalance] = useState(false);

    const counter = (max, min) => {
        for (let count = min; count <= max; count++) {

            setTimeout(() => {
                setCount([count])
            }, 1000);
        }

    }

    // handle counter

    const handleCounter = () => {

        setTimeout(() => {

            setShowBalance(true)


        }, 10);

    }

    useEffect(() => {
        counter(0, 10000)
    }, [count])

    return (
        <>
            <div className={`px-48`}>
                {!showBalaence ? <div>
                    <h4 className={`triplelargefXL text-center pb-8 font-normal`}>
                        enter gift card account #to check balance
                    </h4>
                    <div className='flex justify-center items-center'>
                        <div>
                            <div className='smallf border border-lightgray text-gray py-1 text-center mb-4'>
                                gift card account number
                            </div>
                            <Image src="/start/recaptcha.svg" width={300} height={200} />
                            <div className={`bg-black text-white text-center font-[500] rounded-3xl px-3 py-2 mt-6`}
                                onClick={() => { handleCounter() }}
                            >
                                check balance
                            </div>
                        </div>
                    </div>
                </div> : ""}

                {showBalaence ? <div className={``}>
                    <Image src="/start/GiftCard3D.svg" width={235} height={235} />

                    <div className='flex justify-center items-center'>
                        <div>
                            <div className='mediumf y py-1 text-center mb-4'>
                                balance for xxxx-xxx
                            </div>

                            {/* gift balance counter */}

                            <div key={count} className={``}>
                                {count}
                            </div>


                            <p className='smallf y py-1 text-center mb-4'>
                                expiration date: 04/04/24
                            </p>
                            <div className={`bg-black text-white text-center font-[500] rounded-3xl px-3 py-2 mt-6 cursor-pointer`}
                                onClick={() => { setShowBalance(false) }}
                            >
                                check balance
                            </div>
                        </div>
                    </div>
                </div> : ""}

            </div>
        </>
    )
}

export default CheckCardBalance