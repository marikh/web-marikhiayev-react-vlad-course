import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Heading from '../components/Heading';
import T from 'i18n-react';

const backgroudContraToWhiteFont = story => 
    (<div style={{ textAlign: 'center' }}>
        {story()}
    </div>);

storiesOf("Heading", module)
.addDecorator(backgroudContraToWhiteFont)
  .add('size 1 - hebrew', () => {
    T.setTexts(require('../translations/he/translations.json'));
  
  return <Heading size={1}>
            Blog Posts
        </Heading>
  })

  .add('size 2 - hebrew', () => {
    T.setTexts(require('../translations/he/translations.json'));
  
  return <Heading size={2}>
            Blog Posts
        </Heading>
  })

  .add('size 3 - hebrew', () => {
    T.setTexts(require('../translations/he/translations.json'));
  
  return <Heading size={3}>
            Blog Posts
        </Heading>
  })

  .add('size 4 - hebrew', () => {
    T.setTexts(require('../translations/he/translations.json'));
  
  return <Heading size={4}>
            Blog Posts
        </Heading>
  })

  .add('size 5 - hebrew', () => {
    T.setTexts(require('../translations/he/translations.json'));
  
  return <Heading size={5}>
            Blog Posts
        </Heading>
  })

  .add('size 1 - english', () => {
    T.setTexts(require('../translations/en/translations.json'));
  
  return <Heading size={1}>
            Blog Posts
        </Heading>
  })

  .add('size 2 - english', () => {
    T.setTexts(require('../translations/en/translations.json'));
  
  return <Heading size={2}>
            Blog Posts
        </Heading>
  })

  .add('size 3 - english', () => {
    T.setTexts(require('../translations/en/translations.json'));
  
  return <Heading size={3}>
            Blog Posts
        </Heading>
  })

  .add('size 4 - english', () => {
    T.setTexts(require('../translations/en/translations.json'));
  
  return <Heading size={4}>
            Blog Posts
        </Heading>
  })

  .add('size 5 - english', () => {
    T.setTexts(require('../translations/en/translations.json'));
  
  return <Heading size={5}>
            Blog Posts
        </Heading>
  })