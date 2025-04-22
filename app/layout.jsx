import "../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { Nunito } from "next/font/google";
import Script from "next/script";

const nunito = Nunito({ subsets: ["latin"] });


export const metadata = {
  title: {
    default: "Lasioweb | Website Design Company in Nigeria",
    template: "",
  },
  description: "Get visually apealling websites tailored to your business",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        /> */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/assets/images/logo.png" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JVZ92D5RJ7"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JVZ92D5RJ7');
          `}
        </Script>
      </head>
      <body
        className={`max-w-screen-2xl mx-auto ${nunito.className}`}
        id="body"
      >
        <ChakraProvider>
          <Nav />
          <main className="app">
            {children}
            <Footer />
          </main>
        </ChakraProvider>
        {/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script> */}
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
      </body>
    </html>
  );
};

export default RootLayout;
