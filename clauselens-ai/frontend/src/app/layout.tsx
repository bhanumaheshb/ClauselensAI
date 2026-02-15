import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClauseLens AI",
  description: "Strategic Document Intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}