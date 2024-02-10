import { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CHATBOT",
  description: "Welcome to my chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>CHATBOT</title>
      </Head>
      <body className="bg-black">{children}</body>
    </html>
  );
}
