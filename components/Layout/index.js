import React from 'react';
import Head from 'next/head';

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ezy Event</title>
      </Head>
      <div className='layout'>{children}</div>
    </>
  );
};
