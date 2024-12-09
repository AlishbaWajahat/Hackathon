import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import {Poppins , Inter} from "next/font/google";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const poppin=Poppins({
  subsets:["latin"],
  weight:"400",
  display:"swap",
  variable:"--poppin"
})

const inter=Inter({
  subsets:["latin"],
  weight:"400",
  display:"swap",
  variable:"--inter"

})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={(inter.variable,poppin.variable)}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
