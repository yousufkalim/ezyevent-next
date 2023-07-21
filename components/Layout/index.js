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

      <div className='layout'>
        <Header setOpenMenu={setOpenMenu} />
        {openMenu && <Menu />}
        {children}
      </div>
    </>
  );
};
