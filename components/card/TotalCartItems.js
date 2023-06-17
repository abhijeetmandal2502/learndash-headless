import React,{useState} from 'react'
import arrow from "../../public/images/Cart_icon_home.svg";
import arrowHover from "../../public/images/Cart_Icon_home_color.svg";
import Link from 'next/link';
import Image from 'next/image';


// const MyLink = React.forwardRef(
//     (
//       { as, children, href, replace, scroll, shallow, passHref, ...rest }, // extract all next/link props and pass the rest to the anchor tag
//       ref,
//     ) => (
//       <Link as={as} href={href} passHref={passHref} replace={replace}>
//         <div {...rest} ref={ref}>
//           {children}
//         </div>
//       </Link>
//     ),
//   );


const TotalCartItems = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
  return (
    <div
    className=" hover:transition-all ease-in-out duration-1000"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    
    <div className='transition-all ease-in-out duration-1000'>
    {isHovering ? (
        <Image src={ arrowHover} width={300} height={300} />
      ) : (
        <Image src={arrow} width={300} height={300} />
      )}
    </div>
  </div>
  )
}

export default TotalCartItems


