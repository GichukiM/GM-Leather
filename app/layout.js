import { Inter } from "next/font/google";
import "./globals.css";
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GM LEATHER",
  description: "Sourced from our own beef cattle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
