import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { Layout } from "@/components/Layout";
import ptBR from "../../locales/pt-BR.json";
import en from "../../locales/en.json";
import { type HeaderTranslations } from "@/components/Header";

type Locale = "pt-BR" | "en";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus Alves Pereira - Developer",
  description: "Into the unknown, exploring the endless possibilities of code.",
  icons: {
    icon: "/favicon.ico",
  },
};

async function detectLocale(): Promise<Locale> {
  const acceptLanguage =
    (await headers()).get("accept-language")?.toLowerCase() ?? "";

  if (acceptLanguage.includes("en")) {
    return "en";
  }

  return "pt-BR";
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await detectLocale();
  const headerT: HeaderTranslations =
    locale === "pt-BR"
      ? (ptBR as { header: HeaderTranslations }).header
      : (en as { header: HeaderTranslations }).header;

  return (
    <html
      lang={locale === "pt-BR" ? "pt-BR" : "en"}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Layout headerT={headerT}>{children}</Layout>
      </body>
    </html>
  );
}
