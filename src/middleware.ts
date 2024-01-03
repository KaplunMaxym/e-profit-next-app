import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const category_id: number | undefined = (req.nextauth.token?.email as any)?.category_id ?? undefined;
        if (
            (req.nextUrl.pathname.startsWith("/employee") && category_id !== 1) ||
            (req.nextUrl.pathname.startsWith("/company") && category_id !== 2) ||
            (req.nextUrl.pathname.startsWith("/education") && category_id !== 3) ||
            (req.nextUrl.pathname.startsWith("/testtest2") && category_id !== 1)
        ) return NextResponse.rewrite('http://localhost:3000/permission');
    },
    {
        callbacks: {
            authorized: (params) => {
                let { token } = params;
                return !!token;
            },
        },
    }
);

export const config = { matcher: ["/employee/:path*", "/company/:path*", "/education/:path*", "/testtest2/:path*"] };