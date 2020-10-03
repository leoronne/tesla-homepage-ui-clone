/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect } from 'react';

import ModelsContext from './ModelsContext';
import { CarModel } from './index';

const useModel = (
  modelName: string
): {
  registerModel: (model: CarModel) => void;
  getModel: () => CarModel | null;
} => {
  const { registerModel, unregisterModel, getModelByName } = React.useContext(ModelsContext);

  useEffect(() => () => unregisterModel(modelName), [modelName, unregisterModel]);

  const getModel = useCallback(() => getModelByName(modelName), [getModelByName, modelName]);

  return {
    registerModel,
    getModel,
  };
};
export default useModel;
