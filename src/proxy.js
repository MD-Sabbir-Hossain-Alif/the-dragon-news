// ←←← PUT THIS AT THE VERY TOP, BEFORE ANY OTHER IMPORTS
import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);   // Cloudflare + Google DNS

import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(session)

    if (session) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: ['/about', '/career', '/news/:path*'],
}