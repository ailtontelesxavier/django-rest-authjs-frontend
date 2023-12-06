import { NextRequest, NextResponse } from "next/server"

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";


export default function middleware(request: NextRequest) {

    console.log('----------');
    console.log(request.cookies.get('next-auth.session-token'));
    console.log('----------');

    //const token = request.cookies.get('auth_token')?.value;
    const token = request.cookies.get('next-auth.session-token')?.value;

    const signInURL = new URL('/', request.url);
    const dashboardURL = new URL('/dashboard', request.url);

    if (!token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.next();
        }
        return NextResponse.redirect(signInURL);
    }

    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(dashboardURL)
    }
}

export const config = {
    matcher: ['/', '/dashboard/:path*']
}

/*
  'use client'
  const pathname = usePathname();
  const isPublicPage = checkIsPublicRoute(pathname!);

  console.log(isPublicPage)
  */