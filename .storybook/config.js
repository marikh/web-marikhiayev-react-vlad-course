import React from 'react';

import { configure, addDecorator} from '@storybook/react';

import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import '../src/App.css';
import '../src/components/Card/card.css';
import '../src/components/Footer/footer.css';
import '../src/components/Header/header.css';
import '../src/components/Heading/headings.css';
import '../src/components/HeroArea/hero.css';
import '../src/components/InputField/inputfield.css';
import '../src/components/Menu/menu.css';
import '../src/components/Section/section.css';
import '../src/components/SocialLinks/social-links.css';
import '../src/pages/Products/products.css';


addDecorator(story => (
    <div className="App">
        {story()}
    </div>
  ))

function loadStories() {
  require('../src/stories/body'),
  require('../src/stories/card'),
  require('../src/stories/footer'),
  require('../src/stories/header'),
  require('../src/stories/heading'),
  require('../src/stories/hero'),
  require('../src/stories/InputField'),
  require('../src/stories/menu'),
  require('../src/stories/section'),
  require('../src/stories/social-links'),
  require('../src/stories/layout')
}

configure(loadStories, module);
