import "../styles/globals.css";
import "../styles/vendor/animate.css/animate.min.css";
import "../styles/vendor/aos/aos.css";
import "../styles/vendor/bootstrap/css/bootstrap.min.css";
import "../styles/vendor/bootstrap-icons/bootstrap-icons.css";
import "../styles/vendor/boxicons/css/boxicons.min.css";
import "../styles/vendor/glightbox/css/glightbox.min.css";
import "../styles/vendor/remixicon/remixicon.css";
import "../styles/vendor/swiper/swiper-bundle.min.css";
import "../styles/style.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="assets/js/main.js"
        strategy="afterInteractive"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
      />
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#2194F7",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
