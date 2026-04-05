import type { Metadata } from "next";
import "./globals.css";
import { KooriProvider } from "koori-ui";

export const metadata: Metadata = {
  title: "My Koori App",
  description: "Built with Koori UI glassmorphism components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <KooriProvider defaultTheme="dark">
          {children}
        </KooriProvider>
      </body>
    </html>
  );
}
