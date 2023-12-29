import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const category_id: number | undefined = (req.nextauth.token?.email as any)?.category_id ?? undefined;
        // console.log(req.nextauth);
        if (req.nextUrl.pathname.startsWith("/employee") && category_id !== 1)
            return new NextResponse("You are haven't permission!");

        if (req.nextUrl.pathname.startsWith("/company") && category_id !== 2)
            return new NextResponse("You are haven't permission!");

        if (req.nextUrl.pathname.startsWith("/education") && category_id !== 3)
            return new NextResponse("You are haven't permission!");
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

export const config = { matcher: ["/employee/:path*", "/company/:path*", "/education/:path*"] };