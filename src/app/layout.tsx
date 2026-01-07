import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samerismail.com"),
  title: {
    default: "Samer H. Ismail | AI and Data Lead",
    template: "%s | Samer H. Ismail",
  },
  description:
    "AI and Data Lead focused on AI strategy, delivery, adoption, and responsible implementation. Expert in Python, ML, GenAI, Azure AI, and Copilot Studio.",
  keywords: [
    "AI Strategy",
    "Data Science",
    "Machine Learning",
    "Generative AI",
    "Azure AI",
    "Copilot Studio",
    "Python",
    "Analytics",
  ],
  authors: [{ name: "Samer H. Ismail" }],
  creator: "Samer H. Ismail",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samerismail.com",
    siteName: "Samer H. Ismail",
    title: "Samer H. Ismail | AI and Data Lead",
    description:
      "AI and Data Lead focused on AI strategy, delivery, adoption, and responsible implementation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samer H. Ismail - AI and Data Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samer H. Ismail | AI and Data Lead",
    description:
      "AI and Data Lead focused on AI strategy, delivery, adoption, and responsible implementation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
