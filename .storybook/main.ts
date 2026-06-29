import tailwindcss from '@tailwindcss/vite';
import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  addons: ['@storybook/addon-docs'],
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tailwindcss()],
    });
  },
  docs: {
    defaultName: 'Docs',
  },
};

export default config;
