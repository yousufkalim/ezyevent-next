import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import imgOne from '../../public/assets/img/home/imgOne.png';
import imgTwo from '../../public/assets/img/home/imgTwo.png';
import imgThree from '../../public/assets/img/home/imgThree.png';
import imgFour from '../../public/assets/img/home/imgFour.png';
import imgFive from '../../public/assets/img/home/imgFive.png';
import imgSix from '../../public/assets/img/home/imgSix.png';
import imgSeven from '../../public/assets/img/home/imgSeven.png';
import imgEight from '../../public/assets/img/home/imgEight.png';
import imgNine from '../../public/assets/img/home/imgNine.png';
import imgTen from '../../public/assets/img/home/imgTen.png';

const AllScreen = () => {
  return (
    <section className={styles.mainAll}>
      <h2 className={styles.allHeading}>All Screen</h2>
      <div className={styles.imagesComtainer}>
        <div className={styles.imgOne}>
          <Image className={styles.imgOne} src={imgOne} alt='About Ezy Event' />
          <h3 className={styles.bottomHeading}>Dashboard</h3>
        </div>
        <div className={styles.imgTwo}>
          <Image className={styles.imgTwo} src={imgTwo} alt='About Ezy Event' />
          <h3 className={styles.bottomHeading}>Name of screen</h3>
        </div>
        <div className={styles.imgThree}>
          <Image className={styles.imgThree} src={imgThree} alt='About Ezy Event' />
          <h3 className={styles.bottomHeading}>Name of screen</h3>
        </div>
        <div className={styles.imgFour}>
          <Image className={styles.imgFour} src={imgFour} alt='About Ezy Event' />
          <h3 className={styles.bottomHeading}>Name of screen</h3>
        </div>
        <div className={styles.imgFive}>
          <Image className={styles.imgFive} src={imgFive} alt='About Ezy Event' />
          <h3 className={styles.bottomHeading}>Name of screen</h3>
        </div>
        <div className={styles.imgSix}>
          <Image className={styles.imgSix} src={imgSix} alt='About Ezy Event' />
          <h3 className={styles.bottomHeading}>Name of screen</h3>
        </div>
        <div className={styles.imgSeven}>
          <Image className={styles.imgSeven} src={imgSeven} alt='About Ezy Event' />
          <h3 className={styles.bottomHeading}>Name of screen</h3>
        </div>
        <div className={styles.imgEight}>
          <Image className={styles.imgEight} src={imgEight} alt='About Ezy Event' />
          <h3 className={styles.bottomHeading}>Name of screen</h3>
        </div>
        <div className={styles.imgNine}>
          <Image className={styles.imgNine} src={imgNine} alt='About Ezy Event' />
          <h3>Name of screen</h3>
        </div>
        <div className={styles.imgTen}>
          <Image className={styles.imgTen} src={imgTen} alt='About Ezy Event' />
          <h3 className={styles.bottomHeading}>Name of screen</h3>
        </div>
      </div>
    </section>
  );
};

export default AllScreen;
