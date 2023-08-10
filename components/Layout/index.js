import React, { useState } from 'react';
import Head from 'next/head';
import Menu from 'components/common/Menu';
import Header from 'components/common/Header';

export const Layout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Ezy Event</title>
      </Head>
      {/* togggle menu function  */}
      <div className='menu'>
        <Header setOpenMenu={setOpenMenu} openMenu={openMenu} />
        {openMenu && <Menu />}
        {!openMenu && children}
      </div>
    </>
  );
};
