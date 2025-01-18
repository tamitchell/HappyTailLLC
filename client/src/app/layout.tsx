import type { Metadata } from "next";
import { Montserrat, Open_Sans, Raleway } from "next/font/google";
import PageLayout from "@/components/PageLayout";
import "./globals.css";
import "./output.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Tail VA LLC: Dog Walking and Boarding Company",
  description: "HappyTail LLC: Dog Walking Company - Our Services Page. We provide walking, sitting, boarding, and medical administration services for your pet. Just give us a call!",
  authors: [{ name: "Tasha Mitchell" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${raleway.variable} font-sans antialiased`}
      >
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
