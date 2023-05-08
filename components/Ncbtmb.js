import React, { useState } from 'react'
import Image from 'next/image'
import Lobby from './card/Lobby'
import { BiArrowBack, BiCheck } from 'react-icons/bi'
import styles from '../src/styles/Ncbtmb.module.css'
import Select from 'react-select';
import { AiOutlineCheck } from 'react-icons/ai'
import Link from 'next/link'


const Ncbtmb = ({ ncbtmbMethodHide }) => {

  const options = [


    { value: 'Select...', label: 'Select...' },
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'Arizona', label: 'Arizona' },
    { value: 'California', label: 'California' },
    { value: 'Colorado', label: 'Colorado' },
    { value: 'Conneticut', label: 'Conneticut' },
    { value: 'Delware', label: 'Delware' },
    { value: 'District of Columbia', label: 'District of Columbia' },
    { value: 'Florida', label: 'Florida' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Hawaii', label: 'Hawaii' },
    { value: 'Idaho', label: 'Idaho' },
    { value: 'IIIinois', label: 'IIIinois' },
    { value: 'Indiana', label: 'Indiana' },
    { value: 'Iowa', label: 'Iowa' },
    { value: 'Kansas', label: 'Kansas' },
    { value: 'Kentucky', label: 'Kentucky' },
    { value: 'Louisiana', label: 'Louisiana' },
    { value: 'Maine', label: 'Maine' },
    { value: 'Maryland', label: 'Maryland' },
    { value: 'Massachusetts', label: 'Massachusetts' },
    { value: 'Mississippi', label: 'Mississippi' },
    { value: 'Missouri', label: 'Missouri' },
    { value: 'Montana', label: 'Montana' },
    { value: 'Nebraska', label: 'Nebraska' },
    { value: 'Nevada', label: 'Nevada' },
    { value: 'New Hampshire', label: 'New Hampshire' },
    { value: 'New jersey', label: 'New jersey' },
    { value: 'New Mexico', label: 'New Mexico' },
    { value: 'New York', label: 'New York' },
    { value: 'North Carolina', label: 'North Carolina' },
    { value: 'North Dakota', label: 'North Dakota' },
    { value: 'Ohio', label: 'Ohio' },
    { value: 'Oklahoma', label: 'Oklahoma' },
    { value: 'Oregon', label: 'Oregon' },
    { value: 'Pennsylvania', label: 'Pennsylvania' },
    { value: 'Rhode Island', label: 'Rhode Island' },
    { value: 'South Carolina', label: 'South Carolina' },
    { value: 'South Dakota', label: 'South Dakota' },
    { value: 'Tennessee', label: 'Tennessee' },
    { value: 'Texas', label: 'Texas' },
    { value: 'Utah', label: 'Utah' },
    { value: 'Vermont', label: 'Vermont' },
    { value: 'Virginia', label: 'Virginia' },
    { value: 'Washington', label: 'Washington' },
    { value: 'West Virginia', label: 'West Virginia' },
    { value: 'Wisconsin', label: 'Wisconsin' },
    { value: 'Wyoming', label: 'Wyoming' },


  ]

  const courseData = [
    'NCBTMB is approved in Texas and requires no further approval',
    'online courses may not teach technique or soft tissue manipulation. we don’t.',
    'Texas MT’s require 12 hours of CE every 2 years',
    'we don’t play around with compliance',
    'and state flower is the Bluebonnet',
  ]

  const [selectedOption, setSelectedOption] = useState(null);


  return (
    <>
      <div className='relative h-screen mx-4 overflow-hidden bg-transparent '>
        {/* this loby button for desktop */}
        <button className={`md:flex hidden items-center space-x-1 md:mt-5 bg-black text-white font-bold  ${styles.lobby} px-4 3xl:px-6 py-2 3xl:py-2.5 rounded-3xl `} type='button' onClick={() => ncbtmbMethodHide()}  >
          <BiArrowBack size={20} className="text-white 3xl:w-8 3xl:h-8" /><span className='smallf '>lobby</span>
        </button>
        {/* loby button code end */}
        <div className={`flex mt-10 mb-6  md:my-0  2xl:space-x-20 max-lg:space-x-20 md:space-x-20  justify-between items-center  ${styles.ncbtapproved}`}>
          <div>
            <h2 className='font-normal leading-tight tracking-wide fourxllargef'>all courses<br></br>ncbtmb<br></br>approved.</h2>
          </div>

          <Image src="/images/ncbtmblatest.svg" height={323} width={323} alt="ncbtmblatest" className={`hidden md:block ncbt-desk-img`} />
          <Image src="/images/ncbtmb.svg" height={200} width={200} alt="ncbtmb" className={`md:hidden absolute top-6 -right-4`} />
        </div>
        <form >
          <div className={`${styles.selectBox}`}>

            <div className='py-2 font-semibold '>
              <p className='hidden md:block mediumf'>accepted in your state?</p>
              <p className=' md:hidden mediumf'>Select a State</p>
            </div>
            <Select
              className={`w-96  smallf z-[100] ${styles.selectBox} `}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              components={{
                IndicatorSeparator: () => null,

              }}
              styles={{
                dropdownIndicator: (provided, state) => ({
                  ...provided,
                  transform: state.selectProps.menuIsOpen && "rotate(180deg)",
                  transition: state.selectProps.menuIsOpen && "all ease-in-out 1s",
                  transition: state.selectProps.onMenuClose && "all ease-in-out 1s"
                })
              }}

            />
          </div>

        </form>
        <div className={`pt-6 md:pt-3 ${styles.ncbtapproved} ${selectedOption ? styles.showCourseDetail : styles.hideCourseDetail}`}>

          <div className='flex items-start my-4 space-x-2 md:my-0 md:items-center'>
            <div className='md:p-2 p-0.5 rounded-full bg-[#2AC368]'>
              <BiCheck size={25} className='text-white md:text-[25px] smallf' />
            </div>
            <h3 className='leading-none triplelargef'>Texas? yep! you’re fine.<br /><Link href="/"></Link><div className='border-b w-max md:hidden border-voilet text-voilet' >click here.</div></h3>
            <button className='hidden leading-6 border-b md:block border-voilet text-voilet md:text-3xl extlargef'> click here.</button>
          </div>

          <div className='py-3'>
            {courseData && courseData.map((item, index) => {
              return (
                <div key={index}>
                  <div className='md:flex hidden  items-center space-x-4 py-0.3'>
                    <AiOutlineCheck size={20} className='text-[#9747FF]' />
                    <p className=' smallf max-lg:text-[15px]'>{item}</p>
                  </div>
                  <div className='grid grid-cols-12 md:hidden '>
                    <div className='col-span-1'>
                      <AiOutlineCheck size={20} className='mt-1 text-[#9747FF]' />
                    </div>
                    <div className='col-span-11'>
                      <p className='mediumf'>{item}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </>
  )
}

export default Ncbtmb