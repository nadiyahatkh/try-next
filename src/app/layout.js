"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import NextAuth from "@/lib/next-auth/NextAuth";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const disabledNavbar = ["/login", "/register"];

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers>
        <NextAuth>
          {!disabledNavbar.includes(pathname) && <Navbar /> }
          {children}

        </NextAuth>
          </Providers>
      </body>
    </html>
  );
}
