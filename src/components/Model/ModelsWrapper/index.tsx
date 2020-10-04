import React, { useCallback, useRef, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CarModel, ModelsContext } from '../../../hooks';
import ModelOverlay from '../ModelOverlay';

import { Container, OverlaysRoot } from './styles';

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, { ...model }]);
  }, []);

  const unregisterModel = useCallback((modelId: string) => {
    setRegisteredModels(state => state.filter(model => model.modelId !== modelId));
  }, []);

  const getModelByName = useCallback(
    (modelId: string) => {
      return registeredModels.find(item => item.modelId === modelId) || null;
    },
    [registeredModels]
  );

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map(item => (
            <ModelOverlay key={item.modelId} model={item}>
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </OverlaysRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
