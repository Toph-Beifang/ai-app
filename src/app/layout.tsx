import "./globals.css";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "AI Experience Editor",
  description: "Edit and enhance your professional experiences with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
