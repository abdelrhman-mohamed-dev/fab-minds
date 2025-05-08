import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A&H Logistics - Professional Trucking & Freight Services",
  description:
    "Leading provider of reliable trucking and freight logistics solutions. Specializing in efficient transportation, warehousing, and supply chain management for businesses across North America.",
  keywords: [
    "Trucking Services",
    "Freight Transportation",
    "Logistics Solutions",
    "Supply Chain Management",
    "Warehousing Services",
    "Cross-Country Shipping",
    "Freight Forwarding",
    "Transportation Management",
    "Cargo Services",
    "Logistics Consulting",
  ],
  openGraph: {
    type: "website",
    siteName: "A&H Logistics",
    locale: "en_US",
    url: "https://ahlogistics.com",
    title: "A&H Logistics - Your Trusted Transportation Partner",
    description:
      "Expert trucking and freight logistics services delivering reliable, efficient, and cost-effective transportation solutions for businesses of all sizes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A&H Logistics Transportation Services",
      },
    ],
  },
  authors: [
    {
      name: "A&H Logistics",
      url: "https://ahlogistics.com",
    },
  ],
  creator: "A&H Logistics",
  icons: [
    {
      rel: "icon",
      url: "/swatx_logo.jpeg",
    },
    {
      rel: "apple-touch-icon",
      url: "/swatx_logo.jpeg",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/swatx_logo.jpeg",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/swatx_logo.jpeg",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/swatx_logo.jpeg",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/swatx_logo.jpeg",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
