import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import DesktopOnly from "@/components/DesktopOnly";

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pod of Cast - Your Daily Podcast",
  description: "We cover all kinds of categories and a weekly special guest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratAlternates.variable} antialiased`}>
        <DesktopOnly>{children}</DesktopOnly>
      </body>
    </html>
  );
}
