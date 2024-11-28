import React, { ComponentProps, useMemo } from "react";
import { cn } from "../../lib/utils";

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
    className,
    ...props
}: CheckboxProps) {
    return (
        <div className="flex items-center">
            <input
                id={id}
                type="checkbox"
                className={cn(
                    'w-4',
                    'h-4',
                    'bg-gray-100',
                    'border-gray-300',
                    'dark:ring-offset-gray-800',
                    'focus:ring-2',
                    'dark:bg-gray-700',
                    'dark:border-gray-600',
                    { 'rounded-xl': !rounded },
                    { 'rounded-full': rounded },
                    'disabled:opacity-50',
                    { 'hidden': hidden },
                    className
                )}
                {...props}
            />
            <label
                htmlFor={id}
                className={cn(
                    'ms-2',
                    'text-sm',
                    'font-medium',
                    { 'hidden': hidden },
                    'disabled:opacity-50'
                )}
            >
                {label}
            </label>
        </div>
    );
}