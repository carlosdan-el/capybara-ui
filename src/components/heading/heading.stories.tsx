import { Meta, StoryFn } from "@storybook/react";
import { Heading } from "./heading";
import React from "react";

const meta: Meta = {
    title: 'Typography/Heading',
    component: Heading,
    parameters: {
        controls: { expanded: true },
    }
};

export default meta;

const Template: StoryFn<typeof Heading> = args => <Heading {...args} />

export const Default = Template.bind({});
Default.args = { children: 'Heading h1' };

export const h2 = Template.bind({});
h2.args = { variant: 'h2', children: 'Heading h2' };

export const h3 = Template.bind({});
h3.args = { variant: 'h3', children: 'Heading h3' };

export const h4 = Template.bind({});
h4.args = { variant: 'h4', children: 'Heading h4' };

export const h5 = Template.bind({});
h5.args = { variant: 'h5', children: 'Heading h5' };

export const h6 = Template.bind({});
h6.args = { variant: 'h6', children: 'Heading h6', className: 'text-blue-600' };