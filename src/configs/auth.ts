import type { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import {authorizationService, verificationService} from "@/configs/authServices"
import {ICredentials} from "@/models/config/Interface";

export const authConfig: AuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true },
                verification_code: { label: 'verification_code', type: 'password', required: true },
                password: { label: 'password', type: 'password', required: true },
            },
            // @ts-ignore
            async authorize(credentials: ICredentials) {
                if (!credentials?.email) return null;
                if (credentials.email && credentials.verification_code === undefined && credentials.password)
                    return await authorizationService({credentials});
                if (credentials.email && credentials.verification_code && credentials.password === undefined)
                    return await verificationService({credentials});
                return null
            }
        })
    ],
    pages: {
        signIn: '/VerificationForm'
    },
    session: {
        // Термін дії сесії в секундах (4 дні = 4 * 24 * 60 * 60 секунд)
        maxAge: 4 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },
}