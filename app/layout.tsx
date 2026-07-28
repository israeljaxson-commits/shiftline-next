import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shiftline.work"),
  title: {
    default: "Shiftline - Workforce, on the move",
    template: "%s | Shiftline",
  },
  description: "Shiftline connects delivery, hospitality and construction workers with employers who need them - fast, verified, reliable.",
  applicationName: "Shiftline",
  keywords: ["workforce", "recruitment", "employee leasing", "delivery", "hospitality", "construction"],
  authors: [{ name: "Shiftline" }],
  creator: "Shiftline",
  openGraph: {
    title: "Shiftline - Workforce, on the move",
    description: "Shiftline connects delivery, hospitality and construction workers with employers who need them - fast, verified, reliable.",
    url: "https://shiftline.work",
    siteName: "Shiftline",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiftline - Workforce, on the move",
    description: "Shiftline connects delivery, hospitality and construction workers with employers who need them - fast, verified, reliable.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${cormorant.variable} bg-paper font-sans text-charcoal antialiased`}>
        {children}
      </body>
    </html>
  );
}
