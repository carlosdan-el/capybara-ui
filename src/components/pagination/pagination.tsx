import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useContext, useEffect, useMemo } from "react";
import { TableContext } from "../../contexts";
import { Button } from "../../base";

const MAX_BUTTONS_PER_VIEW = 7;

interface PaginationProps {
    contentLength: number
}

export function Pagination({ contentLength }: PaginationProps) {
    const { rowsPerPage, currentPage, setCurrentPage } = useContext(TableContext);
    const maxPages = useMemo(() => {
        const totalPages = Math.ceil(contentLength / rowsPerPage);
        return totalPages;
    }, [contentLength, rowsPerPage]);
    const pagination = useMemo(() => {
        if (contentLength > 0) {
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
    }, [contentLength, currentPage, rowsPerPage]);

    function onHandlePreviousPage(): void {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    function onHandleNextPage(): void {
        if (currentPage < maxPages) setCurrentPage(currentPage + 1);
    };
    function onHandlePageChange(page: number): void {
        if (page >= 1 && page <= maxPages) setCurrentPage(page);
    };

    useEffect(() => setCurrentPage(1), [maxPages]);

    if (contentLength > rowsPerPage) {
        return (
            <nav className="w-full flex justify-between items-center mt-6">
                {/* <div className="flex items-center space-x-4 justify-between">
                    <div className="flex flex-nowrap items-center space-x-2 text-xs text-zinc-500">
                        <span className="whitespace-nowrap">Exibindo</span>
                        <select className="bg-green-50 border border-green-300 font-medium text-xs rounded-lg focus:ring-green-500 focus:border-green-500 block p-2 outline-none">
                            <option value={10} title="10 itens por página">10</option>
                            <option value={50} title="50 itens por página">50</option>
                            <option value={75} title="75 itens por página">75</option>
                            <option value={100} title="100 itens por página">100</option>
                        </select>
                        <span className="whitespace-nowrap">de {new Intl.NumberFormat('pt-BR').format(contentLength)} resultados</span>
                    </div>
                </div> */}
                <div className="w-full flex space-x-2 justify-end items-center">
                    <Button
                        color="green"
                        emphasis="low"
                        size="xs"
                        onClick={onHandlePreviousPage}
                    >
                        <ChevronLeftIcon size={14} className="mr-1" />
                        Anterior
                    </Button>
                    <div className="flex items-center space-x-2">
                        {pagination.map((page: number | string, index: number) => (
                            <Button
                                key={index}
                                size="xs"
                                color={page === currentPage ? 'green' : 'gray'}
                                emphasis="low"
                                onClick={typeof page === 'number' ? () => onHandlePageChange(page) : undefined}
                            >
                                {page.toString()}
                            </Button>
                        ))}
                    </div>
                    <Button
                        color="green"
                        emphasis="low"
                        size="xs"
                        onClick={onHandleNextPage}
                    >
                        Próximo
                        <ChevronRightIcon size={14} className="ml-1" />
                    </Button>
                </div>
            </nav>
        );
    }

    return <></>;
}