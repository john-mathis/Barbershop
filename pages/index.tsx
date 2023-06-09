import Head from "next/head";
import { Inter } from "next/font/google";
import Testimonials from "@/Components/Testimonials/Testimonials";
import Hero from "@/Components/Hero/Hero";
import Socials from "@/Components/Socials/Socials";
import Map from "@/Components/Map/Map";
import Solutions from "@/Components/Solutions/Solutions";
import Logo from "../public/assets/logo.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Prime Barbershop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/assets/logo.png" />
      </Head>
      <main>
        <Hero />
        <Solutions />
        <Socials />
        <Testimonials />
        <Map />
      </main>
    </>
  );
}
