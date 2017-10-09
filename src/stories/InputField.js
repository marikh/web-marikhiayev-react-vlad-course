// import React from 'react';

// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);



import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import InputField from '../components/InputField';

let focusedInputField;


const sizeLimitedDiv = story => (
  <div style={{ width:'400px', height:'400px' }}>
    {story()}
  </div>
);

storiesOf("InputField", module)
  .addDecorator(sizeLimitedDiv)
  .add('textarea', () => 
    <InputField type='textarea' value="bla bla bla"/>)
  .add('non text area type - password', () => 
    <InputField type='password' value="sasfsdfsdfa"/>)
  .add('non text area type - text', () => 
    <InputField type='text' value="bla bla bla"/>)
  .add('with label - non dirty', () => 
    <InputField type='password' label="Password" />)
  .add('with label - dirty', () => 
    <InputField type='password' label="Password"  value="bla bla bla" />)
  .add('without label - non dirty', () => 
    <InputField type='password'/>)
  .add('without label - dirty', () => 
    <InputField type='password' value="bla bla bla"/>)
  .add('required (press on "Submit")', () => {
    return <form>
      <InputField type='password' required={true} value=""/>
      <button type="submit" >Submit</button>
    </form>
  }
    )
    
