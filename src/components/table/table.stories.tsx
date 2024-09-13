import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableProps, TableRow } from './table';

const MyTable = () => {
    return (
        <div className="w-full bg-white p-4 rounded-xl">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>123</TableCell>
                    <TableCell>Carlos Daniel</TableCell>
                    <TableCell>carlossantos_cs@outlook.com</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>123</TableCell>
                    <TableCell>Carlos Daniel</TableCell>
                    <TableCell>carlossantos_cs@outlook.com</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </div>
    );
};

const meta: Meta = {
    title: 'Components/Table',
    component: Table,
    parameters: {
        controls: { expanded: true },
    }
};

export default meta;

const Template: StoryFn<TableProps> = args => <MyTable {...args} />;

export const Default = Template.bind({});