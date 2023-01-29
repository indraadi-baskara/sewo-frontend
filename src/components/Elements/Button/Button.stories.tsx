import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

import { Button } from "./Button";

export default {
  title: "Components/Elements/Button",
  component: Button,
  parameters: {
    controls: {
      expanded: true,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  children = undefined,
  ...props
}) => (
  <div className="flex">
    <Button {...props}>{children}</Button>
    <Button
      startIcon={<ChatBubbleLeftRightIcon className="h-5 w-5" />}
      {...props}
    >
      {children}
    </Button>
    <Button endIcon={<ChevronDownIcon className="h-4 w-4" />} {...props}>
      {children}
    </Button>
    <Button {...props}>
      <ChatBubbleLeftRightIcon className="h-5 w-5" />
    </Button>
    <Button disabled {...props}>
      Disabled
    </Button>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Label",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Label",
  variant: "secondary",
};

export const Minimal = Template.bind({});
Minimal.args = {
  children: "Label",
  variant: "minimal",
};
