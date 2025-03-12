import { ComponentType, SVGProps } from 'react';

interface IPerkListItem {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
}

export type { IPerkListItem };
