import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TextCounter } from './text-counter';
import { TextArea } from '../../base/text-area/text-area';

const DefaultTextArea = () => {
    const maxLength = 500;
    const [value, setValue] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. At, delectus perferendis! Nulla, recusandae facilis optio sit ullam facere nisi enim natus, consectetur cupiditate sequi, voluptas sint at laborum quisquam adipisci.');

    return (
        <>
            <TextArea
                maxLength={maxLength}
                value={value}
                onChange={e => setValue(e.target.value)}
                size="md"
            />
            <TextCounter
                currentLength={value.length}
                maxLength={maxLength}
            />
        </>
    );
}

export default {
    title: 'Components/Text Counter',
    component: DefaultTextArea
} as Meta<typeof DefaultTextArea>;

const Template: StoryFn<typeof DefaultTextArea> = () => <DefaultTextArea />;

export const Simple = Template.bind({});