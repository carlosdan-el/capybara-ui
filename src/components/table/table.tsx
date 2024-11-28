import React, { ComponentProps, useMemo } from "react";

export interface TableProps extends ComponentProps<'table'> { }

export function Table({
    children,
    ...props
}: TableProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = [
            'w-full',
            'text-sm',
            'text-left',
            'text-zinc-600'
        ];

        return values.join(' ');
    }, []);

    return (
        <div className="w-full overflow-x-auto">
            <table {...props} className={classes}>
                {children}
            </table>
        </div>
    );
}

export interface TableBodyProps extends ComponentProps<'tbody'> { }

export function TableBody({ children, ...props }: TableBodyProps) {
    return (
        <tbody {...props}>
            {children}
        </tbody>
    );
}

export interface TableCellProps extends ComponentProps<'td'> { }

export function TableCell({ children, ...props }: TableCellProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = [
            'py-4',
            'px-6',
            'whitespace-nowrap',
            'text-zinc-900'
        ];

        return values.join(' ');
    }, [props]);

    return (
        <td {...props} className={classes}>
            {children}
        </td>
    );
}

export interface TableFooterProps extends ComponentProps<'tfoot'> { }

export function TableFooter({ children, ...props }: TableFooterProps) {
    return (
        <tfoot {...props}>
            {children}
        </tfoot>
    );
}

export interface TableHeadProps extends ComponentProps<'th'> { }

export function TableHead({ children, ...props }: TableHeadProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = [
            'py-3',
            'px-6',
            'whitespace-nowrap',
            'font-normal',
            'first:rounded-s-lg',
            'last:rounded-e-lg'
        ];

        return values.join(' ');
    }, [props]);

    return (
        <th {...props} className={classes}>
            {children}
        </th>
    );
}

export interface TableHeaderProps extends ComponentProps<'thead'> { }

export function TableHeader({ children, ...props }: TableHeaderProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = [
            'text-zinc-500',
            'uppercase',
            'bg-zinc-100',
            'whitespace-nowrap'
        ];

        return values.join(' ');
    }, [props]);
    return (
        <thead {...props} className={classes}>
            {children}
        </thead>
    );
}

export interface TableRowProps extends ComponentProps<'tr'> { }

export function TableRow({ children, ...props }: TableRowProps) {
    const classes = useMemo(() => {
        if (props.className) return props.className;

        const values = ['[&:not(:last-child)]:border-b'];

        return values.join(' ');
    }, [props]);

    return (
        <tr {...props} className={classes}>
            {children}
        </tr>
    );
}