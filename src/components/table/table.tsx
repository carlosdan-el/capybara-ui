import React, { ComponentProps } from "react";
import { cn } from "../../lib/utils";

export interface TableProps extends ComponentProps<'table'> { }

export function Table({
    children,
    ...props
}: TableProps) {
    return (
        <div className="w-full overflow-x-auto my-4">
            <table {...props} className={cn(
                'w-full',
                'text-sm',
                'text-left',
                'text-zinc-600',
                'mt-8',
                props.className
            )}>
                {children}
            </table>
        </div>
    );
}

export interface TableBodyProps extends ComponentProps<'tbody'> { }

export function TableBody({ children, ...props }: TableBodyProps) {
    return (
        <tbody {...props} className={cn(
            'overflow-y-auto',
            props.className
        )}>
            {children}
        </tbody>
    );
}

export interface TableCellProps extends ComponentProps<'td'> { }

export function TableCell({ children, ...props }: TableCellProps) {
    return (
        <td {...props} className={cn(
            'py-4',
            'px-6',
            'whitespace-nowrap',
            'text-zinc-900',
            'relative',
            props.className
        )}>
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
    return (
        <th {...props} className={cn(
            'py-3',
            'px-6',
            'whitespace-nowrap',
            'font-normal',
            'first:rounded-s-lg',
            'last:rounded-e-lg',
            'relative',
            props.className
        )}>
            {children}
        </th>
    );
}

export interface TableHeaderProps extends ComponentProps<'thead'> { }

export function TableHeader({ children, ...props }: TableHeaderProps) {
    return (
        <thead {...props} className={cn(
            'text-zinc-500',
            'uppercase',
            'bg-zinc-100',
            'whitespace-nowrap',
            'text-xs',
            props.className
        )}>
            {children}
        </thead>
    );
}

export interface TableRowProps extends ComponentProps<'tr'> { }

export function TableRow({ children, ...props }: TableRowProps) {
    return (
        <tr {...props} className={cn(
            '[&:not(:last-child)]:border-b',
            props.className
        )}>
            {children}
        </tr>
    );
}