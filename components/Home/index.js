import { useRef, useEffect } from 'react';
import Hero from 'components/Home/Hero';
import About from 'components/Home/About';
import Details from 'components/Home/Details';
import Login from 'components/Home/Login';
import Gallery from 'components/Home/Gallery';
import DownloadApp from 'components/Home/DownloadApp';
import Nevbar from 'components/Home/Nevbar';
import AllScreen from 'components/Home/AllScreen';
import Footer from 'components/common/Footer';
import styles from 'styles/Home.module.css';

const HomePage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.style.scrollSnapType = 'y mandatory';
    }
  }, []);
  return (
    <div className={styles.container} ref={scrollRef}>
      <Nevbar />
      <Hero />
      <About />
      <AllScreen />
      <Details />
      <Login />
      <Gallery />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default HomePage;
