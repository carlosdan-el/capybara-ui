import React, { ComponentProps, useMemo } from 'react';

export interface LabelProps extends ComponentProps<'label'> { }

export function Label(props: LabelProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = [
            'block',
            'text-sm',
            'font-medium'
        ];

        return values.join(' ');
    }, [props]);

    return (
        <label {...props} className={classes}>
            {props.children}
        </label>
    );
};