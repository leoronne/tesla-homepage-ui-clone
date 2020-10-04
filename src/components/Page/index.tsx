/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import models from './ModelsList';

import { Container, Spacer } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {models.map(model => (
            <ModelSection
              key={model.id}
              className="colored"
              modelName={model.title}
              modelId={model.id}
              background={{
                desktop: model.background,
                mobile: model.backgroundMobile,
              }}
              overlayNode={(
                <DefaultOverlayContent
                  label={model.title}
                  Description={model.Description}
                  button1={{ text: model.text1, link: model.link1 }}
                  button2={{ text: model.text2, link: model.link2 }}
                />
              )}
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
