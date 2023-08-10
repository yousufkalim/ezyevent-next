import SpHero from './SpHero';
import Profile from './Profile';
import Exclusive from './Exclusive';
import SpDownload from './SPDownload';
import Footer from '../common/Footer';

export default function ServiceProvider() {
  return (
    <div>
      <SpHero />
      <Profile />
      <Exclusive />
      <SpDownload />
      <Footer />
    </div>
  );
}
