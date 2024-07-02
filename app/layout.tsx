import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {
  adihasuDin,
  adihasuDinCond,
  adineueText,
} from "@/app/fonts/typography";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${adihasuDin.variable} ${adihasuDinCond.variable} ${adineueText.variable} font-sans bg-white text-black dark:bg-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
