import { NextResponse } from "next/server";
import { RequestObject } from "./interfaces";
export function middleware(req: RequestObject) {     
    const token = req.cookies.get('token');
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

}
export const config = {
    matcher: ['/profile/:path*', '/cart/:path*'],
}