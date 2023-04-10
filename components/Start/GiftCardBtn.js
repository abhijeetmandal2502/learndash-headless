import Image from 'next/image'
import React from 'react'
import styles from '../../components/Start/GiftCard.module.css'

const GiftCardBtn = ({ title, icon }) => {
    return (
        <>
            <button className={` py-3 px-5 min-w-[85%] mx-10 flex items-center space-x-5 ${styles.eGiftbg}`}>
                <div>
                    <Image src={icon} width={70} height={70} />
                </div>

                <p className='text-[27px] text-white '>{title}</p>

            </button>
        </>
    )
}

export default GiftCardBtn