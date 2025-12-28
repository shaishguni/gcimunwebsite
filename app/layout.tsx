import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

import Footer from "@/app/components/Footer";


const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geist-sans",
});


export const metadata: Metadata = {
  title: "GCIMUN Website",
  description: "The official website for GCI Model United Nations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.variable} antialiased`} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen  ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
