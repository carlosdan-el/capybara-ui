import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "./button";

const meta: Meta = {
    title: 'Button',
    component: Button,
    parameters: {
        controls: {
            expanded: true
        },
    },
};

export default meta;

const Template: StoryFn<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: 'Primary Button'
};