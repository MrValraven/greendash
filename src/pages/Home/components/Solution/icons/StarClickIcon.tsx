import { ComponentType, SVGProps } from 'react';

const StarClickIcon: ComponentType<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.5 12H6.5'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12.5 3V6'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M8.3001 7.79998L6.1001 5.59998'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16.7002 7.79998L18.9002 5.59998'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M8.3001 16.2L6.1001 18.4'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12.5 12L21.5 15L17.5 17L15.5 21L12.5 12'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default StarClickIcon;
