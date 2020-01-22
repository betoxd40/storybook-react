import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Anchor } from './index';

export default {
  title: 'Anchor',
  component: Anchor,
};

export const defaultState = () => (
  <>
    <Anchor text={'Link text'} />
  </>
);

export const withHref = () => (
  <>
    <Anchor
      onClick={action('click')}
      to={'https://www.factom.com/'}
      text={'Link with href'}
    />
  </>
);

export const playground = () => {
  const title = text('text', 'hello world');
  const href = text('href', 'https://www.factom.com/');
  return <Anchor onClick={action('click')} to={href} text={title} />;
};
