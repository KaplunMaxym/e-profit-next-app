interface IResponse__emailData {
    success: boolean;
    code: number;
    token: string;
    category_id: number;
}
export interface IResponse__email{
    email: IResponse__emailData;
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