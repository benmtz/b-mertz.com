// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import ProjectCard from "../components/ProjectCard.tsx";

// const meta: Meta<typeof Header> = {
//   component: Header,
// };

// export default meta;
//   type Story = StoryObj<typeof Header>;
//
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
// export const Default: Story = {
//   name: 'default',
//
//   render: () => <ProjectCard />
// };

export default {
  title: "ProjectCard",
  decorators: [withKnobs],
}

export const asDynamicVariables = () => {
  const title = text('Title', 'James');
  const main_stack = text('main_stack', 'Main Stack')
  const content = text('content','content');
  const link = text('link','link');
  const stacks = text('stacks','stacks');

  return <ProjectCard project={{title, content, main_stack, link, stacks: []}}/>;
};
