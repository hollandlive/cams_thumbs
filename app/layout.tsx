import type { Metadata } from "next";

// fonts
// import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

// css
import "./globals.css";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
// });

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
  authors: [{ name: "Artem Aksenovs" }],
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
      <body className={space.className}>
        {children}
      </body>
    </html>
  );
}