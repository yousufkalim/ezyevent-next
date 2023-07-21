import React from 'react';
import Hero from 'components/Home/Hero';
import About from 'components/Home/About';
import Details from 'components/Home/Details';
import User from 'components/Home/User';
import DownloadApp from 'components/Home/DownloadApp';
import Nevbar from 'components/Home/Nevbar';
import styles from 'styles/Home.module.css';

const Home = (props) => {
  console.log('Props ', props);
  return (
    <div className={styles.home}>
      <Hero />
      <About />
      <Details />
      <User />
      <DownloadApp />
      <Nevbar />
    </div>
  );
};

export default Home;
