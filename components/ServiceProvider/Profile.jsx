import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Service.module.css';
import cpgirl from '../../public/assets/img/servicesP/cpimg.png';
import star from '../../public/assets/img/EventOrg/Group.png';

const Profile = () => {
  return (
    <section className={styles.create_profile_section}>
      <div className={styles.create_profile_heading}>
        <h2>
          {' '}
          <span className={styles.cp_blue}>Create</span> Your Business{' '}
          <span className={styles.cp_perp}>Profile</span>
        </h2>
        <p>
          Showcase your talents, expertise, and unique offerings to a world of potential <br />{' '}
          clients Let's bring your vision to life and connects
        </p>
      </div>
      <div className={styles.inner_container}>
        <div className={styles.inner_data}>
          <h3>
            {' '}
            Add Your <br /> Multiple Services
          </h3>
          <p>
            {' '}
            <span className={styles.cp_perp}>
              Like <br />{' '}
            </span>
            Food, Catering, Lightening, <br />
            Musical, Etc
          </p>
          <div className={styles.btn_container}>
            <input type='text' placeholder='Write Your Service' className={styles.input_createcp} />
            <button type='button' className={styles.btn_create}>
              {' '}
              Create
            </button>
          </div>
        </div>
        <div className={styles.cpimg_conatiner}>
          <Image className={styles.cpgirl_img} src={cpgirl} alt='About Ezy Event' />
          <div className={styles.cp_text_box}>
            <p>
              Let’s <span className={styles.cp_perp}>Create Service</span> and <br />
              <span className={styles.cp_blue}> Earn</span> Like me{' '}
            </p>
          </div>
        </div>
        <div className={styles.cp_login_box}>
          <div className={styles.spsuccess_text_box}>
            <p>
              <span className={styles.cp_perp}>Heyy !</span> Login Now
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cpshadow}>
        <div className={styles.cpshape}></div>
      </div>
      <div className={styles.star2_container}>
        <Image className={styles.star1} src={star} alt='About Ezy Event' />
        <Image className={styles.star2} src={star} alt='About Ezy Event' />
      </div>
    </section>
  );
};

export default Profile;
