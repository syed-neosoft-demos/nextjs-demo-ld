import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { childType } from "../components/types/types";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS L&D App",
  description: "demo app using nextJS",
};

export default function RootLayout({ children }: childType) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
