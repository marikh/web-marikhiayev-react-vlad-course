import React from 'react';
import store from '../store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Menu from '../components/Menu';

import configureStore from 'redux-mock-store'

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


storiesOf("Menu", module)
  .add('Opened menu header - when not logged in', () => {

    const mockStore = configureStore()
    const INITIAL_STATE = {showProtectedLinks : false};

    const store= mockStore({ menu: INITIAL_STATE});

    return  <Provider store={store}>
                <MemoryRouter>
                    <Menu menuConfig={{ menuState : true, open: () => {}, socialLinks:socialLinks}}/>
                    </MemoryRouter>
            </Provider>
  })


  .add('Opened menu header - when logged in', () => {

    const mockStore = configureStore()
    const INITIAL_STATE = {showProtectedLinks : true};

    const store= mockStore({ menu: INITIAL_STATE});

    return <Provider store={store}>
                <MemoryRouter>
                    <Menu menuConfig={{ menuState : true, open: () => {}, socialLinks:socialLinks}}
                        showProtectedLinks={true}/>
                    </MemoryRouter>
            </Provider>
  })
        