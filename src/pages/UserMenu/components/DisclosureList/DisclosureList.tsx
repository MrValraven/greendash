import DisclosureRow from '../DisclosureRow/DisclosureRow';
import './DisclosureList.css';

export default function DisclosureList({ subCategories }: { subCategories: any[] }) {
  return (
    <div className='data-table'>
      <div className='data-table__header'>
        <span>DISCLOSURE</span>
        <span>OWNER</span>
        <span>STATUS</span>
      </div>

      {subCategories.map((row, index) => (
        <div className='data-table__row' key={index}>
          <span className='disclosure'>
            {row.id} - {row.name}
          </span>

          <span className='owner'>
            <img src={row.ownerImage} alt={row.ownerName} />
            <span>{row.ownerName}</span>
          </span>

          <span className='status'>
            <div className='progress-bar'>
              <div className='progress' style={{ width: `${row.statusCompletion}%` }} />
            </div>
            <span>{row.statusCompletion}%</span>
          </span>
        </div>
      ))}
    </div>
  );
}
