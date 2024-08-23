import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Heading } from "../../typography/heading/heading.js";
import Button, { ButtonProps } from "./button.js";

const meta: Meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        controls: {
            expanded: true
        }
    }
};

export default meta;

const Template: StoryFn<ButtonProps> = args => <Button {...args} />;

const colors = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange',
    'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue',
    'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];

export const Default = () => {
    return (
        <div className="w-full p-4">
            <Heading variant="h3">High Emphasis (Default)</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button key={color} color={color}>{color}</Button>
                ))}
            </div>
            <Heading variant="h3">Medium Emphasis</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button key={color} color={color} emphasis="medium">{color}</Button>
                ))}
            </div>
            <Heading variant="h3">Low Emphasis</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button key={color} color={color} emphasis="low">{color}</Button>
                ))}
            </div>
            <Heading variant="h3">Text Only</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button key={color} color={color} emphasis="none">{color}</Button>
                ))}
            </div>
            <Heading variant="h3">Extra Large Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                   <Button key={color} color={color} size="xl">{color}</Button>
                ))}
            </div>
            <Heading variant="h3">Large Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button key={color} color={color} size="lg">{color}</Button>
                ))}
            </div>
            <Heading variant="h3">Medium Button (Default)</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button key={color} color={color}>{color}</Button>
                ))}
            </div>
            <Heading variant="h3">Small Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button key={color} color={color} size="sm">{color}</Button>
                ))}
            </div>
            <Heading variant="h3">Extra Small Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button key={color} color={color} size="xs">{color}</Button>
                ))}
            </div>
            <Heading variant="h3">Full Rounded Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button key={color} color={color} rounded="full">{color}</Button>
                ))}
            </div>
            <Heading variant="h3">Extra Large Rounded Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button key={color} color={color} rounded="xl">{color}</Button>
                ))}
            </div>
            <Heading variant="h3">Large Rounded Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button key={color} color={color} rounded="lg">{color}</Button>
                ))}
            </div>
            <Heading variant="h3">Medium Rounded Button (Default)</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button key={color} color={color}>{color}</Button>
                ))}
            </div>
            <Heading variant="h3">Small Rounded Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button key={color} color={color} rounded="sm">{color}</Button>
                ))}
            </div>
        </div>
    );
};

export const Primary = Template.bind({});