import Navigation from "../navigation/nav-bar";
import React, { type PropsWithChildren } from "react";
import Footer from "./footer";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className="fixed top-0 z-50 h-11 w-full bg-white/50 text-slate-900 backdrop-blur-md dark:bg-neutral-800/90 dark:text-white lg:h-[70px]">
        <Navigation />
      </header>
      <div className="mt-11 lg:mt-[70px]">{children}</div>
      <footer className="bg-neutral-300 text-slate-800 dark:bg-neutral-800 dark:text-white">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
