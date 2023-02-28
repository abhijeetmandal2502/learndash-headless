import React from 'react'

const StartComponent = () => {

    const list = [
        'start',
        'why teach',
        'why us',
        'why now',
        'needed',
        'ncbtmb',
        'why you',
        'now what',
        'create',
        'never alone',
        'commission',
        'get started'


    ]
    return (
        <>
            <div className=' bg-transparent'>
                <div className='grid grid-cols-12 '>
                    <div className='md:col-span-2 col-span-12 flex space-x-3'>
                        <div className='w-0.5 h-[400px] mt-3 bg-white'></div>
                        <ul className='flex flex-col space-y-3'>
                            {
                                list && list?.map((item, key) => {
                                    return (
                                        <>

                                            <li key={key} className='text-white'>
                                                {item}
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>

                    </div>
                    <div className='md:col-span-6 col-span-12'>

                    </div>
                    <div className='md:col-span-5 col-span-12'>

                    </div>

                </div>

            </div>
        </>
    )
}

export default StartComponent
