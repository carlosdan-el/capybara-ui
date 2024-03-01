export const useUtils = () => {
    const formatCpfCnpj = (cpfCnpj: string | null): string => {
        if (cpfCnpj === null || cpfCnpj === undefined) return '';
        if (cpfCnpj.length === 11) return cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        if (cpfCnpj.length === 14) return cpfCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        return cpfCnpj;
    };
    const UTCDateToLocalDateString = (
        dateString: string | null | undefined,
        offsetTimeZone = 3
    ): string => {
        if (dateString === null || dateString === undefined) return '';

        const date = new Date(dateString.replace(/([A-Z])/g, ' ').trim());

        date.setHours(date.getHours() - offsetTimeZone);

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year} ${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    const dateToInputDateString = (date: Date): string => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    };

    return {
        formatCpfCnpj,
        UTCDateToLocalDateString,
        dateToInputDateString
    };
}