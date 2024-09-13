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

export default UTCDateToLocalDateString;