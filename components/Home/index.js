import React from 'react';
import Hero from 'components/Home/Hero';
import styles from 'styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
};

export default Home;
