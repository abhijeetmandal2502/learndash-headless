import React, { useEffect, useState } from 'react'
import arrow from "../../public/images/Cart_icon_home.svg";
import arrowHover from "../../public/images/Cart_Icon_home_color.svg";
import Image from 'next/image';
import styles from '../../src/styles/NewIndex.module.css'
import { productCartState } from 'recoil/atoms';
import { getCartItems } from 'utils/addToCart';
import { useRecoilState } from 'recoil'
import Link from 'next/link';
const TotalCartItems = () => {

  const [productsRecoil, setProductsRecoil] = useRecoilState(productCartState)
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    setProductsRecoil(getCartItems());
  }, [])

  return (
    <Link href="/courses">
      <div
        className=" container"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={`transition-all ease-in duration-1000 w-max ${styles.cartAnimation}`}>
          <Image
            src={isHovering ? arrowHover : arrow} width={120} height={120}
            className={` ${isHovering ? 'transition-all ease duration-2000' : "transition-all ease- duration-2000"}  cartImage`}
          />
        </div>
        <div className='absolute  right-4 w-5 h-5 text-white -translate-x-0 -translate-y-0 rounded-full bg-voilet top-2 z-50' onClick={() => alert('mouse enter')}>
          <p className='flex items-center justify-center text-[12px]'>{productsRecoil.length}</p>
        </div>
      </div>
    </Link>
  )
}

export default TotalCartItems


