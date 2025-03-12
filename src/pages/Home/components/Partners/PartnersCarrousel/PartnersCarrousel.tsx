import TecnicoImage from './images/tecnico.png';
import UnicornfactoryImage from './images/unicornfactory.png';
import DtuImage from './images/dtu.png';
import JunitecImage from './images/junitec.png';
import BuilduplabsImage from './images/builduplabs.png';

import './PartnersCarrousel.css';

const partnerImages = [
  {
    imageSource: TecnicoImage,
    alt: 'Tecnico',
  },
  {
    imageSource: UnicornfactoryImage,
    alt: 'Unicorn Factory',
  },
  {
    imageSource: DtuImage,
    alt: 'DTU',
  },
  {
    imageSource: JunitecImage,
    alt: 'Junitec',
  },
  {
    imageSource: BuilduplabsImage,
    alt: 'Buildup Labs',
  },
];

const NUMBER_OF_DUPLICATIONS = 2;
const partnerImageSet = Array(NUMBER_OF_DUPLICATIONS).fill(partnerImages).flat();

const PartnersCarrousel = () => {
  return (
    <div className='partners-carrousel'>
      <div className='partners-carrousel-slide'>
        {partnerImageSet.map((partner, index) => (
          <img key={index} src={partner.imageSource} alt={partner.alt} />
        ))}
      </div>
    </div>
  );
};

export default PartnersCarrousel;
