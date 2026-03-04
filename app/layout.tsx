import type { Metadata } from "next";

// fonts
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space",
});

// css
import "./globals.css";

export const metadata: Metadata = {
  // metadataBase: new URL("http://localhost:3000"),
  title: "Greece Live Cams – Beaches & Cities in Real Time",
  description:
    "Watch live webcams from Greece. Explore beaches, cities, and tourist hotspots in real time.",
  keywords: [
    "Greece live cam",
    "Greece webcams",
    "Live beaches Greece",
    "Athens live cam",
    "Santorini live camera",
  ],
  authors: [{ name: "Artem Aksenovs" }],
  openGraph: {
    title: "Greece Live Cams",
    description: "Live streaming webcams from Greek cities and beaches.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${space.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
