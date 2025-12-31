
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  suppressHydrationWarning lang="en" className="scroll-smooth">
      <body className={`${font.variable} antialiased`}>

        <main className="min-h-screen  ">
          {children}
        </main>

      </body>
    </html>
  );
}
