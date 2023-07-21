import React from 'react';
import styles from '../../styles/Home.module.css';

const User = () => {
  return (
    <section className={styles.home}>
      <h2>Designed to be user-centric, for both organisers & service providers</h2>
      <div className='userCards'>
        <div className='card1'>
          <h4>Ezy Event</h4>
          <h3>Login as a User</h3>
          <p>Gain personalized access to our app's features</p>
        </div>
        <div className='card2'>
          <h4>Ezy Event</h4>
          <h3>Login as a Service Provider</h3>
          <p>Access exclusive features and opportunities as a service provider</p>
        </div>
      </div>
      <div className='links'>
        <a href='http://#'>Download our App</a>
        <a href='http://#'>Get a Demo</a>
      </div>
      <div className='gallery'>
        <h2>Our Gallery</h2>
        <p>
          Step into a world of cherished memories and captivating moments captured from our
          remarkable events
        </p>
        <div className='imageContainer'>
          <img className='img1'></img>
          <img className='img2'></img>
          <img className='img3'></img>
          <img className='img4'></img>
          <img className='img5'></img>
          <img className='img6'></img>
          <img className='img7'></img>
          <img className='img8'></img>
        </div>
      </div>
    </section>
  );
};

export default User;
