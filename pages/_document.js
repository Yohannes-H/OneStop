import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />

        <Script
          src="assets/vendor/aos/aos.js"
          strategy="beforeInteractive"
          onError={(e) => {
            console.error("Script failed to load", e);
          }}
        />
        <Script
          src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
          onError={(e) => {
            console.error("Script failed to load", e);
          }}
        />
        <Script
          src="assets/vendor/glightbox/js/glightbox.min.js"
          strategy="beforeInteractive"
          onError={(e) => {
            console.error("Script failed to load", e);
          }}
          onLoad={() => {
            console.log("loaded");
          }}
        />
        <Script
          src="assets/vendor/isotope-layout/isotope.pkgd.min.js"
          strategy="beforeInteractive"
          onError={(e) => {
            console.error("Script failed to load", e);
          }}
        />
        <Script
          src="assets/vendor/swiper/swiper-bundle.min.js"
          strategy="beforeInteractive"
          onError={(e) => {
            console.error("Script failed to load", e);
          }}
        />
        <Script
          src="assets/vendor/php-email-form/validate.js"
          strategy="beforeInteractive"
          onError={(e) => {
            console.error("Script failed to load", e);
          }}
        />
      </body>
    </Html>
  );
}
