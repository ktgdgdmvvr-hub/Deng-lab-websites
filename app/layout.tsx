import type { Metadata } from "next";
import "./globals.css";
import { sitePath } from "./sitePath";

export const metadata: Metadata = {
  title: "Deng Lab | Brain Development & Rare Neurodevelopmental Disorders",
  description: "Deng Lab at Hainan Medical University studies neural stem-cell fate, brain development and rare childhood neurodevelopmental disorders.",
  icons: {
    icon: sitePath("/favicon.svg"),
    shortcut: sitePath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
