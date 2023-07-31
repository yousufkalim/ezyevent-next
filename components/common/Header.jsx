import React from 'react';
import Style from '../../styles/Common.module.css';
import { ReactComonent as LogoWhiteImage } from '../../public/assets/img/common/Logo-wh.svg';
import { ReactComonent as MenuArrow } from '../../public/assets/img/common/menu-arrow.svg';
// import { ReactComponent as MenuArrow } from '../../public/assets/img/common/menu-arrow.svg';

const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <header className={Style.header}>
      <div className={Style.logo}>
        <a href='/'>
          <LogoWhiteImage alt='Logo' />
        </a>
      </div>
      <div
        className={openMenu ? Style.menuWhite : Style.menuBtn}
        onClick={() => setOpenMenu((prevState) => !prevState)}
      >
        {' '}
        <p>{openMenu ? 'back to home' : 'Main Menu'}</p>
        <MenuArrow className={Style.arrow} alt='Menu Arrow' />
        {/* <MenuArrow /> */}
      </div>
    </header>
  );
};

export default Header;
