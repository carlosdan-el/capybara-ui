import React, { FC } from 'react';

export interface StatProps {
    title: string
    value: number,
    valueFormatter?: (value: number) => string | React.ReactNode,
    footerContent?: string | React.ReactNode,
    trailingIcon?: React.ReactNode
}

export const Stat: FC<StatProps> = ({
    title,
    value,
    valueFormatter,
    footerContent,
    trailingIcon
}: StatProps) => {
    return (
        <div className="w-full p-4 bg-white rounded-lg border border-gray-200">
            <div className="w-full flex justify-between items-center space-x-4 text-gray-600">
                <h6 className="select-none">{title}</h6>
                {trailingIcon &&
                    <span className="select-none">{trailingIcon}</span>
                }
            </div>
            <div className="w-full flex mt-2">
                <h3 className="text-2xl font-semibold select-none text-gray-800">
                    {valueFormatter ? valueFormatter(value) : value}
                </h3>
            </div>
            {footerContent &&
                <div className="w-full flex mt-1">
                    <h6 className="text-sm">{footerContent}</h6>
                </div>
            }
        </div>
    );
}