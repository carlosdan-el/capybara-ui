import React, { ComponentProps, FC, useMemo } from 'react';

export interface LabelProps extends ComponentProps<'label'> { }

export const Label: FC<LabelProps> = (props) => {
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
};