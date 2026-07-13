import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kayu Bara | Restoran Grill Kayu Bakar Premium",
  description: "Cita rasa asap & bara sejati dengan hidangan grill premium yang dimasak di atas kayu bakar pilihan. Rasakan sensasi kuliner mewah di Kayu Bara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${workSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-charcoal-950 text-charcoal-50 font-body">
        {children}
      </body>
    </html>
  );
}

