import React, { useState } from 'react';
import { NumberInput } from './number-input';
import { Meta, StoryFn } from '@storybook/react/*';

const meta: Meta = {
    title: 'Components/Number Input',
    component: NumberInput,
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: StoryFn<typeof NumberInput> = (args: any) => {
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