import Avatar from '@assets/Avatar.svg';
import GeneralIcon from './icons/generalIcon';
import EnvironmentIcon from './icons/environmentIcon';
import SocialMetricsIcon from './icons/socialMetricsIcon';
import GovernanceIcon from './icons/governanceIcon';

import AvatarHL from './icons/avatarHL.png';
import AvatarJC from './icons/avatarJC.png';
import AvatarMP from './icons/avatarMP.png';
import AvatarTB from './icons/avatarTB.png';

const dataCollection = [
  {
    mainCategory: 'General Information',
    icon: GeneralIcon,
    subCategories: [
      {
        id: 'B1',
        name: 'Basis for preparation',
        ownerImage: Avatar,
        ownerName: 'SD',
        statusCompletion: 88,
      },
      {
        id: 'B2',
        name: 'Practices, policies and future initiatives for transitioning towards a more sustainable economy',
        ownerImage: AvatarMP,
        ownerName: 'MP',
        statusCompletion: 34,
      },
      {
        id: 'C1',
        name: 'Strategy, Business Model and Sustainability-Related initiatives',
        ownerImage: AvatarTB,
        ownerName: 'TB',
        statusCompletion: 0,
      },
      {
        id: 'C2',
        name: 'Description of practices, policies and future initiatives for transitioning towards a more sustainable economy',
        ownerImage: AvatarTB,
        ownerName: 'TB',
        statusCompletion: 100,
      },
    ],
  },
  {
    mainCategory: 'Environment Metrics',
    icon: EnvironmentIcon,
    subCategories: [
      {
        id: 'B3',
        name: 'Energy and greenhouse gas emissions',
        ownerImage: AvatarJC,
        ownerName: 'JC',
        statusCompletion: 74,
      },
      {
        id: 'B4',
        name: 'Pollution of air, water and soil',
        ownerImage: AvatarHL,
        ownerName: 'HL',
        statusCompletion: 8,
      },
      {
        id: 'B5',
        name: 'Biodiversity',
        ownerImage: AvatarJC,
        ownerName: 'JC',
        statusCompletion: 20,
      },
      {
        id: 'B6',
        name: 'Water',
        ownerImage: AvatarHL,
        ownerName: 'HL',
        statusCompletion: 87,
      },
      {
        id: 'B7',
        name: 'Resource use, circular economy and waste management',
        ownerImage: Avatar,
        ownerName: 'TB',
        statusCompletion: 15,
      },
      {
        id: '',
        name: 'Consideration when reporting on GHG emissions under B3 (Basic Module)',
        ownerImage: AvatarMP,
        ownerName: 'MP',
        statusCompletion: 18,
      },
      {
        id: 'C3',
        name: 'GHG reduction targets and climate transition',
        ownerImage: AvatarJC,
        ownerName: 'JC',
        statusCompletion: 66,
      },
      {
        id: 'C4',
        name: 'Climate risks',
        ownerImage: AvatarHL,
        ownerName: 'HL',
        statusCompletion: 87,
      },
    ],
  },
  {
    mainCategory: 'Social Metrics',
    icon: SocialMetricsIcon,
    subCategories: [
      {
        id: 'B8',
        name: 'Workforce - General characteristics',
        ownerImage: AvatarJC,
        ownerName: 'JC',
        statusCompletion: 74,
      },
      {
        id: 'B9',
        name: 'Workforce - Health and safety',
        ownerImage: AvatarHL,
        ownerName: 'HL',
        statusCompletion: 8,
      },
      {
        id: 'B10',
        name: 'Workforce - Remuneration, collective bargaining and training',
        ownerImage: AvatarTB,
        ownerName: 'TB',
        statusCompletion: 20,
      },
      {
        id: 'C5',
        name: 'Additional (general) workforce characteristics',
        ownerImage: AvatarTB,
        ownerName: 'TB',
        statusCompletion: 87,
      },
      {
        id: 'C6',
        name: 'Additional own workforce information - Human rights policies and processes',
        ownerImage: AvatarTB,
        ownerName: 'TB',
        statusCompletion: 15,
      },
      {
        id: 'C7',
        name: 'Severe negative human rights incidents',
        ownerImage: AvatarMP,
        ownerName: 'MP',
        statusCompletion: 19,
      },
    ],
  },
  {
    mainCategory: 'Governance Metrics',
    icon: GovernanceIcon,
    subCategories: [
      {
        id: 'B11',
        name: 'Convictions and fines for corruption and bribery',
        ownerImage: Avatar,
        ownerName: 'SD',
        statusCompletion: 74,
      },
      {
        id: 'C8',
        name: 'Revenues from certain sectors and exclusion from EU reference benchmarks',
        ownerImage: AvatarMP,
        ownerName: 'MP',
        statusCompletion: 8,
      },
      {
        id: 'C9',
        name: 'Gender diversity ratio in governance body',
        ownerImage: AvatarJC,
        ownerName: 'JC',
        statusCompletion: 20,
      },
    ],
  },
];

export default dataCollection;
