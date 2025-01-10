import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Toast, ToastProps } from "./toast";

const meta: Meta = {
    title: 'Components/Toast',
    component: Toast,
    parameters: {
        controls: {
            expanded: true
        }
    }
};

export default meta;

const Template: StoryFn<ToastProps> = args => <Toast {...args} />;

export const Default = Template.bind({});

Default.args = { 
    type: 'info', 
    title: 'Informação', 
    message: 'A new software version is available for download.'
};