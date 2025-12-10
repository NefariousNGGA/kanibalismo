import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kanibalismo",
  description: "Minimalist thought sanctuary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="p-4 bg-black text-white">
          <a href="/" className="mr-4">Home</a>
          <a href="/thoughts" className="mr-4">Thoughts</a>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}