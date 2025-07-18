import './AreaProgressCard.css';

export default function AreaProgressCard({
  title,
  percentage,
  completed,
  total,
  accent = '#22c55e',
}) {
  return (
    <article className='area-progress-card'>
      <span
        className='area-progress-card__ring'
        style={{ '--p': percentage, '--accent': accent }}
      />
      <div className='area-progress-card__info'>
        <h4>{title}</h4>
        <p>
          {completed}/{total} Data&nbsp;Points
        </p>
      </div>
      <span className='area-progress-card__chevron'>➔</span>
    </article>
  );
}
