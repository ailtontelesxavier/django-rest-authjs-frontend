import { NextRequest, NextResponse } from "next/server"

import React, { useState, useEffect } from "react";
import { checkUserAuthenticated } from "./functions/check-user-authenticated";


export default function middleware(request: NextRequest) {

    //console.log(useAuth)


    const token = request.cookies.get('auth_token')?.value;

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