export const FormatCNPJ = (cnpj: string): string => cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')

export const FormatCellPhone = (cellPhone: string): string => cellPhone.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')

export const FormatPhone = (phone: string): string => phone.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
