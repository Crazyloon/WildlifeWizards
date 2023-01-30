import Navigation from "../navigation/nav-bar";
import React, { type PropsWithChildren } from "react";
import Footer from "./footer";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-background dark:text-font-primary">
      <header className="sticky top-0 z-50 h-11 w-full text-slate-900 backdrop-blur-md dark:text-white lg:h-[70px]">
        <Navigation />
      </header>
      <div className="pb-60">{children}</div>
      <footer className="absolute bottom-0 w-full bg-neutral-300 text-slate-800 dark:bg-neutral-800 dark:text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
