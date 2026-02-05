export type ClientForm = {
    email: string;
    name: string;
    surname: string;
    numberPhone: string;
    identify: string;
}

export type ResponseFormClientApi = {
    ok: boolean;
    message: string;
}