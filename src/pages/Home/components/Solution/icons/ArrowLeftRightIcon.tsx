import { ComponentType, SVGProps } from 'react';

const ArrowLeftRightIcon: ComponentType<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>,
) => {
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
        d='M21.5 7H3.5'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M18.5 10L21.5 7L18.5 4'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6.5 20L3.5 17L6.5 14'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M3.5 17H21.5'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default ArrowLeftRightIcon;
