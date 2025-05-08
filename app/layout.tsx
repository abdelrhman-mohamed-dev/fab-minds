import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fab-Minds - Innovative Solutions for a Digital World",
  description:
    "Fab-Minds is a leader in providing cutting-edge digital solutions. We specialize in innovative technology, creative design, and strategic consulting to empower businesses globally.",
  keywords: [
    "Digital Solutions",
    "Technology Innovation",
    "Creative Design",
    "Strategic Consulting",
    "Global Business",
    "Tech Empowerment",
    "Innovation Services",
    "Digital Transformation",
    "Business Solutions",
    "Consulting Services",
  ],
  openGraph: {
    type: "website",
    siteName: "Fab-Minds",
    locale: "en_US",
    url: "https://fabminds.com",
    title: "Fab-Minds - Pioneering Digital Innovation",
    description:
      "Discover Fab-Minds' expertise in digital innovation, offering transformative solutions for businesses seeking to thrive in the digital age.",
    images: [
      {
        url: "/fabminds-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fab-Minds Digital Innovation",
      },
    ],
  },
  authors: [
    {
      name: "Fab-Minds",
      url: "https://fabminds.com",
    },
  ],
  creator: "Fab-Minds",
  icons: [
    {
      rel: "icon",
      url: "/fabminds_logo.jpeg",
    },
    {
      rel: "apple-touch-icon",
      url: "/fabminds_logo.jpeg",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/fabminds_logo.jpeg",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/fabminds_logo.jpeg",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/fabminds_logo.jpeg",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/fabminds_logo.jpeg",
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
