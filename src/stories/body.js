import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Body from '../components/Body';

storiesOf("Body (What's between hero and footer)", module)
  .add('with text', () => <Body>In computing, React (sometimes styled React.js or ReactJS) is a JavaScript library[2] for building user interfaces.

It is maintained by Facebook, Instagram and a community of individual developers and corporations.[3][4][5]

React allows developers to create large web-applications that use data and can change over time without reloading the page. It aims primarily to provide speed, simplicity, and scalability. React processes only user interfaces in applications. This corresponds to View in the Model-View-Controller (MVC) pattern, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as AngularJS.[6]</Body>)
  
