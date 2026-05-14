import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "USA PVF | American-Made Flanges, Valves, and Fittings with Compliance Documentation",
    template: "%s | USA PVF"
  },
  description:
    "American-made pipe, valves, and flanges with full BAA, BABA, and AIS compliance documentation. Domestic melt traced through final fabrication. API 6A pipeline pressure ratings, ASME B16.5 dimensional reference, and the paperwork to prove every spec.",
  keywords:
    "USA PVF, American-made flanges, BAA compliant flanges, BABA flanges, AIS flanges, domestic melt, Buy American flanges, API 6A flanges, pipeline flanges, ASME B16.5, ASME B16.47, MTR documentation, IIJA flanges, federal infrastructure",
  metadataBase: new URL("https://usapvf-new.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "USA PVF",
    title: "USA PVF | American-Made PVF with Compliance Documentation",
    description:
      "Domestically manufactured pipe, valves, and flanges. BAA, BABA, AIS documented from melt through fabrication.",
    url: "https://usapvf-new.vercel.app"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1B1F23" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "USA PVF",
              url: "https://usapvf-new.vercel.app",
              logo: "https://usapvf-new.vercel.app/logo.png",
              description:
                "American-made pipe, valves, and flanges with BAA, BABA, and AIS compliance documentation. Domestic melt and domestic fabrication for federally funded and federally procured projects.",
              telephone: "+1-281-484-8325",
              email: "sales@texasflange.com",
              address: {
                "@type": "PostalAddress",
                postOfficeBoxNumber: "PO Box 2889",
                addressLocality: "Pearland",
                addressRegion: "TX",
                postalCode: "77588",
                addressCountry: "US"
              }
            })
          }}
        />
      </head>
      <body className="bg-cream text-ink font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
