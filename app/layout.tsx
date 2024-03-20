import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components";

export const metadata: Metadata = {
  title: "CarHub",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Nav />
        {children}
      </body>
    </html>
  );
}
