import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  authors: [{ name: "Artem" }],
  openGraph: {
    title: "Greece Live Cams",
    description:
      "Live streaming webcams from Greek cities and beaches.",
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
      <body>{children}</body>
    </html>
  );
}