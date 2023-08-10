import React from 'react';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { ReactComponent as HomeLogo } from '../../public/assets/img/common/Home.svg'; // Corrected import statement
import { ReactComponent as AboutLogo } from '../../public/assets/img/common/about.svg'; // Corrected import statement
import { ReactComponent as EasyUseLogo } from '../../public/assets/img/common/easy.svg'; // Corrected import statement
import { ReactComponent as UsersLogo } from '../../public/assets/img/common/users.svg'; // Corrected import statement
import { ReactComponent as GalleryLogo } from '../../public/assets/img/common/gallery.svg'; // Corrected import statement
import { ReactComponent as DownloadLogo } from '../../public/assets/img/common/download.svg'; // Corrected import statement

const Nevbar = () => {
  return (
    <section className={styles.nevContainer}>
      <nav className={styles.nevBar}>
        <div className={styles.main_div}>
          <Link href='#' className={styles.hometag}>
            {' '}
            <HomeLogo alt='Home Hero' />
            <p>Our Home</p>
          </Link>
          <Link href='#' className={styles.hometag}>
            {' '}
            <AboutLogo alt='About' />
            <p>About us</p>
          </Link>
          <Link href='#' className={styles.hometag}>
            {' '}
            <EasyUseLogo alt='Easy Use' />
            <p>Easy Use</p>
          </Link>
          <Link href='#' className={styles.hometag}>
            {' '}
            <UsersLogo alt='Users' />
            <p>Two Users</p>
          </Link>
          <Link href='#' className={styles.hometag}>
            {' '}
            <GalleryLogo alt='Gallery' />
            <p>Gallery</p>
          </Link>
          <Link href='#' className={styles.hometag}>
            {' '}
            <DownloadLogo alt='Download' />
            <p>Download</p>
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Nevbar;
