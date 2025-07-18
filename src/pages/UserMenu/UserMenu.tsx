import ProgressRing from './components/ProgressRing/ProgressRing';
import CompleteReportingProgress from './components/CompleteReportProgress/CompleteReportProgress';
import DisclosureList from './components/DisclosureList/DisclosureList';
import './UserMenu.css';

import dataCollection from './dataCollection';

type Props = {};

const UserMenu = (props: Props) => {
  return (
    <div className='user-menu'>
      <h3 className='subtitle'>Report Hub / Data Collection</h3>
      <main className='dashboard'>
        <div className='dashboard-header'>
          <ProgressRing />

          <CompleteReportingProgress />
        </div>

        <div className='dataCollectionContainer'>
          {dataCollection.map((dataCollect) => (
            <div className='dataCollectionItem'>
              <div className='dataCollectionItemHeader'>
                <span className='dataCollectionIcon'>
                  <dataCollect.icon />
                </span>
                <h3 className='dataCollectMainCategory'>{dataCollect.mainCategory}</h3>
              </div>
              <DisclosureList subCategories={dataCollect.subCategories} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UserMenu;
