import React, { ComponentProps, useMemo } from "react";

export interface CheckboxProps extends ComponentProps<'input'> {
    label: string
    hidden?: boolean
    rounded?: boolean
}

export function Checkbox({
    id,
    label,
    hidden = false,
    rounded = false,
    ...props
}: CheckboxProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const defaultValues = [
            'w-40',
            'h-40',
            'bg-gray-100',
            'border-gray-300',
            'dark:ring-offset-gray-800',
            'focus:ring-2',
            'dark:bg-gray-700',
            'dark:border-gray-600'
        ];

        defaultValues.push(rounded ? 'rounded-full' : 'rounded');
        
        if(props.disabled) defaultValues.push('opacity-50');
        
        if(hidden) defaultValues.push('hidden');

        return defaultValues.join(' ');
    }, [props, rounded, hidden]);

    return (
        <div className="flex items-center">
            <input
                id={id}
                type="checkbox"
                className={classes}
                {...props}
            />
            <label htmlFor={id} className={`ms-2 text-sm font-medium ${hidden ? 'hidden' : ''} ${props.disabled ? 'opacity-50' : ''}`}>
                {label}
            </label>
        </div>
    );
}