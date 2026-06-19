import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://anteeclub.com"),
  title: {
    default: "Antee Club | Premium Fitness Club in Casablanca",
    template: "%s | Antee Club",
  },
  description:
    "Premium fitness experience, professional coaching, state-of-the-art equipment, group classes, and personal training at Antee Club.",
  keywords: [
    "Antee Club",
    "premium gym Casablanca",
    "fitness club",
    "personal training",
    "group classes",
    "luxury gym",
  ],
  openGraph: {
    title: "Antee Club | Premium Fitness Club",
    description:
      "Transform your body and elevate your lifestyle with coaching, classes, and luxury fitness facilities.",
    url: "https://anteeclub.com",
    siteName: "Antee Club",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Antee Club premium gym interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antee Club | Premium Fitness Club",
    description: "Premium coaching, group classes, and high-end facilities.",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#050505] text-stone-100 antialiased">{children}</body>
    </html>
  );
}
