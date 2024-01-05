'use client'
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";

const StatusAuthorization = () => {
    const session: any = useSession()
    console.log(session)

    return (
        <>
            <div style={{marginTop: 20}}>
                {session?.data ? (
                    <Link href="#" className={'btn'} onClick={() => signOut({callbackUrl: "/"})}>
                        Sign out
                    </Link>
                ) : (
                    <>
                        <Link href={"/registration"} className={'btn'}>Sign in</Link>
                        <Link href={"/authorization"} className={'btn'}>log in</Link>
                    </>
                )}
            </div>
            <hr style={{marginTop: 20}}/>
            <div>
                {session?.data && session.data.user?.email?.category_id}
            </div>
            <div>
                {session?.data && session.data.user?.email?.code}
            </div>
            <div>
                {session?.data?.user?.email?.success === true && 'true'}
            </div>
            <div>
                {session?.data && session.data.user?.email?.token}
            </div>
        </>
    )
}

export default StatusAuthorization;