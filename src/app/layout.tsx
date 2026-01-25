import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hook generator",
  description: "Generate hooks for your Instagram reels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body>{children}</body>
    </html>
  );
}
