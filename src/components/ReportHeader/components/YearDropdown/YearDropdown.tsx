import chevronDownIcon from './icons/chevron-down.svg';

import './YearDropdown.css';

interface YearDropdownProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  years: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
}

const YearDropdown: React.FC<YearDropdownProps> = ({
  isOpen,
  onOpen,
  onClose,
  years,
  selectedYear,
  onYearChange,
}) => {
  return (
    <div className='year-dropdown'>
      <div className='selected-year-container'>{selectedYear}</div>
      <div className='button-dropdown-container' onClick={isOpen ? onClose : onOpen}>
        <img src={chevronDownIcon} alt='chevron-down' />
      </div>
      {isOpen && (
        <div className='year-options-dropdown'>
          {years.map((year) => (
            <div
              key={year}
              className={`year-option ${selectedYear === year ? 'selected' : ''}`}
              onClick={() => {
                onYearChange(year);
                onClose();
              }}
            >
              {year}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YearDropdown;
