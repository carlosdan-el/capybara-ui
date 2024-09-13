const formatCpfCnpj = (cpfCnpj: string | null): string => {
    if (!cpfCnpj) return '';
    if (cpfCnpj.length === 11) return cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    if (cpfCnpj.length === 14) return cpfCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    return cpfCnpj;
};

export default formatCpfCnpj;