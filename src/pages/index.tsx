import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BookCard from "@/components/BookCard";
import Booklist from "@/components/Booklist";
import NavBar from "@/components/NavBar";
import HeroElement from "@/components/HeroElement";
import Feature from "@/components/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Outlast Bookshelf</title>
        <meta
          name="description"
          content="Your one way stop to infinite books and knowledge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main className={` ${inter.className}`}>
        <HeroElement></HeroElement>
        <Feature></Feature>
      </main>
    </>
  );
}
