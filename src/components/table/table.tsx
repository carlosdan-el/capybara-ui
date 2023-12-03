import React, { FC } from 'react';
import { usePagination } from '../../hooks/use-pagination';
import { getNestedValues } from './utils';
import { LuDownload, LuMoreVertical } from 'react-icons/lu';

export interface TableProps {
    columns: Array<TableColumn>
    data: Array<any>
    isLoading: boolean
    emptyDataText?: string
    rowsPerPage: number
    enableExport?: boolean
}

export enum ETableColumnOrder {
    Asc = 'asc',
    Desc = 'desc'
}

export interface TableColumn {
    exportFormatter?: (value: any) => any
    visible?: boolean
    name: string
    key: string[]
    sortable?: boolean
    sortableOrder?: ETableColumnOrder
    formatter?: (value: any) => unknown
}

const getValue = (column: TableColumn, item: any): string | null => {
    if (column.formatter) return column.formatter(item) as string;
    return getNestedValues(column.key, item) as string;
}

export const Table: FC<TableProps> = ({
    isLoading,
    columns,
    data,
    emptyDataText,
    rowsPerPage = 10,
    enableExport = false
}: TableProps) => {
    const {
        pages,
        currentData,
        currentPage,
        handlePreviousPage,
        handleNextPage,
        handlePageChange
    } = usePagination(data, rowsPerPage);
    const emptyText = emptyDataText ? emptyDataText : 'Não existem dados para exibição';

    return (
        <div className="w-full">
            <div className="w-full flex space-x-4 justify-end mb-4">
                {enableExport &&
                    <button onClick={() => { }} type="button" className="px-3 py-2 text-sm font-medium text-center flex items-center text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-green-300">
                        <LuDownload className="mr-2" /> Download
                    </button>
                }
                <button className="px-3 py-2 text-sm font-medium text-center flex items-center rounded-lg border border-gray-200 cursor-not-allowed">
                    <LuMoreVertical />
                </button>
            </div>
            <div className="w-full overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-green-700 uppercase bg-green-50 whitespace-nowrap">
                        <tr>
                            {columns.map((column, index) => {
                                if (column.visible !== false) {
                                    return (
                                        <th key={index} scope="col" className="py-3 px-6 whitespace-nowrap">
                                            {column.name}
                                        </th>
                                    );
                                }
                                return null;
                            })}
                        </tr>
                    </thead>
                    <tbody className="overflow-y-auto">
                        {!isLoading &&
                            currentData.map((item: any, rowIndex: number) => {
                                return (
                                    <tr key={rowIndex} className="hover:bg-green-50 [&:not(:last-child)]:border-b">
                                        {
                                            columns.map((column, colIndex) => {
                                                if (column.visible !== false) {
                                                    if (colIndex === 0) {
                                                        return (
                                                            <td
                                                                scope="row"
                                                                key={colIndex}
                                                                className={`${getValue(column, item) ? 'py-4 px-6 whitespace-nowrap hover:bg-green-100' : 'py-4 px-6 whitespace-nowrap hover:bg-green-100 before:content-["(vazio)"]'}`}
                                                            >
                                                                <span>
                                                                    {getValue(column, item)}
                                                                </span>
                                                            </td>
                                                        );
                                                    }
                                                    return (
                                                        <td
                                                            key={colIndex}
                                                            className={`${getValue(column, item) ? 'py-4 px-6 whitespace-nowrap hover:bg-green-100' : 'py-4 px-6 whitespace-nowrap hover:bg-green-100 before:content-["(vazio)"]'}`}
                                                        >
                                                            <span>
                                                                {getValue(column, item)}
                                                            </span>
                                                        </td>
                                                    );
                                                }
                                                return null;
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {isLoading &&
                    <div className="w-full flex justify-center mt-4 text-sm">
                        <p className="text-gray-500">Carregando...</p>
                    </div>
                }
                {(!isLoading && data.length <= 0) &&
                    <div className="w-full flex justify-center mt-4 text-sm">
                        <p className="text-gray-500">{emptyText}</p>
                    </div>
                }
            </div>
            {(!isLoading && data.length > rowsPerPage) &&
                <nav className="w-full flex justify-end mt-6">
                    <ul className="inline-flex -space-x-px">
                        <li>
                            <a onClick={handlePreviousPage} className="select-none px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer">Anterior</a>
                        </li>
                        {pages.map((page, index) => (
                            <li key={index}>
                                <a
                                    onClick={typeof page === 'number' ? () => handlePageChange(page) : undefined}
                                    className={page === currentPage ? 'px-3 py-2 text-green-600 border border-gray-300 bg-green-50 hover:bg-green-100 hover:text-green-700 cursor-pointer select-none' : 'px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer select-none'}
                                >
                                    {page}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a onClick={handleNextPage} className="select-none px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer">Próximo</a>
                        </li>
                    </ul>
                </nav>
            }
        </div>
    );
};