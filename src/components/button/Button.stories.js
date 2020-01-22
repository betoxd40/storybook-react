import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { Button } from './index';

export default {
  title: 'Button',
  component: Button,
};

export const defaultState = () => (
  <>
    <Button onClick={action('click')} title="Default Button" />
  </>
);

export const disabled = () => (
  <>
    <Button onClick={action('click')} title="Default Button" disabled />
  </>
);

export const playground = () => {
  const title = text('children', 'hello world !');
  const disabled = boolean('Disabled', false);
  return <Button onClick={action('click')} title={title} disabled={disabled} />;
};
/*
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import Button from './index';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <Button onClick={action('click')} title="Default Button" />;
});

stories.add('disabled', () => {
  return <Button onClick={action('click')} title="Default Button" disabled />;
});

stories.add('playground', () => {
  const title = text('children', 'hello world !');
  const disabled = boolean('Disabled', false);
  return <Button onClick={action('click')} title={title} disabled={disabled} />;
});
*/
