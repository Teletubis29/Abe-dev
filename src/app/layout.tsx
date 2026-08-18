import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ABE — Fullstack Developer Portfolio",
  description:
    "Fullstack Developer specializing in building production-ready, scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-[#08090a] text-neutral-100 antialiased selection:bg-[#e5a93c] selection:text-black">
        {children}
      </body>
    </html>
  );
}
