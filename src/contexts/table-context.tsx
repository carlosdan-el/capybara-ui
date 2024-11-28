'use client';

import React, { createContext, useState } from "react";

type TableContext = {
    currentPage: number
    setCurrentPage: (page: number) => void
    rowsPerPage: number
};

export const TableContext = createContext({} as TableContext);

export function TableProvider({ children }: any) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);

    return (
        <TableContext.Provider value={{ currentPage, rowsPerPage, setCurrentPage }}>
            <>
                {children}
            </>
        </TableContext.Provider>
    );
}