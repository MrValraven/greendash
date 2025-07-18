import './DisclosureRow.css';

export default function DisclosureRow({ title, ownerInitials, status, avatarUrl }) {
  return (
    <div className='disclosure-row'>
      <p className='disclosure-row__title'>{title}</p>

      <div className='disclosure-row__owner'>
        <img src={avatarUrl} alt={ownerInitials} />
        <span>{ownerInitials}</span>
      </div>

      <div className='disclosure-row__bar' style={{ '--progress': `${status}%` }} />
      <span className='disclosure-row__percent'>{status}%</span>
    </div>
  );
}
