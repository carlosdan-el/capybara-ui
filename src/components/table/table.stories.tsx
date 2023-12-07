import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Table, TableProps } from './table';

const COLUMNS = [
    { key: ['id'], name: '#' },
    { key: ['product_name'], name: 'Product Name' },
    { key: ['color'], name: 'Color' },
    { key: ['category'], name: 'Category' },
    {
        key: ['price'], name: 'Price', formatter: (row: any) => Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        }).format(row.price),
        sortable: true
    }
];
const DATA = [
    {
        id: 1,
        product_name: 'Apple MacBook Pro 17"',
        color: 'Silver',
        category: 'Laptop',
        price: 2999
    },
    {
        id: 2,
        product_name: 'Microsoft Surface Pro',
        color: 'White',
        category: 'Laptop PC',
        price: 1999
    },
    {
        id: 3,
        product_name: 'Magic Mouse 2',
        color: 'Black',
        category: 'Accessories',
        price: 99
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
    data: DATA
};

export const WithExportOption = Template.bind({});

WithExportOption.args = {
    columns: COLUMNS,
    data: DATA,
};