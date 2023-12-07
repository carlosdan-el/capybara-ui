import { TableColumn } from 'components/table/table';
import { sortData } from 'components/table/utils';
import { useState, useMemo } from 'react';

const MAX_BUTTONS_PER_VIEW = 7;

export const usePagination = (columns: TableColumn[], data: any[], rowsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPages = useMemo(() => {
        const totalPages = Math.ceil(data.length / rowsPerPage);
        if (totalPages < currentPage) setCurrentPage(totalPages);
        return totalPages;
    }, [data, rowsPerPage]);
    const pages = useMemo(() => {
        if (data.length > 0) {
            if (maxPages <= 1) return [];
            if (maxPages <= 5) return Array.from({ length: maxPages }).map((_, i) => i + 1);
            if (currentPage < 5) return Array.from({ length: MAX_BUTTONS_PER_VIEW }).map((_, i) => {
                switch (i) {
                    case 0:
                        return 1;
                    case 1:
                        return 2;
                    case 2:
                        return 3;
                    case 3:
                        return 4;
                    case 4:
                        return 5;
                    case 5:
                        return '...';
                    default:
                        return maxPages;
                }
            });
            if (currentPage > (maxPages - 4)) return Array.from({ length: MAX_BUTTONS_PER_VIEW }).map((_, i) => {
                switch (i) {
                    case 0:
                        return 1;
                    case 1:
                        return '...';
                    case 2:
                        return maxPages - 4;
                    case 3:
                        return maxPages - 3;
                    case 4:
                        return maxPages - 2;
                    case 5:
                        return maxPages - 1;
                    default:
                        return maxPages;
                }
            });
            if (currentPage >= 5 && currentPage <= (maxPages - 4)) return Array.from({ length: MAX_BUTTONS_PER_VIEW }).map((_, i) => {
                switch (i) {
                    case 0:
                        return 1;
                    case 1:
                        return '...';
                    case 2:
                        return currentPage - 1;
                    case 3:
                        return currentPage;
                    case 4:
                        return currentPage + 1;
                    case 5:
                        return '...';
                    default:
                        return maxPages;
                }
            });
        }
        return [];
    }, [data, currentPage, rowsPerPage]);
    const { startIndex, endIndex }: any = useMemo(() => {
        if (data.length > 0) {
            const startIndex = (currentPage - 1) * rowsPerPage;
            const endIndex = startIndex + rowsPerPage;
            return { startIndex, endIndex };
        }
        return [];
    }, [data, currentPage, rowsPerPage]);
    const [tableColumns, setTableColumns] = useState(columns);
    const [tableData, setTableData] = useState(data.slice(startIndex, endIndex));
    const handlePreviousPage = (): void => {
        if (currentPage > 1) setCurrentPage(current => current - 1);
    };
    const handleNextPage = (): void => {
        if (currentPage < maxPages) setCurrentPage(current => current + 1);
    };
    const handlePageChange = (page: number): void => {
        if (page >= 1 && page <= maxPages) setCurrentPage(page);
    };
    const handleSortData = (column: TableColumn) => {
        if (column.sortable) {
            const { columns: sortedColumn, data: sortedData } = sortData(column.key, tableColumns, data);
            setTableColumns(sortedColumn);
            setTableData(sortedData.slice(startIndex, endIndex));
        }
        return undefined;
    };
    return {
        maxPages,
        currentPage,
        tableColumns,
        tableData,
        pages,
        handlePreviousPage,
        handleNextPage,
        handlePageChange,
        handleSortData
    };
};