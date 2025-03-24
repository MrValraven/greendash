import Button from '@components/Button/Button';
import { IPerkListItem } from './components/types';
import PentagonIcon from './icons/PentagonIcon';
import RefreshCircleIcon from './icons/RefreshCircleIcon';
import LightningIcon from './icons/LightingIcon';
import MagicWandIcon from './icons/MagicWandIcon';
import PerkListItem from './components/PerkListItem/PerkListItem';

import { motion } from 'motion/react';

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
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', delay: 0.1 }}
          viewport={{ once: true }}
        >
          We empower companies to build their own report through our complete solution
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', delay: 0.2 }}
          viewport={{ once: true }}
        >
          At GreenDash, we simplify your reporting journey allowing you to have more time to drive
          strategic change.
        </motion.p>
        <motion.div
          className='about-us-button'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button goToElementId='waiting-list'>Contact Us To Know More</Button>
        </motion.div>
      </div>
      <div className='perks-container'>
        {perks.map((perk, index) => (
          <PerkListItem key={perk.text} Icon={perk.Icon} text={perk.text} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
