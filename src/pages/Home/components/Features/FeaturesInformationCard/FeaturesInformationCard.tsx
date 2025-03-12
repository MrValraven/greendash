import './FeaturesInformationCard.css';
import { IFeatureCardInfo } from '../types';

const FeaturesInformationCard = ({
  Image,
  title,
  type,
  description,
  isLayoutReversed,
}: IFeatureCardInfo) => {
  return (
    <div className={`features-information-card ${isLayoutReversed ? 'reversed' : ''}`}>
      <div className='feature-card-information-image'>
        <Image />
      </div>
      <div className={`information-container`}>
        <h3>{type}</h3>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturesInformationCard;
