import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "@/global/styles/globals.scss";

export const metadata: Metadata = {
  title: "Nextjs-Intl-Template",
  description: "This is a template for use in translate",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
