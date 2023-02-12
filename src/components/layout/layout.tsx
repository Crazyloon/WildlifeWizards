import Navigation from "../navigation/nav-bar";
import React, { type PropsWithChildren } from "react";
import Footer from "./footer";
import Head from "next/head";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Wildlife Wizards - Animal Control</title>
        <meta
          name="description"
          content="Licensed and Experienced Nuisance Wildlife Control Operator. We offer nuisance animal control, home inspections and exclusion, animal trapping and removal, and pesticide applications"
        />
        <meta name="author" content="Wildlife Wizards" />
        <meta property="og:url" content="https://wildlifewizards.com/" />
        <meta property="og:site_name" content="Wildlife Wizards" />
        <meta property="og:title" content="Wildlife Wizards" />
        <meta
          property="og:description"
          content="Making Pests Disappear, Like Magic!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://img1.wsimg.com/isteam/ip/dcd98dc2-25a7-44f7-baac-85dd6419b2b0/Untitled_Artwork%204.jpg"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Wildlife Wizards" />
        <meta name="twitter:description" content="Animal and Pest Control " />
        <meta
          name="twitter:image"
          content="https://img1.wsimg.com/isteam/ip/dcd98dc2-25a7-44f7-baac-85dd6419b2b0/Untitled_Artwork%204.jpg"
        />
        <meta name="twitter:image:alt" content="Wildlife Wizards" />
        <meta name="theme-color" content="#212730" />
        <meta
          name="google-site-verification"
          content="f9bbrNtkypRloh30QrxdFKbY4eHtYs3Q3Pti5HwLkEw"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-screen bg-background dark:text-font-primary">
        <header className="sticky top-0 z-50 h-11 w-full border-b border-black bg-background text-slate-900 shadow-lg dark:text-white lg:h-[70px]">
          <Navigation />
        </header>
        <div className="pb-60">{children}</div>
        <footer className="absolute bottom-0 h-60 w-full bg-neutral-300 text-slate-800 dark:bg-neutral-800 dark:text-white">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
