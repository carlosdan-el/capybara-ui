import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "./button";
import { LuStar } from "react-icons/lu";

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

export const Primary = Template.bind({});

Primary.args = {
    _type: 'contained',
    emphasis: 'high',
    label: 'Primary Button'
};

export const Secondary = Template.bind({});

Secondary.args = {
    _type: 'contained',
    emphasis: 'medium',
    label: 'Secondary Button'
};

export const Tertiary = Template.bind({});

Tertiary.args = {
    _type: 'contained',
    emphasis: 'low',
    label: 'Tertiary Button'
};

export const Outlined = Template.bind({});

Outlined.args = {
    _type: 'outlined',
    label: 'Outlined Button'
};

export const Text = Template.bind({});

Text.args = {
    _type: 'text',
    label: 'Text Button' 
};

export const WithLeadingIcon = Template.bind({});

WithLeadingIcon.args = {
    leadingIcon: <LuStar size={16} />,
    label: 'Favorites'
};

export const OnlyIcon = Template.bind({});

OnlyIcon.args = {
    leadingIcon: <LuStar size={16} />,
    rounded: 'full'
};