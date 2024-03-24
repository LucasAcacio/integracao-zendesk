import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VTEX Internal",
  description: "Internal tool to integrate tickets creation with Zendesk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
