import HeroEvent from './EventOrgniserHero';
import YesSection from './YesSection';
import OrgDownload from './OrgDownload';
import Footer from '../common/Footer';
// import Nevbar from './Nevbar';

export default function EventOrganiser() {
  return (
    <div>
      <HeroEvent />
      <YesSection />
      <OrgDownload />
      <Footer />
      {/* <Nevbar /> */}
    </div>
  );
}
