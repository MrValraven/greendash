import { IPerkListItem } from '../types';

import './perkListItem.css';

const PerkListItem = ({ Icon, text }: IPerkListItem) => {
  return (
    <div className='perk-list-item'>
      <div className='perk-list-item-icon-container'>
        <Icon />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default PerkListItem;
