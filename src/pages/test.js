import React from 'react'

const Test = () => {
    return (
        <>

            <div className='grid grid-cols-12 '>

                <div className='col-span-12 md:col-span-6  h-full w-full' style={{ "height": "100vh" }}>

                    <div className='w-full h-1/2 border border-black'>
                        div1
                    </div>
                    <div className='w-full h-1/4 border border-black'>
                        div2
                    </div>
                    <div className='w-full h-1/4 border border-black'>
                        div3
                    </div>

                </div>

            </div>

        </>
    )
}

export default Test