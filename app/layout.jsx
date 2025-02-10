import localFont from "next/font/local";
import "./globals.css";
import "animate.css/animate.compat.css";
import "@radix-ui/themes/styles.css";
import { Inter, Outfit, Lato } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import ToastProvider from "@/wrappers/ToastProvider";
import { Theme } from "@radix-ui/themes";
import GeneralLoading from "./components/GeneralLoading";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-lato",
});



export const metadata = {
  title: "Book music events without hassels.",

  description: "Say goodbye to ticket-hunting stress. Discover and book music events faster than ever.",

  openGraph: {
    title: "Book music events without hassels.",
    description: "Say goodbye to ticket-hunting stress. Discover and book music events faster than ever.",
    url: "https://fobework-music-event-booking.vercel.app",
    images: [
      {
        url: "https://fobework-music-event-booking.vercel.app/images/OG_Image.png",
        width: 630,
        height: 630,
        alt: "Music Event Booking Logo",
      },
    ],
    type: "website",
    siteName: "Music Event Booking",
  },

  twitter: {
    card: "summary_large_image",
    title: "Book music events without hassels.",
    description: "Say goodbye to ticket-hunting stress. Discover and book music events faster than ever.",
    images: ["https://fobework-music-event-booking.vercel.app/images/OG_Image.png"],
    creator: "@GeniusHawlah",
  },

  creator: "Olasunkanmi Ajibola",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={` antialiased text-base font-normal w-full bg-pry-bg text-the-white `}
      >
        <Theme>
          {/* <TransparentOverlay /> */}
          <GeneralLoading />
          <ToastProvider />
          <section className={`${lato.className} `}>
            <Navbar />
            <div> {children}</div>
            {/* <Footer/> */}
          </section>
        </Theme>
      </body>
    </html>
  );
}
