import React from 'react';
import styles from '../../styles/Home.module.css';
import { ReactComonent as Facebook } from '../../public/assets/img/common/facebook.svg';
import { ReactComonent as Youtube } from '../../public/assets/img/common/youtube.svg';
import { ReactComonent as Instagram } from '../../public/assets/img/common/instagram.svg';
import { ReactComonent as Linkedin } from '../../public/assets/img/common/linkedin.svg';

const Menu = () => {
  return (
    <section className={styles.menuContainer}>
      <div className={styles.mainMenu}>
        <ul className={styles.listMenu}>
          <li>
            <a href='/'>Homepage</a>
            <hr className={styles.hrLine} />
          </li>
          <li>
            <a href='/eventorganizer'>Event Organiser</a>
            <hr className={styles.hrLine} />
          </li>
          <li>
            <a href='/serviceprovider'>Service Provider</a>
            <hr className={styles.hrLine} />
          </li>
          <li>
            <a href='/aboutus'>About us</a>
            <hr className={styles.hrLine} />
          </li>
          <li>
            <a href='/contactus'>Contact us</a>
            <hr className={styles.hrLine} />
          </li>
        </ul>

        <div className={styles.socialLinks}>
          <a href='#'>
            <Facebook alt='Logo' />
          </a>
          <a href='#'>
            <Youtube alt='Logo' />
          </a>
          <a href='#'>
            <Instagram alt='Logo' />
          </a>
          <a href='#'>
            <Linkedin alt='Logo' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
