import type { Metadata } from "next";
import { Footer, Navbar } from "../../components";
import "./globals.css";

export const metadata: Metadata = {
  title: "AWS Educate Official Site",
  description: "AWS Educate Ambassador Program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[#FBFCF8]">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
