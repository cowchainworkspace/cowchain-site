import "./index.css";
import "./home.css";
import { ClientProvider } from "@/lib/api/client";
import { Anton, Manrope, Montserrat, Poppins, Rubik } from "next/font/google";

import { metadata } from "./rootMetadata";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-manrope"
});

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-rubik"
});

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton"
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-poppins"
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "400"],
  style: ["normal"],
  display: "swap",
  variable: "--font-montserrat"
});
export { metadata };

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${rubik.variable} ${poppins.variable} ${montserrat.variable} ${anton.variable} `}
    >
      <head>
        <link rel="preload" href="/homepage/video.mp4" type="video" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="stylesheet" href="https://use.typekit.net/cqp2qoa.css" />

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EVL9LDFN3V"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EVL9LDFN3V');
          `
          }}
        />

        <meta name="theme-color" content="#000000" />
        <meta
          property="og:image"
          content="https://cowchain.io/images/og-image.png"
        />
      </head>

      <body>
        <ClientProvider>
          <div id="root">{children}</div>
        </ClientProvider>
      </body>
    </html>
  );
}
