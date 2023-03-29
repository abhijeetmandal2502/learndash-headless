import React, { useState } from "react";
import { useRouter } from "next/router";

const Nav = (openTab, setOpenTab) => {

    const router = useRouter();

    return (
        <>
            {/* <ul
                className={`flex mb-0 list-none flex-wrap pt-3 pb-4 flex-col md:col-span-4 col-span-12  ${openTab === 4 || openTab === 3 ? 'hidden' : 'block'} ${router.asPath === '/?active=home' ? 'block' : 'hidden'}  `}
                role="tablist"
            >
                <li className={`${styles.navli} text-white  lg:my-1 xl:my-2  2xl:my-4  py-2 text-3xl  text-right flex cursor-pointer justify-end items-center ${openTab === 1 ? styles.active : ""}`

                }
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                >

                    about

                    <div className={`pl-2 text-4xl ${openTab === 1 ? styles.activeShowLine : styles.hide} `}><AiOutlineMinus /></div>
                </li>
                <li className={`${styles.navli} text-white lg:my-1 xl:my-2  2xl:my-4 py-2 text-3xl text-right flex cursor-pointer  justify-end items-center ${openTab === 2 ? styles.active : ""}`}
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                >

                    our instructors

                    <div className={`pl-2 text-4xl  ${openTab === 2 ? styles.activeShowLine : styles.hide} `}><AiOutlineMinus /></div>
                </li>
                <li className={`${styles.navli} text-white lg:my-1 xl:my-2  2xl:my-4 py-2 text-3xl text-right flex cursor-pointer  justify-end items-center ${(openTab === 3) ? styles.active : ""}`}
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab(3);

                        router.push('/blog');
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                >

                    blog central

                    <div className={`pl-2 text-4xl  ${openTab === 3 ? styles.activeShowLine : styles.hide}`}><AiOutlineMinus /></div>
                </li>
                <li className={`${styles.navli} text-white lg:my-1  2xl:my-4 py-2 text-3xl cursor-pointer text-right flex justify-end items-center ${openTab === 4 ? styles.active : ""}`}
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab(4);
                        router.push('/start');
                    }}
                    data-toggle="tab"
                    href="#link4"
                    role="tablist"
                >

                    i wanna teach!

                    <div className={`pl-2 text-4xl ${openTab === 4 ? styles.activeShowLine : styles.hide}`}><AiOutlineMinus /></div>
                </li>
            </ul> */}
        </>
    );
};

export default Nav