import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Navbar } from "./Navbar.tsx";
import { Footer } from "./Footer.tsx";

export type Props = {
  children: ComponentChildren;
};

export const Container = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta name="image" content="/content/images/2018/05/digioli-logo.svg" />
        <meta itemprop="name" content="Digioli.co.uk" />
        <meta
          itemprop="description"
          content="My little blog of Javascript, some CSS, Databases, Mongo, Docker, TDD, BDD, Blockchain, Data structures, and anything else I'm into"
        />
        <meta
          itemprop="image"
          content="/content/images/2018/05/digioli-logo.svg"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Digioli.co.uk" />
        <meta
          name="twitter:description"
          content="My little blog of Javascript, some CSS, Databases, Mongo, Docker, TDD, BDD, Blockchain, Data structures, and anything else I'm into"
        />
        <meta name="twitter:site" content="@roppa_uk" />
        <meta name="twitter:creator" content="@roppa_uk" />
        <meta
          name="twitter:image:src"
          content="/content/images/2018/05/digioli-logo.svg"
        />
        <meta name="og:title" content="Digioli.co.uk" />
        <meta
          name="og:description"
          content="My little blog of Javascript, some CSS, Databases, Mongo, Docker, TDD, BDD, Blockchain, Data structures, and anything else I'm into"
        />
        <meta
          name="og:image"
          content="/content/images/2018/05/digioli-logo.svg"
        />
        <meta name="og:url" content="https://digioli.co.uk" />
        <meta name="og:site_name" content="Digioli.co.uk" />
        <meta name="og:locale" content="en_GB" />
        <meta name="og:type" content="website" />
        <meta
          name="monetization"
          content="1Jo6gFjnkXMC2Lt3PbCrSJ9bcbrZLQKnF2"
        />
        <link href="global.css" rel="stylesheet" />
      </Head>
      <Navbar />
      <div class="flex flex-col h-screen">
        {children}
        <Footer />
      </div>
    </>
  );
};
