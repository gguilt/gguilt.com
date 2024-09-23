import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gökay Gültekin",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        defer
        src="https://umi.gokay.works/script.js"
        data-website-id="c88e1eea-e6b2-48f1-abc3-ab30e851f9a6"
      ></Script>
    </html>
  );
}
