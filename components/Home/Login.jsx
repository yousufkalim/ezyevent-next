import React from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import { ReactComonent as CardArrow } from '../../public/assets/img/common/menu-arrow.svg';
import userLogin from '../../public/assets/img/home/userLogin.png';
import vendorLogin from '../../public/assets/img/home/verdorLogin.png';

const User = () => {
  return (
    <section className={`${styles.login_section} ${styles.section}`}>
      <h2 className={styles.loginH2}>
        Designed to be user-centric, for <br /> both organisers & service providers
      </h2>
      <div className={styles.loginCards}>
        <div className={styles.card1}>
          <div className={styles.card1_content}>
            <h4 className={styles.ezyH4}>Ezy Event</h4>
            <h3 className={styles.ezyH3}>
              Login as a{' '}
              <span className={styles.spanColor}>
                User
                <CardArrow className={styles.cardArrow} alt='About Ezy Event' />
              </span>{' '}
            </h3>
            <p className={styles.paraCard1}>
              Gain personalized <br /> access to our app's <br /> features
            </p>
          </div>

          <div className={styles.card1_content_hovered}>
            <ul>
              <li> Lorem ipsum dolor sit amet.</li>
              <li> Lorem ipsum dolor sit amet.</li>
              <li> Lorem ipsum dolor sit amet.</li>
              <li> Lorem ipsum dolor sit amet.</li>
              <li> Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className={styles.card1_shadow}>
            <div className={styles.card1_shape}></div>
          </div>
          <Image className={styles.userLoginImg} src={userLogin} alt='About Ezy Event' />
        </div>
        <div className={styles.card2}>
          <h4 className={styles.ezyH4}>Ezy Event</h4>
          <h3 className={styles.ezyH3}>
            Login as a <br />
            <span className={styles.spanColorB}>Service Provider </span>
          </h3>
          <p className={styles.paraCard1}>
            Access exclusive features <br />
            and opportunities as a <br />
            service provider
          </p>
          <div className={styles.card2_content_hovered}>
            <ul>
              <li> Lorem ipsum dolor sit amet.</li>
              <li> Lorem ipsum dolor sit amet.</li>
              <li> Lorem ipsum dolor sit amet.</li>
              <li> Lorem ipsum dolor sit amet.</li>
              <li> Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className={styles.card2_shadow}>
            <div className={styles.card2_shape}></div>
          </div>
          <Image className={styles.vendorLoginimg} src={vendorLogin} alt='About Ezy Event' />
        </div>
      </div>
      <div className={styles.links}>
        <a href='http://#'>Download our App</a>
        <a href='http://#'>Get a Demo</a>
      </div>
    </section>
  );
};

export default User;
