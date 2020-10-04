/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from 'react';

import { CarModel } from './index';

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>;
  registeredModels: CarModel[];
  registerModel: (model: CarModel) => void;
  unregisterModel: (modelId: string) => void;
  getModelByName: (modelId: string) => CarModel | null;
}

// Export with default values
export default React.createContext<ModelsContext>({} as ModelsContext);
