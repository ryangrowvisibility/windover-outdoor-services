import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const head = Archivo({ variable: "--font-head", subsets: ["latin"], weight: ["700", "800"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Windover Outdoor Services | Lawn Care & Yard Cleanups in Northumberland County",
  description:
    "Grass cutting, spring cleanups, hedge trimming, overgrown yard clearing and fallen tree removal in Northumberland County, Ontario. Owner-operated by Zack. 5.0 stars from 9 Google reviews. Call (705) 957-1333.",
  openGraph: {
    title: "Windover Outdoor Services | Northumberland County Lawn Care",
    description: "Hard-working, honest lawn care and yard cleanups from Zack. 5.0 stars on Google. Call (705) 957-1333.",
    type: "website",
    locale: "en_CA",
    images: ["/images/p9.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
