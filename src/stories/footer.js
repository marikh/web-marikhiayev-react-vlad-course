import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Footer from '../components/Footer';

storiesOf("Footer", module)
  .add('simple', () => 
  <Footer>
    <ul>
        <li>dummy item</li>
        <li>dummy item</li>
        <li>dummy item</li>
        <li>dummy item</li>
    </ul>
    </Footer>)
//   .add('with backgroung image', () => <Card style={{ backgroundImage: `url(http://images2.fanpop.com/image/photos/9800000/Great-Mountains-mountains-and-waterfalls-9842020-500-375.jpg)`}}></Card>)
