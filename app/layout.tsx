import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syrilla Healthcare Helping Hands Foundation",
  description: "Empowering children, young people, adults, and families affected by learning disabilities, special needs, and health conditions in Nigeria and Africa.",
  keywords: "healthcare, foundation, Nigeria, learning disabilities, special needs, community support",
  authors: [{ name: "Syrilla Healthcare Helping Hands Foundation" }],
  openGraph: {
    title: "Syrilla Healthcare Helping Hands Foundation",
    description: "Empowering children, young people, adults, and families affected by learning disabilities, special needs, and health conditions.",
    url: "https://shhhfoundation.org",
    siteName: "Syrilla Healthcare Helping Hands Foundation",
    type: "website",
  },
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
