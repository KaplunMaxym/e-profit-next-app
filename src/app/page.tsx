'use client'

import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import {useSearchParams} from "next/navigation";

export default function Home() {
  const session = useSession()
  console.log(session)

  return (
      <>
        <div>
          {session?.data ? (
              <Link href="#" className={'btn'} onClick={() => signOut({ callbackUrl: "/" })}>
                Sign Out
              </Link>
          ) : (
              <Link href="/signin" className={'btn'}>SignIn</Link>
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