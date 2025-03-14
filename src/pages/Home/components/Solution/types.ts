import { ComponentType, SVGProps } from 'react';

interface ISolutionCard {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  animationDelay?: number;
}

export type { ISolutionCard };
