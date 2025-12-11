// this middleware is running on every request and the folder name should be @middleware
// @middleware is a special folder name in nextjs

import { NextResponse } from "next/server";

export default function middleware(request) {
    return NextResponse.next();
}

// this config is used to match the path for which middleware should run
// * means any path
// we can see this matcher pattern in docs
export const config = {
    matcher: "/:path*",
}