import React from 'react';
import styles from '../../styles/Home.module.css';

const DownloadApp = () => {
  return (
    <section className={styles.home}>
      <div className='downloadContainer'>
        <h3>Download Now !</h3>
        <h2>Embark on Your Ezyevent Journey</h2>
        <p>
          Welcome to the world of Ezyevent, where we transform your event dreams into extraordinary
          realities. With our innovative platform, planning and organizing events become a seamless
          and enjoyable experience
        </p>
      </div>
      <div className='downloadImg'>
        <img className='appleDownload'></img>
        <img className='playStoreDownload'></img>
      </div>
    </section>
  );
};

export default DownloadApp;
