import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const path = new URL(request.url).pathname;

  const cookieStore = cookies();
  const uid = cookieStore.get("uid");
  const client = cookieStore.get("client");
  const accessToken = cookieStore.get("access-token");

  if (!uid || !client || !accessToken) {
    return NextResponse.redirect(
      new URL(`${process.env.API_ORIGIN}`, request.url),
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
