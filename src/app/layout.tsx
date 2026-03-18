import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "USA PVF",
  description: "Industrial Pipe Flanges",
  metadataBase: new URL("https://usapvf.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://usapvf.com",
    siteName: "USA PVF",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
