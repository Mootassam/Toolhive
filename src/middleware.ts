import { NextResponse, type NextRequest } from "next/server";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/site";

const SET = new Set<string>(LOCALES);

function pick(req: NextRequest): string {
  const c = req.cookies.get("NEXT_LOCALE")?.value;
  if (c && SET.has(c)) return c;
  const al = req.headers.get("accept-language") || "";
  for (const part of al.split(",")) {
    const code = part.split(";")[0].trim().toLowerCase().slice(0, 2);
    if (SET.has(code)) return code;
  }
  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const first = pathname.split("/")[1];
  if (SET.has(first)) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = `/${pick(req)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  // skip Next internals, API and any file with an extension (sitemap.xml, robots.txt, icons…)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
