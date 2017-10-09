import React from 'react';
import store from '../store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from '../components/Header';
const socialLinks = [
  {
    text: 'Facebook',
    icon: 'facebook',
    link: 'facebook.com'
  },
  {
    text: 'Github',
    icon: 'github',
    link: 'github.com'
  },
  {
    text: 'Email',
    icon: 'envelope',
    link: 'vnovick@gmail.comm'
  }
]

storiesOf("Header", module)
  .add('Closed menu header', () => 
  
<Provider store={store}><MemoryRouter><Header menuConfig={{ menuState : false, open: linkTo('Menu', 'Opened menu header - when not logged in'), socialLinks:socialLinks}}>
              </Header>
              </MemoryRouter>
              </Provider>)
