import React, { ComponentProps, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

const MIN_HEIGHT = 62;

export interface TextAreaProps extends ComponentProps<'textarea'> {
    maxLength?: number
}

export function TextArea({ onChange, ...props }: TextAreaProps) {
    const textAreaElement = useRef<HTMLTextAreaElement | null>(null);
    const onChangeValue = (element: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textArea: HTMLTextAreaElement | null = textAreaElement.current;
        if (textArea && textArea.scrollHeight > MIN_HEIGHT) {
            textArea.style.height = `${textArea.scrollHeight + 2}px`;
        }
        if (textArea && element.target.value.length === 0) {
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
                'w-full',
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
                'read-only:resize-none'
            )}
            onChange={onChangeValue}
            style={{ minHeight: `${MIN_HEIGHT}px` }}
            {...props}
        />
    );
}