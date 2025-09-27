import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Obsidian House - Luxury Creed Aventus | Premium Fragrances",
  description: "Exclusive collection of authentic Creed Aventus 100ml bottles. The legendary masculine fragrance that embodies strength and success. Limited availability.",
  keywords: "creed aventus, luxury fragrance, premium cologne, niche perfume, authentic creed, obsidian house",
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
