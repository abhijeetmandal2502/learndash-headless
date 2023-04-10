import React from 'react'
import { MdClose } from 'react-icons/md';

const Test = ({ children, isOpen, setIsOpen }) => {
    return (
        <main
            className={
                " fixed overflow-hidden z-40 bg-gray  bg-opacity-25 inset-0 top-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 -translate-x-0"
                    : " -transition-all delay-500 opacity-0 -translate-x-full")
            }
        >
            <section
                className={
                    " w-72 left-0 absolute rounded-tr-lg bg-gray h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isOpen ? " -translate-x-0 " : " -translate-x-full ")
                }
            >
                <article className="relative flex flex-col h-full mobilemenu bg-navyblue w-72">
                    <div className="relative flex justify-center ">

                        <div className="absolute text-xl text-white right-2 top-2" onClick={() => {
                            setIsOpen(false);
                        }}>
                            <MdClose />
                        </div>

                    </div>
                    jkldfgjkdfgjklsdfgjlkdgkldfg
                    {/* {children} */}
                </article>
            </section>

        </main>
    );
}

export default Test


// import { MdClose } from 'react-icons/md'

// export default function Test({ children, isOpen, setIsOpen }) {
//     return (
//         <main
//             className={
//                 " fixed overflow-hidden z-40 bg-gray  bg-opacity-25 inset-0 top-0 transform ease-in-out " +
//                 (isOpen
//                     ? " transition-opacity opacity-100 duration-500 -translate-x-0"
//                     : " -transition-all delay-500 opacity-0 -translate-x-full")
//             }
//         >
//             <section
//                 className={
//                     " w-72 left-0 absolute rounded-tr-lg bg-gray h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
//                     (isOpen ? " -translate-x-0 " : " -translate-x-full ")
//                 }
//             >
//                 <article className="relative flex flex-col h-full mobilemenu bg-navyblue w-72">
//                     <div className="relative flex justify-center ">
//                         {/* <Image
//                             width={120} height={30}
//                             src={`${process.env.ImageUrl}/logo.png`}
//                             alt="menuimg"
//                         /> */}
//                         <div className="absolute text-xl text-white right-2 top-2" onClick={() => {
//                             setIsOpen(false);
//                         }}>
//                             <MdClose />
//                         </div>

//                     </div>
//                     {children}
//                 </article>
//             </section>

//         </main>
//     );
// }