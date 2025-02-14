import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer"

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
      <body className="flex flex-col min-h-screen sm:py-16 md:py-20 lg:py-32">
        <ThemeProvider
            attribute={"data-theme"}
            defaultTheme={"system"}
            enableSystem={true}
        >
          <NavBar/>
            <div className={"flex-grow"}>
              {children}
            </div>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
