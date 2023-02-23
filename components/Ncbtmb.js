import React from 'react'
import Image from 'next/image'
import Lobby from './card/Lobby'
import { BiArrowBack } from 'react-icons/bi'
import styles from '../src/styles/Ncbtmb.module.css'

const Ncbtmb = ({ ncbtmbMethodHide }) => {

  const Option = [
    'Select...',
    'Alabama',
    'Alaska',
    'Arizona',
    'California',
    'Colorado',
    'Conneticut',
    'Delware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'IIIinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',

  ]

  return (
    <>
      <div className=' bg-transparent '>

        <button className={`flex items-center space-x-1 bg-black text-white px-4 font-bold py-2 rounded-3xl ${styles.lobby}`} onClick={() => ncbtmbMethodHide()}>
          <BiArrowBack size={20} className="text-white" /><span className='text-sm '>lobby</span></button>

        <div className='flex space-x-16 items-center '>
          <div>

            <h2 className='text-6xl tracking-wide font-normal text-[61px]  leading-tight'>all courses<br></br>ncbtmb<br></br>approved.</h2>


          </div>

          <Image src="/images/ncbtmb.svg" height={323} width={323} alt="ncbtmb" />


        </div>



        <form >
          <div >

            <div className='py-2'>
              accepted in your state?
            </div>
            <select className={`bg-white border border-bordergray w-96  py-2 outline-none my-1 text-left text-gray ${styles.selectBox}`}>

              {
                Option && Option?.map((item, index) => {

                  return (<option key={index} className='bg-white border-bordergray px-10 text-gray text-md h-[200px]  hover:bg-slate-500 text-left' value={item}>{item}</option>)
                })
              }
            </select>
          </div>

        </form>

      </div>

    </>
  )
}

export default Ncbtmb