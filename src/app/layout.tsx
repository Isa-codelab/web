import './global.css';

import type { Metadata } from "next";
import {Montserrat, Oxanium} from 'next/font/google'

const oxanium = Oxanium({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-oxanium',
})

const montserrat = Montserrat({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "devstage",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className=" bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top nd:bg-right-top">{children}</body>
    </html>
  );
}
