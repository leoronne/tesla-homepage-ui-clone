/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from 'react';

export { default as useWrapperScroll } from './useWrapperScroll';
export { default as useModel } from './useModel';
export { default as ModelsContext } from './ModelsContext';

export interface CarModel {
  modelId: string;
  overlayNode: ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
}
