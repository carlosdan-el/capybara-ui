import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Table, TableProps } from './table';
import { PRODUCTS_MOCK } from '../../mocks';

// variant

const COLUMNS = [
    { key: ['id'], name: '#' },
    { key: ['title'], name: 'Product Name', sortable: true },
    { key: ['stock'], name: 'Stock Quantity' },
    { key: ['brand'], name: 'Brand' },
    { key: ['category'], name: 'Category' },
    {
        key: ['price'], name: 'Price',
        formatter: (row: any) => Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        }).format(row.price),
        sortable: true
    }
];

const meta: Meta = {
    title: 'Table',
    component: Table,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

const Template: StoryFn<TableProps> = args => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
    columns: COLUMNS,
    data: PRODUCTS_MOCK
};

export const WithSearchOption = Template.bind({});

WithSearchOption.args = {
    columns: COLUMNS,
    data: PRODUCTS_MOCK,
    searchable: true
};
