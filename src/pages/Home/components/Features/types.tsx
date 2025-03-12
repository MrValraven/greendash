import { ComponentType, SVGProps } from 'react';

interface IFeatureCardInfo {
  Image: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  type: string;
  description: string;
  isLayoutReversed: boolean;
}

export type { IFeatureCardInfo };
