import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { NumberInput } from './number-input';

const meta: Meta = {
    title: 'Number Input',
    component: NumberInput,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: StoryFn<typeof NumberInput> = args => {
    const [value, setValue] = useState('');
    return (
        <NumberInput
            value={value}
            onChange={e => setValue(e.target.value)}
            {...args}
        />
    );
};

export const Default = Template.bind({});

Default.args = {
    placeholder: 'Ex.: 1,99',
    disabled: false
};