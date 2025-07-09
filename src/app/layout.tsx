import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import Loader from "./components/Loader";
import TopLoader from "./components/TopLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gyanesh Portfolio",
  description: "Crafted by Gyanesh Bhuyan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${syne.className} antialiased`}>
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-black text-white overflow-hidden">
          <main className="relative z-10 flex flex-col items-center justify-center px-4">
            <TopLoader />
            <Loader />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
