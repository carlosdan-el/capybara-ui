import { ETableColumnOrder, TableColumn } from './table';

const orderByAsc = (data: unknown[], key: string[]): unknown[] => {
    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
    return data.sort((a: any, b: any) => collator.compare(a[key.toString()], b[key.toString()]));
};

const orderByDesc = (data: unknown[]): unknown[] => data.reverse();

const sortData = (key: string[], columns: TableColumn[], data: unknown[]) => {
    const column = columns.find(x => x.key.toString() === key.toString());
    if (column) {
        const order = column.sortableOrder === ETableColumnOrder.Asc ? ETableColumnOrder.Desc : ETableColumnOrder.Asc;
        let sortedArray: unknown[] = [];
        if (order === ETableColumnOrder.Asc) sortedArray = orderByAsc(data, key);
        if (order === ETableColumnOrder.Desc) sortedArray = orderByDesc(data);
        const sortedColumns = (columns.map(col => {
            if (col.key.toString() === key.toString()) col.sortableOrder = order;
            if (col.key.toString() !== key.toString()) col.sortableOrder = undefined;
            return col;
        }));
        return { columns: sortedColumns, data: sortedArray };
    }
    return { columns, data };
};

const getNestedValues = (key: string[], obj: any) => {
    return key.reduce((previous, current) => (previous && previous[current]) ? previous[current] : null, obj);
};

export { sortData, getNestedValues };