import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TextArea } from './text-area';

const DefaultTextArea = () => {
    const [value, setValue] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. At, delectus perferendis! Nulla, recusandae facilis optio sit ullam facere nisi enim natus, consectetur cupiditate sequi, voluptas sint at laborum quisquam adipisci.');
    
    return (
        <TextArea value={value} onChange={e => setValue(e.target.value)} />
    );
}

export default {
    title: 'Base/Text Area',
    component: DefaultTextArea
} as Meta<typeof DefaultTextArea>;

const Template: StoryFn<typeof DefaultTextArea> = () => <DefaultTextArea />;

export const Simple = Template.bind({});