import { Meta, StoryFn } from '@storybook/react';
import { Stat } from './stat';
import React from 'react';
import { TrendingUpDownIcon } from 'lucide-react';

const meta: Meta = {
    title: 'Charts/Stat',
    component: Stat,
    parameters: {
        controls: { expanded: true }
    },
};

export default meta;

const Template: StoryFn<typeof Stat> = args => <Stat {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: 'SLA (mês)',
    value: 74.15,
    valueFormatter: (value: number) => value.toFixed(0) + '%',
    trailingIcon: <TrendingUpDownIcon />,
    footerContent: <div><span className="text-red-600 font-semibold">9%</span> para atingir a meta</div>,
    isLoading: false,
    error: false
};