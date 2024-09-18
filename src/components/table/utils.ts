// import { ETableColumnOrder } from './table';

// const COLLATOR = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

// const orderByAsc = (data: unknown[], key: string[]): unknown[] => {
//     return data.sort((a: any, b: any) => COLLATOR.compare(a[key.toString()], b[key.toString()]));
// };

// const orderByDesc = (data: unknown[], key: string[]): unknown[] => {
//     return data.sort((a: any, b: any) => COLLATOR.compare(a[key.toString()], b[key.toString()])).reverse();
// }

// const sortData = (key: string[], data: any[], order: ETableColumnOrder): unknown[] => {
//     if (order === ETableColumnOrder.Asc) return orderByAsc(data, key);
//     return orderByDesc(data, key);
// };

// const getNestedValues = (key: string[], obj: any): any => {
//     return key.reduce((previous, current) => (previous && previous[current]) ? previous[current] : null, obj);
// };

// export { sortData, getNestedValues };