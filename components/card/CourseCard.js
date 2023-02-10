
import React from 'react'
import { MdOutlineWatchLater } from 'react-icons/md'

const CourseCard = () => {
    const data = [
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "spa masterclass"
        },
        {
            price: 40,
            duration: "4hours",
            discription: "using research to market your practice"
        },

    ]

    return (
        <>
            <div className='grid grid-cols-12 h-screen overflow-y-scroll no-scrollbar overflow-x-hidden '>
                {data?.map((item, index) => {

                    return (<div key={index} className=' bg-transparent md:col-span-6 col-span-12 border border-bordergray  p-10 flex flex-col justify-between '>
                        <div className='flex justify-between'>
                            <div className='flex justify-center items-center space-x-1'>
                                <MdOutlineWatchLater />
                                <div>{item.duration}</div>
                            </div>
                            <div className='text-2xl'>
                                ${item.price}
                            </div>
                        </div>
                        <div className='pt-24 text-3xl'>
                            {item.discription}
                        </div>

                    </div>)

                })}

            </div>
        </>
    )
}

export default CourseCard