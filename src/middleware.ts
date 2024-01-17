import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  console.log("cookieStore=>", cookieStore);

  // return Response.json({ success: false, message: "authentication failed" }, { status: 401 });
  // return NextResponse.redirect(new URL("/panel/add-user", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};
