import Image from 'next/image'
import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import styles from '../../../src/styles/CoursePage.module.css'

const Success = () => {

    const OrderList = [

        {
            giftImage: "/start/PhysicalGift.svg",
            giftType: 'physical',
            name: "Susan smith",
            address: " 6801 Tennyson Dr. Suite 1234, Townsville, TX ",
            price: '40',

        },
        {
            giftImage: "/start/PhysicalGift.svg",
            giftType: 'physical',
            name: "John Williams",
            address: "7654 Valley Mills Blvd., Apt 13B, City Burg, TX",
            price: '40',

        },


        {
            giftImage: "/start/eGift.svg",
            giftType: 'e-gift',
            name: "Theodore Robinson",
            address: "trobinson@gmail.com                             ",
            price: '10',

        }
    ]
    return (
        <>
            <div className={`flex flex-col `}>
                <div className={`flex justify-center items-center`}>
                    <div>
                        <Image src="/start/GiftCard3D.svg" width="235" height="235" />
                        <h4 className='text-center triplelargefXL'>Success</h4>
                        <p className='text-center mediumf mb-4'>gift card have been sent to :</p>
                    </div>
                </div>

                <div className={`  p-3 border-b border-t border-lightgray  ${styles.giftAddedList}`}>

                    {OrderList?.map((item, key) => {
                        return (
                            <>
                                <div key={key} className={`flex justify-between items-center `}>
                                    <div className={` grid grid-cols-12  w-full gap-2 `}>

                                        <div className=' col-span-1 w-full'>
                                            <Image src={item.giftImage} width={25} height={25} alt="gift" />
                                        </div>
                                        <div className='  col-span-1 w-full'>
                                            <p className={` text-black extsmallf font-semibold leading-[130%]`}>{item.giftType} </p>
                                        </div>
                                        <div className=' col-span-3 w-full'>
                                            <p className={` minismallf  leading-[130%]`}>{item.name} </p>
                                        </div>

                                        <div className=' col-span-5 w-full '>
                                            <p className={`minismallf  leading-[130%]`}>{item.address} </p>
                                        </div>
                                        <div className=' col-span-1 w-full'>
                                            <p className=' text-black minismallf' >${item.price} </p>
                                        </div>
                                        <div className=' col-span-1 w-full'>
                                            <RiDeleteBin6Line size={15} />
                                        </div>
                                    </div>

                                </div>

                            </>
                        )
                    })}
                </div>

                <div className={`grid grid-cols-12 py-2 mt-3`}>
                    <div className={` col-span-3  col-start-3 `}>
                        <p className={`text-voilet minismallf font-bold leading-[130%]`}> free delivery </p>
                    </div>
                    <div className={`col-span-1 col-start-11 `}>
                        <div className=' minismallf text-voilet font-bold' >$ 2 </div>
                    </div>
                </div>

                <div className={`grid grid-cols-12 py-2`}>
                    <div className={` col-span-5  col-start-3 `}>
                        <p className={`text-black minismallf font-bold leading-[130%]`}> receipt emailed to: you123@hotmail.com </p>
                    </div>
                    <div className={`col-span-2 col-start-11  `}>
                        <div className=' minismallf text-black font-bold' >total $ 92 </div>
                    </div>
                </div>



                <div className={`flex justify-center items-center space-x-5`}>
                    <div className={`bg-black text-white text-center font-[500] rounded-3xl px-5 py-2 mt-6 cursor-pointer`}
                    // onClick={() => { setShowBalance(false) }}
                    >
                        back to lobby
                    </div>

                    <div className={` border text-voilet border-voilet text-center font-[500] rounded-3xl px-5 py-2 mt-6 cursor-pointer`}
                    // onClick={() => { setShowBalance(false) }}
                    >
                        view or print receipt
                    </div>
                </div>

            </div>
        </>
    )
}

export default Success