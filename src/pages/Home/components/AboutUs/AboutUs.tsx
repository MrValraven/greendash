import Button from '@components/Button/Button';
import { IPerkListItem } from './components/types';
import PentagonIcon from './icons/PentagonIcon';
import RefreshCircleIcon from './icons/RefreshCircleIcon';
import LightningIcon from './icons/LightingIcon';
import MagicWandIcon from './icons/MagicWandIcon';
import PerkListItem from './components/PerkListItem/PerkListItem';

import './AboutUs.css';

const perks: IPerkListItem[] = [
  {
    Icon: PentagonIcon,
    text: 'All your ESG data centralized in one location',
  },
  {
    Icon: RefreshCircleIcon,
    text: 'Always up to date with the latest regulations',
  },
  {
    Icon: LightningIcon,
    text: 'Fast-track CSRD compliance by automating ESRS data collection and tagging, and report generation.',
  },
  {
    Icon: MagicWandIcon,
    text: 'With our in-house AI technology, we support you on writing the report and making sure that you don’t miss any requirement',
  },
];

const AboutUs = () => {
  return (
    <section className='about-us'>
      <div className='information-container'>
        <h2>We empower companies to build their own report through our complete solution</h2>
        <p>
          At GreenDash, we simplify your reporting journey allowing you to have more time to drive
          strategic change.
        </p>
        <Button>Contact Us To Know More</Button>
      </div>
      <div className='perks-container'>
        {perks.map((perk) => (
          <PerkListItem key={perk.text} Icon={perk.Icon} text={perk.text} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
