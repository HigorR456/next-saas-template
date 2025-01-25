import { Roboto } from "next/font/google";
import StyledComponentsRegistry from './lib/registry'
import "../styles/globals.scss";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { getServerSession } from "next-auth";
import { SessionProvider } from "@/providers/NextAuthProvider";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'swap'
});

const schema = {
  "@context":"https://schema.org",
  "@type":"CreativeWork",
  "url":"/",
  name: "next-saas-template",
  description: "Launch your SaaS product faster than ever with this template.",
  logo:"/Logo.svg",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const session = await getServerSession();
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            <SessionProvider session={session}>
              {children}
            </SessionProvider>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
