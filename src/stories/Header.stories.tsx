// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/Header.tsx';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
  type Story = StoryObj<typeof Header>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  name: 'default',
  render: () => <BrowserRouter><Header /></BrowserRouter>,
};
