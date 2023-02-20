import React from 'react'
import Image from 'next/image'
import Lobby from './card/Lobby'
import { BiArrowBack } from 'react-icons/bi'

const Ncbtmb = ({ ncbtmbMethodHide }) => {
  return (
    <>
      <div className=' bg-transparent '>

        <button className='flex items-center space-x-1 bg-black text-white px-3 py-1.5 rounded-3xl my-5' onClick={() => ncbtmbMethodHide()}>
          <BiArrowBack size={20} className="text-white bg-black" /><span className='text-sm font-semibold'>lobby</span></button>

        <div className='flex space-x-16 items-center mt-20'>
          <div>

            <h2 className='text-6xl  leading-tight'>all courses<br></br>ncbtmb<br></br>approved.</h2>

            <div>
              <form >
                <div className='py-4'>

                  <div className='py-2'>
                    accepted in your state?
                  </div>
                  <select name="cars" id="cars" className='bg-white border border-bordergray w-72 py-2 outline-none my-1 text-left text-gray '>
                    <option className='bg-white border-bordergray px-10 text-gray py-2 text-left' value="volvo">Select...</option>
                    <option className='bg-white border-bordergray px-10 text-gray py-2 text-left' value="">Alabama</option>
                    <option className='bg-white border-bordergray px-10 text-gray py-2 text-left' value="">Alaska</option>
                    <option className='bg-white border-bordergray px-10 text-gray py-2 text-left' value="">Arizona</option>
                    <option className='bg-white border-bordergray px-10 text-gray py-2 text-left' value="">Arkansas</option>
                  </select>
                </div>

              </form>
            </div>
          </div>

          <Image src="/images/ncbtmb.svg" height={323} width={323} alt="ncbtmb" />


        </div>
      </div>

    </>
  )
}

export default Ncbtmb