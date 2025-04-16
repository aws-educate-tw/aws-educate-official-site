import type { Metadata } from "next";
import { Navbar } from "../../components";
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
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
