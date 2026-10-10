import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

const publicSans = Public_Sans({
  variable: "--font-public-face",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-face",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Nexora",
  description: "A e-commerce website that sells digital accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${publicSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
