import { Meta, StoryFn } from "@storybook/react";
import { Input, InputProps } from "./input";
import React from "react";

const meta: Meta = {
    title: 'Base/Input',
    component: Input,
    parameters: {
        controls: {
            expanded: true
        }
    }
};

export default meta;

const Template: StoryFn<InputProps> = args => <Input {...args} />;
export const Default = Template.bind({});
