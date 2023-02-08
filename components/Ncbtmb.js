import React from 'react'
import Image from 'next/image'
import Lobby from './card/Lobby'
import { BiArrowBack } from 'react-icons/bi'

const Ncbtmb = ({ ncbtmbMethodHide }) => {
  return (
    <>
      <div className=' bg-transparent '>

        <button className='flex items-center space-x-1 bg-black text-white px-3 py-1.5 rounded-3xl my-5' onClick={() => ncbtmbMethodHide()}>
          <BiArrowBack size={20} className="text-white bg-black" /><span className='text-sm'>lobby</span></button>

        <div className='flex space-x-16 items-center'>
          <div>

            <h2 className='text-6xl  leading-tight'>all courses<br></br>ncbtmb<br></br>approved.</h2>

            <div>
              <form >
                <div className='py-4'>

                  <div className='py-2'>
                    accepted in your state?
                  </div>
                  <select name="cars" id="cars" className='bg-white border border-bordergray px-24 py-1 outline-none my-1 '>
                    <option className='bg-white border-bordergray px-10 py-1 my-2' value="volvo">Select...</option>
                    <option value="volvo">Alabama</option>
                    <option value="saab">Alaska</option>
                    <option value="mercedes">Arizona</option>
                    <option value="audi">Arkansas</option>
                  </select>
                </div>

              </form>
            </div>
          </div>

          <Image src="/images/NCBTMB-Approved.png" height={323} width={323} />


        </div>
      </div>

    </>
  )
}

export default Ncbtmb