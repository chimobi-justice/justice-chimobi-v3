import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { Provider } from "~/app/provider"
import { NavBar } from "~/components/navbar"
import { Footer } from "~/components/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://justice-chimobi.vercel.app"),

  title: {
    default: "Justice Chimobi | Frontend Engineer",
    template: "%s | Justice Chimobi",
  },

  description:
    "I'm a frontend engineer who loves building tools, not just screens. I design systems, think deeply about interaction, and write code that feels good to use.",

  authors: [
    {
      name: "Justice Chimobi",
      url: "https://justice-chimobi.vercel.app",
    },
  ],

  keywords: [
    "frontend engineer",
    "React",
    "Next.js",
    "UI design",
    "web developer",
    "Fidely UI",
    "Ark UI",
    "Panda CSS",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    creator: "@chimobijustice",
    title: "Justice Chimobi | Frontend Engineer | Creator of Fidely UI",
    description:
      "Frontend engineer focused on design systems, developer experience, and tools.",
    images: ["/og.png"],
  },

  openGraph: {
    type: "website",
    url: "/",
    title: "Justice Chimobi | Frontend Engineer | Creator of Fidely UI",
    description:
      "Frontend engineer focused on design systems, developer experience, and tools.",
    siteName: "Justice Chimobi",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Justice Chimobi – Frontend Engineer",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <NavBar />
          <main>
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
