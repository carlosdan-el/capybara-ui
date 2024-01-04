import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Badge, BadgeProps } from './badge';

const meta: Meta = {
    title: 'Badge',
    component: Badge,
    parameters: {
        controls: {
            expanded: true
        },
    }
};

export default meta;

const Template: StoryFn<BadgeProps> = args => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {
    type: 'info',
    label: 'Default'
};