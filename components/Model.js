import React, { useState } from 'react'

const Model = () => {

    const [open, setOpen] = useState(false);

    // const HandleClick = () => {
    //     setOpen(true);
    // }


    return (
        <>
            <button className='flex justify-center items center ' type='button' onClick={() => setOpen(true)}>

                <div className='h-10 w-10'>
                    welcome back

                </div>

            </button>


            {open ? <div className=' fixed top-0 right-0 h-10 w-10 z-30 '>
                welcome model

            </div> : ""}

        </>
    )

}

export default Model