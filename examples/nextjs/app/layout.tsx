import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import "koori-ui/styles.css";
import { KooriProvider } from "koori-ui";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koori UI — Next.js Example",
  description: "Premium glassmorphism components built on Radix UI for React 19",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${monoFont.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen font-sans selection:bg-[var(--koori-primary)]/30">
        <KooriProvider defaultTheme="dark">
          {children}
        </KooriProvider>
      </body>
    </html>
  );
}
