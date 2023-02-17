import React from 'react'
import styles from '../TeacherLounge/TeacherLounge.module.css'

const IwannaTech = () => {
    return (
        <div className={`${styles.iwannatech} flex justify-center items-center rounded-full shadow-lg overflow-hidden h-[200px] w-[200px] `}>

            <p className='text-white mx-10 text-center text-[33px]'>I wanna teach!</p>
        </div>
    )
}

export default IwannaTech