import Image from 'next/image'
import React from 'react'
import styles from '../../components/IwannaTech/IwanntTech.module.css'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'


const LogoutBtn = () => {

    const router = useRouter();
    const token = Cookies.get('token');

    const handleLogout = () => {

        Cookies.remove('token', { path: '/' }) // removed!
        setTimeout(() => {
            router.reload("/")
        }, 100)
    }


    return (
        <>
            {token && <div className={`relative ${styles.logoutBtnShadow}`} onClick={() => handleLogout()} >
                <div>
                    <Image src="/images/Logout.svg" width={70} height={70} className='' alt="logout" />
                </div>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                    <p className={`text-white drop font-[500] ${styles.shadow}`}>Logout</p>
                </div>
            </div>}
        </>
    )
}

export default LogoutBtn