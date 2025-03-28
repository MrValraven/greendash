import SolutionCard from './SolutionCard/SolutionCard';
import ArrowLeftRightIcon from './icons/ArrowLeftRightIcon';
import StarClickIcon from './icons/StarClickIcon';
import ClipboardCheckIcon from './icons/ClipboardCheckIcon';
import { ISolutionCard } from './types';
import { motion } from 'motion/react';
import React from 'react';

import './Solution.css';
import TriangleIcon from './icons/TriangleIcon';

const solutionProcess: ISolutionCard[] = [
  {
    Icon: ArrowLeftRightIcon,
    title: 'Get your double-materiality analysis ',
    description:
      'GreenDash provides you a workflow and support for your Double Materiality Assessment',
    animationDelay: 0,
  },
  {
    Icon: StarClickIcon,
    title: 'Know what and how to disclosure',
    description:
      'Easily identify and collect the data that you need to build your CSRD report from several sources, in one single place',
    animationDelay: 0.5,
  },
  {
    Icon: ClipboardCheckIcon,
    title: 'Build your Sustainability Report',
    description:
      'We help you build your  report block by block with AI support, supporting you on writing the report and and getting it ready for your stakeholders',
    animationDelay: 1,
  },
];

const Solution = () => {
  return (
    <section className='solution'>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', delay: 0.3 }}
        viewport={{ once: true }}
      >
        We guide you through the whole reporting process, offering you an End-to-End solution
      </motion.h2>
      <div className='solutions-container'>
        {solutionProcess.map((solution, index) => (
          <React.Fragment key={solution.title}>
            <SolutionCard
              key={solution.title}
              Icon={solution.Icon}
              title={solution.title}
              description={solution.description}
              animationDelay={solution.animationDelay}
            />
            {index < solutionProcess.length - 1 ? (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, type: 'spring', delay: solution.animationDelay! + 0.2 }}
                viewport={{ once: true }}
                key={solution.title + index}
                className='solution-triangle-icon-container'
              >
                <TriangleIcon />
              </motion.div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Solution;
