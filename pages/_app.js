import '../styles/globals.css';
import { useEffect } from 'react';
import { Layout } from '../components/Layout';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // AOS.init();
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
