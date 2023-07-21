import React from 'react';
import Image from 'next/image';
import Style from '../../styles/Common.module.css';
import logoWhite from '../../public/assets/img/common/Logo-wh.svg';
import menuArrow from '../../public/assets/img/common/menu-arrow.svg';

const Header = ({ setOpenMenu }) => {
  return (
    <header className={Style.header}>
      <div className={Style.logo}>
        <a href='#'>
          <Image src={logoWhite} alt='Logo' />
        </a>
      </div>
      <div className={Style.menuBtn} onClick={() => setOpenMenu((prevState) => !prevState)}>
        {' '}
        Main Menu
        <Image src={menuArrow} className={Style.arrow} alt='Menu Arrow' />
      </div>
    </header>
  );
};

export default Header;
