import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Obsidian House - Luxury ARCHIVE No.001 | Premium Fragrances",
  description: "Exclusive collection of authentic ARCHIVE No.001 100ml bottles. The legendary masculine fragrance that embodies strength and success. Limited availability.",
  keywords: "archive no.001, luxury fragrance, premium cologne, niche perfume, obsidian house, exclusive scent",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
