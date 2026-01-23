import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Truhlářství Gryč | Kvalitní Truhlářské Práce v Českém Těšíně",
  description: "Truhlářství Gryč - zakázky truhlářské práce, kuchyně na míru a nábytek v Českém Těšíně. Formátování desek, řezání, olepování. Volejte: +420 737 188 160",
  keywords: [
    "truhlářství",
    "truhlářské práce",
    "nábytek na míru",
    "kuchyně na míru",
    "rekonstrukce bytů",
    "Český Těšín",
    "Třinec",
    "zakázková výroba nábytku",
    "formátování desek",
    "olepování",
    "truhlář český těšín"
  ],
  authors: [{ name: "Truhlářství Gryč" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    url: "https://www.reol-ct.cz/",
    title: "Truhlářství Gryč | Kvalitní Truhlářské Práce v Českém Těšíně",
    description: "Truhlářství Gryč - zakázky truhlářské práce, kuchyně na míru a nábytek v Českém Těšíně. Formátování desek, řezání, olepování.",
    siteName: "Truhlářství Gryč"
  },
  twitter: {
    card: "summary_large_image",
    title: "Truhlářství Gryč",
    description: "Kvalitní truhlářské práce v Českém Těšíně"
  },
  alternates: {
    canonical: "https://www.reol-ct.cz/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.reol-ct.cz/",
    name: "Truhlářství Gryč",
    description: "Kvalitní truhlářské práce, kuchyně na míru, nábytek a formátování desek",
    url: "https://www.reol-ct.cz/",
    telephone: "+420737188160",
    email: "info@reol-ct.cz",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Jablunkovská 30",
      addressLocality: "Český Těšín",
      postalCode: "73701",
      addressCountry: "CZ",
    },
    areaServed: [
      { "@type": "City", name: "Český Těšín" },
      { "@type": "City", name: "Třinec" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "14:00",
    },
    sameAs: "https://www.facebook.com/people/Stola%C5%99stv%C3%AD-Gry%C4%8D/61576758120241",
  };

  const jsonLdString = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdString
          }}
        />
      </head>
      <body
        className={`${workSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
