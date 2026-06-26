import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.greenworx.co.nz"),
  title: {
    default: "Greenworx Landscaping | Premium Landscaping Auckland",
    template: "%s | Greenworx Landscaping Auckland",
  },
  description:
    "Auckland's premier landscaping company. Expert landscape design, construction and garden maintenance for residential and commercial clients across Auckland.",
  keywords: [
    "Auckland Landscaping",
    "Landscaping Auckland",
    "Landscape Design Auckland",
    "Retaining Walls Auckland",
    "Fencing & Screens Auckland",
    "Garden Maintenance Auckland",
    "Commercial Landscaping Auckland",
    "Multi-Unit Residential Landscaping Auckland",
  ],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://www.greenworx.co.nz",
    siteName: "Greenworx Landscaping",
    title: "Greenworx Landscaping | Premium Landscaping Auckland",
    description:
      "Auckland's premier landscaping company. Expert landscape design, construction and garden maintenance for residential and commercial clients.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.greenworx.co.nz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Greenworx Landscaping",
              image: "https://www.greenworx.co.nz/logo.png",
              telephone: "022 648 2252",
              email: "devon@greenworx.co.nz",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 2, 49 Mt Wellington Highway",
                addressLocality: "Auckland",
                addressCountry: "NZ",
              },
              url: "https://www.greenworx.co.nz",
              description:
                "Premium landscaping design, construction and maintenance for Auckland homes and businesses.",
              areaServed: [
                "Remuera", "St Heliers", "Glendowie", "Kohimarama",
                "Mission Bay", "Orakei", "Meadowbank", "Epsom",
                "Parnell", "Mt Eden", "Central Auckland",
              ],
              priceRange: "$$$$",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
      <GoogleAnalytics gaId="G-8GCDDCY1E1" />
    </html>
  );
}
