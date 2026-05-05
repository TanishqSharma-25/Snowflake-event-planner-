import { auth } from "@/lib/auth/server";
import { NextRequest, NextResponse } from "next/server";

function isServerAction(request: NextRequest) {
  const h = request.headers;
  return h.get("Next-Action") || h.get("next-action");
}

export default function middleware(request: NextRequest) {
  // ✅ allow server actions FIRST
  if (isServerAction(request)) {
    return NextResponse.next();
  }

  // then apply auth
  return auth.middleware({
    loginUrl: "/auth/sign-in",
    publicRoutes: ["/auth/sign-in", "/auth/sign-up"],
  })(request);
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/event/:path*",
  ],
};