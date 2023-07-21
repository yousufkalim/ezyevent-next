import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import facebook from '../../public/assets/img/common/facebook.svg';
import youtube from '../../public/assets/img/common/youtube.svg';
import instagram from '../../public/assets/img/common/instagram.svg';
import linkedin from '../../public/assets/img/common/linkedin.svg';

const Menu = () => {
  return (
    <section className={styles.menuContainer}>
      <div className={styles.mainMenu}>
        <ul className={styles.listMenu}>
          <li>
            <a href='#'>Homepage</a>
            <hr className={styles.hrLine} />
          </li>
          <li>
            <a href='#'>Event Organiser</a>
            <hr className={styles.hrLine} />
          </li>
          <li>
            <a href='#'>Service Provider</a>
            <hr className={styles.hrLine} />
          </li>
          <li>
            <a href='#'>About us</a>
            <hr className={styles.hrLine} />
          </li>
          <li>
            <a href='#'>Contact us</a>
            <hr className={styles.hrLine} />
          </li>
        </ul>

        <div className={styles.socialLinks}>
          <a href='#' class='facebook'>
            <Image src={facebook} alt='Logo' />
          </a>
          <a href='#' class='fa fa-youtube'>
            <Image src={youtube} alt='Logo' />
          </a>
          <a href='#' class='fa fa-instagram'>
            <Image src={instagram} alt='Logo' />
          </a>
          <a href='#' class='fa fa-linkedin'>
            <Image src={linkedin} alt='Logo' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
