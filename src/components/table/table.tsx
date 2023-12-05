import React, { FC, useState } from 'react';
import { usePagination } from '../../hooks/use-pagination';
import { getNestedValues, sortData } from './utils';
import { LuSearch, LuDownload, LuMoreVertical, LuChevronDown, LuChevronUp } from 'react-icons/lu';
import { Menu } from '@headlessui/react';

export interface TableProps {
    columns: Array<TableColumn>
    data: Array<any>
    isLoading: boolean
    emptyDataText?: string
    rowsPerPage?: number
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
}: TableProps) => {
    const {
        pages,
        currentPage,
        handlePreviousPage,
        handleNextPage,
        handlePageChange,
        startIndex,
        endIndex
    } = usePagination(data.length, rowsPerPage);
    const [tableData, setTableData] = useState(data.slice(startIndex, endIndex));
    const [tableColumns, setTableColumns] = useState(columns);
    const emptyText = emptyDataText ? emptyDataText : 'Não existem dados para exibição';
    const handleSortData = (column: TableColumn) => {
        if (column.sortable) {
            const { columns: sortedColumn, data: sortedData } = sortData(column.key, tableColumns, tableData);
            setTableColumns(sortedColumn);
            setTableData(sortedData);
        }
        return undefined;
    };

    return (
        <div className="w-full">
            <div className="w-full flex space-x-4 justify-end mb-4">
                <div className="w-full flex space-x-4">
                    <div className="relative flex-1">
                        <LuSearch className="absolute top-2.5 left-2 text-gray-300" size={20} />
                        <input type="text" id="default-input" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2.5 pl-8 pr-4" />
                    </div>
                    <div className="flex flex-nowrap items-center space-x-2 text-sm">
                        <span>Exibindo</span>
                        <select className="bg-green-50 border border-gray-300 text-green-700 font-medium text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5">
                            <option title="10 itens por página">10</option>
                            <option title="50 itens por página">50</option>
                            <option title="75 itens por página">75</option>
                            <option title="100 itens por página">100</option>
                        </select>
                        <span>de {tableData.length} resultados</span>
                    </div>
                    <Menu>
                        <Menu.Button className="px-2 -py-1 text-sm font-medium text-center flex items-center rounded-lg border border-transparent hover:border-gray-200">
                            <LuMoreVertical />
                        </Menu.Button>
                        <Menu.Items className="flex flex-col absolute right-0 top-12 bg-white shadow-md border rounded-xl p-4">
                            <Menu.Item>
                                <button onClick={() => { }} type="button" className="px-3 py-2 text-sm font-medium text-center flex items-center">
                                    <LuDownload className="mr-2" /> Download
                                </button>
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
            <div className="w-full overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-green-700 capitalize bg-green-50 whitespace-nowrap">
                        <tr>
                            {tableColumns.map((column, index) => {
                                if (column.visible !== false) {
                                    return (
                                        <th key={index} scope="col" className="py-3 px-6 whitespace-nowrap" onClick={() => handleSortData(column)}>
                                            <div className="flex items-center justify-between">
                                                <span>{column.name}</span>
                                                {column.sortable &&
                                                    <div className="flex flex-col items-center justify-around">
                                                        <LuChevronUp
                                                            size={16}
                                                            className={`${column?.sortableOrder === 'asc' ? 'text-green-700' : 'text-gray-300'}`}
                                                        />
                                                        <LuChevronDown
                                                            size={16}
                                                            className={`-mt-2 ${column?.sortableOrder === 'desc' ? 'text-green-700' : 'text-gray-300'}`}
                                                        />
                                                    </div>
                                                }
                                            </div>
                                        </th>
                                    );
                                }
                                return null;
                            })}
                        </tr>
                    </thead>
                    <tbody className="overflow-y-auto">
                        {!isLoading &&
                            tableData.map((item: any, rowIndex: number) => {
                                return (
                                    <tr key={rowIndex} className="hover:bg-green-50 [&:not(:last-child)]:border-b">
                                        {
                                            tableColumns.map((column, colIndex) => {
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