import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "./button";
import { LuStar } from "react-icons/lu";
import { Heading } from "../heading/heading";

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
                    <Button
                        emphasis="high"
                        key={color}
                        label={color}
                        color={color}
                    />
                ))}
            </div>
            <Heading variant="h3">Medium Emphasis</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button
                        emphasis="medium"
                        key={color}
                        label={color}
                    />
                ))}
            </div>
            <Heading variant="h3">Low Emphasis</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button
                        emphasis="low"
                        key={color}
                        color={color}
                        label={color}
                    />
                ))}
            </div>
            <Heading variant="h3">Text Only</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button
                        emphasis="none"
                        key={color}
                        color={color}
                        label={color}
                    />
                ))}
            </div>
            <Heading variant="h3">Extra Large Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button
                        emphasis="high"
                        size="xl"
                        key={color}
                        color={color}
                        label={color}
                    />
                ))}
            </div>
            <Heading variant="h3">Large Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button
                        emphasis="high"
                        size="lg"
                        key={color}
                        color={color}
                        label={color}
                    />
                ))}
            </div>
            <Heading variant="h3">Medium Button (Default)</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button
                        emphasis="high"
                        size="md"
                        key={color}
                        color={color}
                        label={color}
                    />
                ))}
            </div>
            <Heading variant="h3">Small Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button
                        emphasis="high"
                        size="sm"
                        key={color}
                        color={color}
                        label={color}
                    />
                ))}
            </div>
            <Heading variant="h3">Extra Small Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button
                        emphasis="high"
                        size="xs"
                        key={color}
                        color={color}
                        label={color}
                    />
                ))}
            </div>
            <Heading variant="h3">Full Rounded Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button
                        rounded="full"
                        key={color}
                        color={color}
                        label={color}
                    />
                ))}
            </div>
            <Heading variant="h3">Extra Large Rounded Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button
                        rounded="xl"
                        key={color}
                        color={color}
                        label={color}
                    />
                ))}
            </div>
            <Heading variant="h3">Large Rounded Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button
                        rounded="lg"
                        key={color}
                        color={color}
                        label={color}
                    />
                ))}
            </div>
            <Heading variant="h3">Medium Rounded Button (Default)</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button
                        rounded="md"
                        key={color}
                        color={color}
                        label={color}
                    />
                ))}
            </div>
            <Heading variant="h3">Small Rounded Button</Heading>
            <div className="w-full grid grid-cols-12 gap-4 my-4">
                {colors.map((color: any) => (
                    <Button
                        rounded="sm"
                        key={color}
                        color={color}
                        label={color}
                    />
                ))}
            </div>
        </div>
    );
};

export const Primary = Template.bind({});

Primary.args = {
    label: 'Primary Button'
};

export const Secondary = Template.bind({});

Secondary.args = {
    emphasis: 'medium',
    label: 'Secondary Button'
};

export const Tertiary = Template.bind({});

Tertiary.args = {
    emphasis: 'low',
    label: 'Tertiary Button'
};

export const Outlined = Template.bind({});

Outlined.args = {
    label: 'Outlined Button'
};

export const Text = Template.bind({});

Text.args = {
    label: 'Text Button'
};

export const WithLeadingIcon = Template.bind({});

WithLeadingIcon.args = {
    leadingIcon: <LuStar size={16} />,
    label: 'Favorites'
};

export const OnlyIcon = Template.bind({});

OnlyIcon.args = {
    leadingIcon: <LuStar size={16} />,
    rounded: 'full'
};