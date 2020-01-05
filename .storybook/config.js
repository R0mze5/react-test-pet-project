import { configure, addDecorator } from '@storybook/react';
import React from 'react';

import { theme, GlobalStyles, styled, ThemeProvider } from '@theme';

const stories = require.context('../src', true, /.story.js$/);

const StoryBookContainer = styled.div`
  min-height: 250px;
  padding: 20px;
  width: 800px;
  background-color: #fafafa;
  display: flex;
`;

const InnerContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;

  padding: 40px;
`;

function loadStories() {
  addDecorator(story => (
    <StoryBookContainer>
      <InnerContainer>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            {story()}
          </>
        </ThemeProvider>
      </InnerContainer>
    </StoryBookContainer>
  ));
  stories.keys().forEach(stories);
}

configure(loadStories, module);
