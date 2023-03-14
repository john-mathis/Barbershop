import type { AppProps } from "next/app";
import "../styles/styles.css";
import Navbar from "@/Components/Navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
