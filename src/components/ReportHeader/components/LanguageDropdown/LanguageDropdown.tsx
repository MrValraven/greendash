import languageIcon from './icons/languageIcon.svg';

import './LanguageDropdown.css';

interface LanguageDropdownProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ isOpen, onOpen, onClose }) => {
  return (
    <div className={`language-dropdown ${isOpen ? 'open' : ''}`}>
      <div className='language-button' onClick={isOpen ? onClose : onOpen}>
        <img src={languageIcon} alt='Language' />
      </div>
      {isOpen && (
        <div className='dropdown-language-menu'>
          <div className='dropdown-language-item'>English</div>
          <div className='dropdown-language-item'>French</div>
          <div className='dropdown-language-item'>German</div>
          <div className='dropdown-language-item'>Portuguese</div>
          <div className='dropdown-language-item'>Arabic</div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
