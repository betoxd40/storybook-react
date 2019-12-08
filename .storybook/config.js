import { configure, addParameters } from '@storybook/react';

addParameters({
  options: {
    name: 'Factom UI',
    showRoots: true,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);
