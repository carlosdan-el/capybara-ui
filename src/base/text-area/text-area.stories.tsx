import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TextArea } from './text-area';

const DefaultTextArea = () => {
    const [value, setValue] = useState('');
    return (
        <TextArea value={value} onChange={e => setValue(e.target.value)} />
    );
}

export default {
    title: 'Components/Text Area',
    component: DefaultTextArea
} as Meta<typeof DefaultTextArea>;

const Template: StoryFn<typeof DefaultTextArea> = () => <DefaultTextArea />;

export const Simple = Template.bind({});