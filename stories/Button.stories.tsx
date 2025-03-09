import { Meta, StoryObj } from "@storybook/react";
import Button from "../lib/components/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    theme: {
      control: "radio",
      options: ["primary", "secondary"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    theme: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    theme: "secondary",
  },
};
