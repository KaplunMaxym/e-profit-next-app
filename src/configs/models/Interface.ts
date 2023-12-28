export interface IResponse__email {
    success: boolean;
    code: number;
    token: string;
    category_id: number;
}

export interface Interface {
    email: IResponse__email;
}

export interface ICredentialsVerify {
    email: string;
    verification_code: string;
}
export interface ICredentialsAuth {
    email: string;
    password: string;
}
export interface ICredentials {
    email: string;
    verification_code: string;
    password: string;
}