import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Dialog } from './dialog';

const meta: Meta = {
    title: 'Dialog',
    component: Dialog,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: StoryFn<typeof Dialog> = args => <Dialog {...args} />

export const Default = Template.bind({});

Default.args = { isOpen: true, onCloseDialog: () => { }, size: 'md' };