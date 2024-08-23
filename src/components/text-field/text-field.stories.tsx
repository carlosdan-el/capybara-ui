import { Meta, StoryFn } from "@storybook/react";
import { TextField, TextFieldProps } from ".";
import React from "react";

const meta: Meta = {
    title: 'Components/TextField',
    component: TextField,
    parameters: {
        controls: { expanded: true }
    },
};

export default meta;

const Template: StoryFn<TextFieldProps> = args => <TextField {...args} />;
export const Default = Template.bind({});