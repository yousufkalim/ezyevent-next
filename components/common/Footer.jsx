import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import logoWhite from '../../public/assets/img/common/Logo-wh.svg';
import logoPer from '../../public/assets/img/common/Logo-per.svg';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='sitePages'>
        <h3 className='footerTitle'>WEBSITE PAGES</h3>
        <h2>Homepage</h2>
        <h2>Event Organiser</h2>
        <h2>Service Provider</h2>
        <h2>About us</h2>
        <h2>Contact us</h2>
      </div>
      <div className='HEADQAUTER'>
        <h2>
          Street 8A, near Shaukat Khanum Hospital Road, Iqbal Avenue Housing Society Lahore, Punjab
          54000
        </h2>
      </div>
      <div className='socialLinks'>
        <a href='#' class='fa fa-facebook'></a>
        <a href='#' class='fa fa-instagram'></a>
        <a href='#' class='fa fa-linkedin'></a>
        <a href='#' class='fa fa-youtube'></a>
      </div>
    </section>
  );
};

export default Footer;
