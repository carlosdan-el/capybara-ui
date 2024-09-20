import { Meta, StoryFn } from "@storybook/react";
import { Image, ImageProps } from "./image";
import React from "react";

const meta: Meta = {
    title: 'Base/Image',
    component: Image,
    parameters: {
        controls: {
            expanded: true
        }
    }
};

export default meta;

const Template: StoryFn<ImageProps> = args => <Image width={500} src="https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" {...args} />;

export const Default = Template.bind({});
