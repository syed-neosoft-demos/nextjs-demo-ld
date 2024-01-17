import { childType } from "@/src//types/types";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS L&D App",
  description: "demo app using nextJS",
};

export default function RootLayout({ children }: childType) {
  return (
    <html lang="en" className="bg-slate-200">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
