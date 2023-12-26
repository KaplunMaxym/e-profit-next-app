export interface IReg {
    category_id: string
    email: string;
    password: string;
    password_confirmation: string;
    agreement: string;
}
export interface IRegResponse {
    "success": true,
    "code": number | null,
    "email": "vsev.diachun2002@gmail.com",
    "message": "verification code send."
}