export interface Usuario{
    id?: number;
    username: string;
    password?: string;
    email?: string;
    roles?: string[];
    activo?: boolean;
    creadoEn?: Date;
}