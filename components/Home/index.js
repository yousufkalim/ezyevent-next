import React from 'react';
import Hero from 'components/Home/Hero';
import About from 'components/Home/About';
import Details from 'components/Home/Details';
import Login from 'components/Home/Login';
import Gallery from 'components/Home/Gallery';
import DownloadApp from 'components/Home/DownloadApp';
// import Nevbar from 'components/Home/Nevbar';
import AllScreen from 'components/Home/AllScreen';
import Footer from 'components/common/Footer';
import styles from 'styles/Home.module.css';

const Home = (props) => {
  return (
    <div className={styles.home}>
      <Hero />
      <About />
      <AllScreen />
      <Details />
      <Login />
      <Gallery />
      <DownloadApp />
      {/* <Nevbar /> */}
      <Footer />
    </div>
  );
};

export default Home;
