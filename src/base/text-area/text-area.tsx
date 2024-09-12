import React, { ComponentProps, useMemo, useRef } from "react";

const MIN_HEIGHT = 62;

export interface TextAreaProps extends ComponentProps<'textarea'> {
    maxLength?: number
}

export default function TextArea({ onChange, ...props }: TextAreaProps) {
    const textAreaElement = useRef<HTMLTextAreaElement | null>(null);
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = [
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
            'disabled:text-zinc-500',
            'disabled:resize-none',
            'disabled:overflow-hidden',
            'disabled:pointer-events-none'
        ];

        return values.join(' ');
    }, []);
    const onChangeValue = (element: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textArea: HTMLTextAreaElement = textAreaElement.current!;
        if (textArea && textArea.scrollHeight > MIN_HEIGHT) {
            textArea.style.height = `${textArea.scrollHeight + 2}px`;
        }
        if (textArea && element.target.value.length === 0) {
            textArea.style.height = `${MIN_HEIGHT + 2}px`;
        }
        if (onChange) onChange(element);
    };

    return (
        <textarea
            ref={textAreaElement}
            className={classes}
            onChange={onChangeValue}
            style={{ minHeight: `${MIN_HEIGHT}px` }}
            {...props}
        />
    );
}