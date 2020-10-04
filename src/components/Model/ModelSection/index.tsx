/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';

import { useModel } from '../../../hooks';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelId: string;
  modelName: string;
  overlayNode: React.ReactNode;
  background: {
    desktop: string;
    mobile: string;
  };
}

const ModelSection: React.FC<Props> = ({ modelName, background, modelId, overlayNode, children, ...props }) => {
  const { registerModel } = useModel(modelName);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current) {
      registerModel({
        modelId,
        overlayNode,
        sectionRef: ref,
      });
    }
  }, [children, modelId, overlayNode, registerModel]);

  return (
    <Container background={background} ref={ref} {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
