import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";  // Use Next.js Link for client-side routing
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SwipeMatic",
  description: "AI-powered dating app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation Menu */}
        <nav>
          <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/swipe">Swipe</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
