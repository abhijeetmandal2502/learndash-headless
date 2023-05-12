import React from 'react'
import styles from '../TeacherLounge/TeacherLounge.module.css'

const IwannaTech = () => {
    return (
        <div className={`${styles.iwannatech} flex justify-center items-center rounded-full shadow-lg overflow-hidden h-[120px] w-[120px]
        
         `}>

            <p className='text-white xl:mx-10 text-center lg:text-[20px] '>I wanna teach!</p>
        </div>
    )
}

export default IwannaTech