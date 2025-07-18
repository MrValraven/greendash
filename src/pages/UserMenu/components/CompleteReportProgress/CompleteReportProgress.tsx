import AreaProgressCard from '../AreaProgressCard/AreaProgressCard';
import './CompleteReportProgress.css';

export default function CompleteReportingProgress() {
  return (
    <section className='complete-progress'>
      <h3>Complete Reporting Progress by Area</h3>

      <AreaProgressCard
        title='General Information'
        percentage={72}
        completed={20}
        total={23}
        accent='#22c55e'
      />
      <AreaProgressCard
        title='Environment Metrics'
        percentage={48}
        completed={31}
        total={68}
        accent='#16a34a'
      />
      <AreaProgressCard
        title='Social Metrics'
        percentage={15}
        completed={2}
        total={25}
        accent='#ef4444'
      />
      <AreaProgressCard
        title='Governance Metrics'
        percentage={28}
        completed={3}
        total={9}
        accent='#0891b2'
      />
    </section>
  );
}
