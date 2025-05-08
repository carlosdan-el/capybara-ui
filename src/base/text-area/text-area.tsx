import React, { ComponentProps, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

type inputSizes = 'xs' | 'sm' | 'md' | 'lg';

const MIN_HEIGHT = 62;

const sizeClasses: { [key: string]: string } = {
    xs: 'p-1.5',
    sm: 'p-2',
    md: 'p-2.5',
    lg: 'p-3'
};

export interface TextAreaProps extends ComponentProps<'textarea'> {
    size: inputSizes
    maxLength?: number
}

export function TextArea({
    size = 'md',
    onChange,
    className,
    ...props
}: TextAreaProps) {
    const textAreaElement = useRef<HTMLTextAreaElement | null>(null);
    const onChangeValue = (element: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textArea: HTMLTextAreaElement | null = textAreaElement.current;

        if (textArea && textArea.scrollHeight > textArea?.clientHeight) {
            textArea.style.height = `${textArea.scrollHeight + 2}px`;
        }
        else if (textArea && element.target.value.length === 0) {
            textArea.style.height = `${MIN_HEIGHT + 2}px`;
        }

        if (onChange) onChange(element);
    };

    useEffect(() => {
        const textArea: HTMLTextAreaElement | null = textAreaElement.current;
        if (textArea && textArea.scrollHeight > MIN_HEIGHT) {
            textArea.style.height = `${textArea.scrollHeight + 2}px`;
        }
    }, []);

    return (
        <textarea
            ref={textAreaElement}
            className={cn(
                'border',
                'text-sm',
                'rounded-xl',
                'block',
                'bg-gray-50',
                'border-gray-300',
                'hover:border-blue-500',
                'focus:bg-gray-50',
                'focus:ring-blue-500',
                'focus:border-blue-500',
                'outline-blue-500',
                'disabled:bg-gray-100',
                'disabled:border-transparent',
                'disabled:resize-none',
                'read-only:resize-none',
                sizeClasses[size],
                className
            )}
            onChange={onChangeValue}
            style={{ minHeight: `${MIN_HEIGHT}px` }}
            {...props}
        />
    );
}