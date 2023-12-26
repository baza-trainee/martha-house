import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { Locale } from "./types";

const getSupportedLanguage = (language: string) => {
  if (language.startsWith("uk")) return Locale.ua;
  if (language.startsWith("en")) return Locale.en;
  if (language.startsWith("pl")) return Locale.pl;
  return Locale.ua;
};

export const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname === "/report") {
    return;
  }

  let supportedLanguage;

  // @ts-ignore
  const preferredLanguageCookie = request.cookies.preferredLanguage;
  if (preferredLanguageCookie) {
    try {
      const parsed = JSON.parse(preferredLanguageCookie);
      if (parsed && parsed.value) {
        supportedLanguage = getSupportedLanguage(parsed.value);
      }
    } catch (error) {
      console.error("Error parsing preferredLanguage cookie:", error);
    }
  }

  if (!supportedLanguage) {
    const headers = {
      "accept-language": request.headers.get("accept-language"),
    };

    // @ts-ignore
    const language = new Negotiator({ headers }).languages()[0];

    supportedLanguage = getSupportedLanguage(language);
  }

  if (
    !(
      request.nextUrl.pathname.startsWith(`/${Locale.en}`) ||
      request.nextUrl.pathname.startsWith(`/${Locale.ua}`) ||
      request.nextUrl.pathname.startsWith(`/${Locale.pl}`)
    )
  ) {
    return NextResponse.redirect(
      new URL(`/${supportedLanguage}/${request.nextUrl.pathname}`, request.url),
    );
  }
};

export const config = {
  matcher: [
    "/((?!api|.*\\..*|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
  ],
};
