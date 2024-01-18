import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./checkbox";
import React from "react";

const meta: Meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        controls: {
            expanded: true
        }
    }
};

export default meta;

const Template: StoryFn<CheckboxProps> = args => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
    id: 'default-checkbox',
    rounded: true,
    hidden: false,
    disabled: false
};