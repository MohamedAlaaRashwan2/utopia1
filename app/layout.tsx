import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import GlassNavbar from "@/components/Header";
import LenisProvider from "@/components/providers/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Utopia Agency | Digital Marketing & Web Development",
    template: "%s | Utopia Agency",
  },
  description:
    "Utopia Agency is a creative digital agency specializing in web development, UI/UX design, and marketing solutions to grow your business online.",

  keywords: [
    "Utopia Agency",
    "Web Development",
    "UI UX Design",
    "Digital Marketing",
    "React Development",
    "Frontend Developer",
  ],

  authors: [{ name: "Utopia Agency" }],

  creator: "Utopia Agency",

  icons: {
    icon: "/favicon.png"
  },

  openGraph: {
    title: "Utopia Agency",
    description:
      "We build modern websites and digital experiences that help brands grow.",
    url: "https://utopiaagency.cc",
    siteName: "Utopia Agency",
    images: [
      {
        url: "/og-image.png", // صورة في public
        width: 1200,
        height: 630,
        alt: "Utopia Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Utopia Agency",
    description:
      "Modern web development & digital marketing solutions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <LenisProvider>
          <GlassNavbar />
          <main className="flex-1">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}