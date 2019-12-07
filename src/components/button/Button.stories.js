import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('click')} title="Default Button" />
  ))
  .add('disabled', () => (
    <Button onClick={action('click')} title="Default Button" disabled />
  ));
