import React from 'react'
import Link from 'next/link'
import styles from '../../src/styles/MenuComponent.module.css'

const Nav = () => {

    const Nav = [
        {
            name: "about",
            link: "#"
        },
        {
            name: "our instructors",
            link: "#"
        },
        {
            name: "blog central",
            link: "#"
        },
        {
            name: "i wanna teach!",
            link: "#"
        },
    ]
    return (
        <>
            <div className=''>
                <ul className=' list-none '>
                    {
                        Nav.map((item, index) => {
                            return (
                                <>
                                    <Link key={index} href={item.link}>
                                        <li className={`${styles.navli} text-white my-4 py-2 text-3xl text-right`}>{item.name} <span className={`${styles.hide} `}>-</span></li>

                                    </Link>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Nav