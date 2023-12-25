'use client'

import Link from "next/link";
import {signOut, useSession} from "next-auth/react";

export const StatusAuthorization = () => {
    const session = useSession()
    console.log(session)

    return (
        <>
            <div>
                {session?.data ? (
                    <Link href="#" className={'btn'} onClick={() => signOut({ callbackUrl: "/" })}>
                        Sign out
                    </Link>
                ) : (
                    <Link href={"/authorization"} className={'btn'}>Sign in</Link>
                )}
            </div>
            <hr style={{marginTop: 20}}/>
            <div>
                {session?.data && session.data.user?.email}
            </div>
            <div>
                {session?.data && session.data.user?.name}
            </div>
        </>
    )
}