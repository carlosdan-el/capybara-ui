import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TextInput } from './text-input';

const meta: Meta = {
    title: 'Components/Text Input',
    component: TextInput,
    parameters: {
        controls: {
            expanded: true
        }
    }
};

export default meta;

const Template: StoryFn<typeof TextInput> = args => <TextInput {...args} />;

export const Default = Template.bind({});

Default.args = {
    type: 'text',
    placeholder: 'Ex.: your@email.com.br',
    disabled: false,
    value: 'Asterisk UI',
    onChange: value => console.log(value)
};