import React from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import gallery from '../../public/assets/img/home/gallery.png';

const User = () => {
  return (
    <section className={`${styles.gallery_container} ${styles.section}`} id='section_gallery'>
      <div className={styles.gallery_data}>
        <h2 className={styles.headingh2}>Our Gallery</h2>
        <p className={styles.gallery_para}>
          Step into a world of cherished memories and captivating <br />
          moments captured from our remarkable events
        </p>
        <div className='imageContainer'>
          <Image className={styles.galleryimg} src={gallery} alt='About Ezy Event' />
        </div>
      </div>
    </section>
  );
};

export default User;
