declare module '@/components/DotField' {
  import { ComponentType } from 'react';
  const DotField: ComponentType<any>;
  export default DotField;
}

declare module '@/components/ColorBends' {
  import { ComponentType } from 'react';
  const ColorBends: ComponentType<any>;
  export default ColorBends;
}

declare module '*.jsx' {
  import { ComponentType } from 'react';
  const component: ComponentType<any>;
  export default component;
}

