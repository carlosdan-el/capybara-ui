import React, { ComponentProps, useMemo } from 'react';

interface LabelProps extends ComponentProps<'label'> { }

export default function Label(props: LabelProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const defaultClasses = [
            'block',
            'text-sm',
            'font-medium'
        ];

        return defaultClasses.join(' ');
    }, [props]);

    return (
        <label {...props} className={classes}>
            {props.children}
        </label>
    );
}