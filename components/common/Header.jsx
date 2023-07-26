import React from 'react';
import Image from 'next/image';
import Style from '../../styles/Common.module.css';
import LogoWhiteImage from '../../public/assets/img/common/Logo-wh.svg';
import menuArrow from '../../public/assets/img/common/menu-arrow.svg';
// import { ReactComponent as MenuArrow } from '../../public/assets/img/common/menu-arrow.svg';

const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <header className={Style.header}>
      <div className={Style.logo}>
        <img src={LogoWhiteImage} alt='Logo' />
      </div>
      <div
        className={openMenu ? Style.menuWhite : Style.menuBtn}
        onClick={() => setOpenMenu((prevState) => !prevState)}
      >
        {' '}
        <p>{openMenu ? 'back to home' : 'Main Menu'}</p>
        <Image src={menuArrow} className={Style.arrow} alt='Menu Arrow' />
        {/* <MenuArrow /> */}
      </div>
    </header>
  );
};

export default Header;
