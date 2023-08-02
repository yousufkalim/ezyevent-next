import React from 'react';
import styles from '../../styles/Contact.module.css';
import Image from 'next/image';
import mapBg from '../../public/assets/img/contact/Map.png';
import ContactPhone from '../../public/assets/img/contact/Phone.png';

const Contact = () => {
  return (
    <section className={styles.contact_container}>
      <div className={styles.map_img}>
        <Image className={styles.Map} src={mapBg} alt='About Ezy Event' />
      </div>
      <div className={styles.download_data_container}>
        <Image className={styles.Phone} src={ContactPhone} alt='About Ezy Event' />
        <div className={styles.form_data}>
          <h2 className={styles.phone_heading}> Contact us</h2>
          <p className={styles.Contact_para}>We're here to support you every step of the way</p>
          <form className={styles.contact_form} method='post'>
            <div className={styles.feild}>
              <label htmlFor='name'> My name is</label> <br />
              <input type='text' className={styles.input_box} placeholder='Name Here' />
              <hr />
            </div>
            <div className={styles.feild}>
              <label htmlFor='name'> My phone number is</label> <br />
              <input type='number' className={styles.input_box} placeholder='Your phone number' />
              <hr />
            </div>
            <div className={styles.feild}>
              <label htmlFor='name'> Reach me at</label> <br />
              <input type='email' className={styles.input_box} placeholder=' Your@email.com' />
              <hr />
            </div>
            <div className={styles.feild}>
              <label htmlFor='name'>Message</label> <br />
              <input type='text' className={styles.input_box} placeholder='Start typing here...' />
              <hr />
            </div>
            <div className={styles.btn_container}>
              <input type='button' value='Send' className={styles.btn_submit} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
