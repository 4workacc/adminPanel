export interface IUser{
    id: number;
    fio: string;
    code0?: number;
    code1?: string;
    employement?: string;
    struct?: string;
    post?: string;
    unit?: string;
    domain_name?: string;
    status?: string;
    old_fam?: string;
    reason_of_code?: string;
}
export interface IKey {
    id: number;
    key_id: string;
    user_id: number;
    key_sn: string;
    start_cert: string;
    end_cert: string;
    active: boolean;
    status: string;
    info: string;
    cert_id: string;
    doc_employement: string;
    doc_fam: string;
}