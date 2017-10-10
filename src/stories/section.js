import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Section from '../components/Section';

storiesOf("Section", module)
  .add('empty', () => <Section></Section>)
  .add('with text', () => 
  <Section>
    "Never Gonna Give You Up" is a single by Rick Astley, released in 1987, written and produced by Stock Aitken Waterman. The song was released as the first single from his debut album, Whenever You Need Somebody (1987). The song was a worldwide number-one hit, initially in the singer's native United Kingdom in 1987, where it stayed at the top of the chart for five weeks and was the best-selling single of that year. It eventually topped the charts in 25 countries, including the United States and West Germany.[5]

The song won Best British Single at the 1988 Brit Awards. In 1990, Nick Lowe quoted from the song and called it "ghastly" in the lyrics to "All Men Are Liars," a song on his album Party of One. In 2004, "Never Gonna Give You Up" was voted number 28 in 50 Most Awesomely Bad Songs... Ever by VH1.

The music video for the song has become the basis for the "Rickrolling" Internet meme. In 2008, Astley won the MTV Europe Music Award for Best Act Ever with the song, as a result of collective voting from thousands of people on the internet, due to the popular phenomenon of Rickrolling. It was also featured as a downloadable track for the Rock Band series.

The song is considered Astley's signature song and it is often played at the end of Astley's live concerts. During a live performance, usually on the last verse, Rick sometimes shouts out to the audience that he is feeling "bloody marvellous" or in other countries that he is feeling "fantastic" after the line "And if you ask me how I'm feeling" to have some banter with the audience.
  </Section>)

