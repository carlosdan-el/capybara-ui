import React, { FC } from 'react';
import { Spinner } from '../spinner/spinner';

export interface StatProps {
    title: string
    value: number,
    valueFormatter?: (value: number) => string | React.ReactNode,
    footerContent?: string | React.ReactNode,
    trailingIcon?: React.ReactNode
    isLoading?: boolean
    error?: boolean
}

const StatShimmer = ({ title }: { title: string }) => {
    return (
        <div className="w-full flex flex-col p-4 bg-white rounded-lg border border-gray-200 select-none">
            <div className="w-full flex justify-between items-center space-x-4 text-gray-600">
                <h6 className="text-base font-medium">{title}</h6>
                <Spinner size="sm"/>
            </div>
            <div className="w-full flex mt-2 animate-pulse">
                <div className="bg-gray-100 rounded-lg w-40 h-9"></div>
            </div>
            <div className="w-full flex mt-1 animate-pulse">
            <div className="bg-gray-100 rounded-md w-64 h-4"></div>
            </div>
        </div>
    );
};

export const Stat: FC<StatProps> = ({
    title,
    value = 0,
    valueFormatter,
    footerContent,
    trailingIcon,
    isLoading = false,
    error = false
}: StatProps) => {
    if (error) return (
        <div className="w-full flex flex-col p-4 bg-white rounded-lg border border-gray-200 select-none">
            <div className="w-full flex justify-between items-center space-x-4 text-gray-600">
                <h6 className="text-base font-medium">{title}</h6>
                {trailingIcon &&
                    <span>{trailingIcon}</span>
                }
            </div>
            <div className="w-full mt-2">
                <h3 className="text-sm font-medium text-gray-500 text-center">
                    Ocorreu um erro ao tentar carregar informações
                </h3>
            </div>
        </div>
    );

    if (isLoading) return <StatShimmer title={title}/>;

    return (
        <div className="w-full flex flex-col p-4 bg-white rounded-lg border border-gray-200 select-none">
            <div className="w-full flex justify-between items-center space-x-4 text-gray-600">
                <h6 className="text-base font-medium">{title}</h6>
                {trailingIcon &&
                    <span>{trailingIcon}</span>
                }
            </div>
            <div className="w-full flex mt-2">
                <h3 className="text-3xl font-semibold text-gray-800">
                    {valueFormatter ? valueFormatter(value) : value}
                </h3>
            </div>
            {footerContent &&
                <div className="w-full flex mt-1">
                    <h6 className="text-xs font-medium text-gray-400">{footerContent}</h6>
                </div>
            }
        </div>
    );
}