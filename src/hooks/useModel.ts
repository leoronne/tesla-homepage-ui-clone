/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect } from 'react';

import ModelsContext from './ModelsContext';
import { CarModel } from './index';

const useModel = (
  modelId: string
): {
  registerModel: (model: CarModel) => void;
  getModel: () => CarModel | null;
} => {
  const { registerModel, unregisterModel, getModelByName } = React.useContext(ModelsContext);

  useEffect(() => () => unregisterModel(modelId), [modelId, unregisterModel]);

  const getModel = useCallback(() => getModelByName(modelId), [getModelByName, modelId]);

  return {
    registerModel,
    getModel,
  };
};
export default useModel;
