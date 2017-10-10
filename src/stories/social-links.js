import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import SocialLinks from '../components/SocialLinks';

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

// const AppFooterStyleDiv = story => (
//     <div className="App-footer">{story()}</div>
// )

storiesOf("SocialLinks", module)
// .addDecorator(AppFooterStyleDiv)
  .add('deafult links presentation', () => <SocialLinks style={{ padding: '.1rem'}} links={socialLinks} />)
  .add('links with presentation type of "icons"', () => <SocialLinks links={socialLinks} type="icons" />)





