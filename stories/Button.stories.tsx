import { Meta, StoryObj } from "@storybook/react";
import Button from "../lib/components/button";
import { FaCheck } from "react-icons/fa";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    theme: {
      control: "radio",
      options: ["primary", "secondary"],
    },
    icon: { control: false },
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

export const PrimaryWithIcon: Story = {
  args: {
    label: "PrimaryWithIcon",
    theme: "primary",
    icon: <FaCheck />,
  },
};
