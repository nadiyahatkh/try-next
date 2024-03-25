import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import NextAuth from "@/component/NextAuth";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuth>
        <Navbar></Navbar>
        {children}
      </NextAuth>
      </body>
    </html>
  );
}
