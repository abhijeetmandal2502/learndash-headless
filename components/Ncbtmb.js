import React, { useState } from 'react'
import Image from 'next/image'
import Lobby from './card/Lobby'
import { BiArrowBack, BiCheck } from 'react-icons/bi'
import styles from '../src/styles/Ncbtmb.module.css'
import Select from 'react-select';
import { AiOutlineCheck } from 'react-icons/ai'


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
      <div className=' bg-transparent h-screen overflow-scroll '>

        <button className={`flex items-center space-x-1 bg-black text-white px-4 font-bold py-2 rounded-3xl ${styles.lobby}`} onClick={() => ncbtmbMethodHide()}>
          <BiArrowBack size={20} className="text-white" /><span className='text-sm '>lobby</span></button>

        <div className={`flex  2xl:space-x-20 max-lg:space-x-20 items-center  ${styles.ncbtapproved}`}>
          <div>
            <h2 className=' tracking-wide font-normal text-2xl   max-[768px]:text-lg  md:leading-tight leading-normal '>all courses<br></br>ncbtmb<br></br>approved.</h2>
          </div>

          <Image src="/images/ncbtmb.svg" height="323" width="323" alt="ncbtmb" />
        </div>
        <form >
          <div className={`${styles.selectBox}`}>

            <div className='py-2'>
              accepted in your state?
            </div>
            <Select
              className={`2xl:w-96 w-72  z-[100] ${styles.selectBox} `}
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
        <div className={`pt-3 ${styles.ncbtapproved} ${selectedOption ? styles.showCourseDetail : styles.hideCourseDetail}`}>

          <div className='flex  items-center space-x-2'>
            <div className='p-2 rounded-full bg-[#2AC368]'>
              <BiCheck size={25} className='text-white' />
            </div>
            <h3 className='text-[20px]'>Texas? yep! you’re fine.</h3>
            <button className=' border-b border-voilet text-voilet leading-6 text-3xl'> click here.</button>
          </div>

          <div className='py-3'>
            {courseData && courseData.map((item, index) => {
              return (
                <div key={index} className='flex items-center space-x-4 py-0.3'>
                  <AiOutlineCheck size={20} className='text-[#9747FF]' />
                  <p className=' text-[12px] max-lg:text-[15px]'>{item}</p>
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