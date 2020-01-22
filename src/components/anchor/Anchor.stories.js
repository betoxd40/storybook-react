import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import Anchor from './index';

const stories = storiesOf('Anchor', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <Anchor/>;
});

stories.add('disabled', () => {
  return <Anchor onClick={action('click')} title="Default Anchor" disabled />;
});

stories.add('playground', () => {
  const title = text('children', 'hello world !');
  const disabled = boolean('Disabled', false);
  return <Anchor onClick={action('click')} title={title} disabled={disabled} />;
});
