import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khoa Dinh",
  description: "Khoa's Portfolio Site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className="min-h-screen py-16 sm:py-16 md:py-20 lg:py-32">
        <ThemeProvider
            attribute="data-theme"
            defaultTheme={"system"}
            enableSystem
        >{children}</ThemeProvider>
      </body>
    </html>
  );
}
