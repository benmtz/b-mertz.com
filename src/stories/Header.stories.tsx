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

const whiteBox = () => <div className="w-full h-20 bg-white" />

export const Default: Story = {
  name: 'With tilings',
  render: () => <BrowserRouter>
    <Header/>
    {whiteBox()}
    <Header/>
    {whiteBox()}
    <Header/>
    {whiteBox()}
    <div className={"flex flex-row"}>
      <div className={"flex-1 p-4"}>
        <Header/>
      </div>
      <div className={"flex-1 p-4"}>
        <Header/>
      </div>
    </div>
    {whiteBox()}
    <div className={"flex flex-row"}>
      <div className={"flex-1 p-4"}>
        <Header/>
      </div>
      <div className={"flex-1 p-4"}>
        <Header/>
      </div>
      <div className={"flex-1 p-4"}>
        <Header/>
      </div>
      <div className={"flex-1 p-4"}>
        <Header/>
      </div>
    </div>
    </BrowserRouter>,

};
