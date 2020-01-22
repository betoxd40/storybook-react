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
  const title = text('children', 'hello world');
  const disabled = boolean('Disabled', false);
  return <Button onClick={action('click')} title={title} disabled={disabled} />;
};
