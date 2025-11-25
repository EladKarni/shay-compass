import type { Metadata } from "next";
import { Didact_Gothic } from "next/font/google";

const didactGothic = Didact_Gothic({
  subsets: ["latin"],
  variable: '--font-didact-gothic',
  display: 'swap',
  weight: "400"
});

export const metadata: Metadata = {
  title: "Shay Compass | Premier Real Estate Development & Property Solutions",
  description: "Shay Compass specializes in residential and commercial property development, real estate investment, and comprehensive property management solutions. Transform your vision into reality with our expert team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Don't wrap in html/body here - let route groups handle their own layout
  return children;
}
