import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import HeroArea from '../components/HeroArea';
import Heading from '../components/Heading';
import T from 'i18n-react';

storiesOf("HeroArea", module)
  .add('without content - just background', () =>(
    <HeroArea>
    </HeroArea>)
  )
  .add('with content - Heading component (size 1)', () => (
    <HeroArea>
        <Heading size={1}>
            Blog Posts
        </Heading>
    </HeroArea>)
  )
