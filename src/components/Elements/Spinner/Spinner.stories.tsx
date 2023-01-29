import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Spinner } from "./Spinner";

export default {
  title: "Components/Elements/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (props) => (
  <Spinner {...props} />
);

export const Default = Template.bind({});
Default.args = {};
