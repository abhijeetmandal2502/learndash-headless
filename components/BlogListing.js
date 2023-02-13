import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const BlogListing = () => {

    const blogData = [

        {

            title: "observing confidentiality",
            name: "Laura Allen",
            date: "June-3-2022",
            discription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling."
        },
        {

            title: "observing confidentiality",
            name: "Laura Allen",
            date: "June-3-2022",
            discription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling."
        },
        {

            title: "observing confidentiality",
            name: "Laura Allen",
            date: "June-3-2022",
            discription: "A graduate of Shaw University and The Whole You School of Massage Therapy, Allen began her studies of bodywork in 1993, and has been a licensed massage therapist since 1999. From 1998-2003, she was the administrator and an instructor at The Whole You. From 2003-2016, she owned THERA-SSAGE, a multi-disciplinary clinic offering chiropractic, massage therapy, acupuncture, esthetics, naturopathy, and nutritional counseling."
        },
    ]

    return (
        <>
            <div className='bg-transparent '>
                {
                    blogData && blogData?.map((item, index) => {
                        return (<div key={index} className="my-10 border-b border-bordergray">
                            <h2 className='text-white font-bold py-3'>{item.title}</h2>
                            <div className='flex  flex-wrap'>
                                <div className='text-white pr-1'>{item.name}</div>
                                <div className='text-gray'>| {item.date}</div>
                            </div>
                            <p className='text-gray py-8 '>{item.discription}</p>


                            <button className='text-white flex space-x-1 items-center border border-white rounded-2xl px-2 py-1 mt-2 mb-14'>
                                <span>read more</span>
                                <BsArrowRightShort className='text-white' size={25} />
                            </button>


                        </div>)
                    })
                }

            </div>
        </>
    )
}

export default BlogListing