import SolutionCard from './SolutionCard/SolutionCard';
import ArrowLeftRightIcon from './icons/ArrowLeftRightIcon';
import StarClickIcon from './icons/StarClickIcon';
import ClipboardCheckIcon from './icons/ClipboardCheckIcon';
import { ISolutionCard } from './types';

import './Solution.css';

const solutionProcess: ISolutionCard[] = [
  {
    Icon: ArrowLeftRightIcon,
    title: 'Get your double-materiality analysis ',
    description:
      'GreenDash provides you a workflow and support for your Double Materiality Assessment',
  },
  {
    Icon: StarClickIcon,
    title: 'Know what and how to disclosure',
    description:
      'Easily identify and collect the data that you need to build your CSRD report from several sources, in one single place',
  },
  {
    Icon: ClipboardCheckIcon,
    title: 'Build your Sustainability Report',
    description:
      'We help you build your  report block by block with AI support, supporting you on writing the report and and getting it ready for your stakeholders',
  },
];

const Solution = () => {
  return (
    <section className='solution'>
      <h2>We guide you through the whole reporting process, offering you an End-to-End solution</h2>
      <div className='solutions-container'>
        {solutionProcess.map((solution) => (
          <SolutionCard
            key={solution.title}
            Icon={solution.Icon}
            title={solution.title}
            description={solution.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Solution;
