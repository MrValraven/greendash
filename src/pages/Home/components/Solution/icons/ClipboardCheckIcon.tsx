import { ComponentType, SVGProps } from 'react';

const ClipboardCheckIcon: ComponentType<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>,
) => {
  return (
    <svg
      {...props}
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.5 5.43359H7.5C6.39543 5.43359 5.5 6.32902 5.5 7.43359V19.4336C5.5 20.5382 6.39543 21.4336 7.5 21.4336H17.5C18.6046 21.4336 19.5 20.5382 19.5 19.4336V7.43359C19.5 6.32902 18.6046 5.43359 17.5 5.43359H15.5'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <rect
        x='9.5'
        y='3.43359'
        width='6'
        height='4'
        rx='2'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M9.5 14.4336L11.5 16.4336L15.5 12.4336'
        stroke='#2F2B3D'
        stroke-opacity='0.9'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default ClipboardCheckIcon;
