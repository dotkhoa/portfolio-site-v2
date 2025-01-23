import type { Metadata } from "next";
import { Questrial } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Khoa Dinh",
  description: "Khoa's Portfolio Site.",
};

const questrial = Questrial({
    weight: '400',
    subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={questrial.className}>
        {children}
      </body>
    </html>
  );
}
