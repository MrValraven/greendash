import { ComponentType, SVGProps } from 'react';

const LightningIcon: ComponentType<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width='24' height='35' viewBox='0 0 24 35' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_526_4534)'>
        <path d='M17.91 16.5197H14.82V9.3197C14.82 7.6397 13.91 7.2997 12.8 8.5597L12 9.4697L5.23001 17.1697C4.30001 18.2197 4.69001 19.0797 6.09001 19.0797H9.18001V26.2797C9.18001 27.9597 10.09 28.2997 11.2 27.0397L12 26.1297L18.77 18.4297C19.7 17.3797 19.31 16.5197 17.91 16.5197Z' />
      </g>
      <defs>
        <clipPath id='clip0_526_4534'>
          <rect width='24' height='34' fill='white' transform='translate(0 0.799805)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LightningIcon;
