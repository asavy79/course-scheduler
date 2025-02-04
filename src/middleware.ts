import { NextResponse, NextRequest } from "next/server"
import { auth } from "@/auth"
import { protectedRoutes, authRoutes } from "@/lib/routes"


export async function middleware(request: NextRequest) {
    const session = await auth();
    const user = session?.user;

    if (request.nextUrl.pathname.startsWith("/api") && !user) {
        return NextResponse.redirect(new URL("/authenticate", request.url));
    }

    if (protectedRoutes.includes(request.nextUrl.pathname) && !user) {
        return NextResponse.redirect(new URL("/authenticate", request.url));
    }
    if (authRoutes.includes(request.nextUrl.pathname) && user) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    console.log(request.url);
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}