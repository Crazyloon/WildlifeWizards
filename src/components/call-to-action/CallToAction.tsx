import type { ReactNode } from "react";

type CallToActionType = {
  heading: string;
  slogan: string;
  children: ReactNode;
};

const CallToAction = ({ heading, slogan, children }: CallToActionType) => {
  return (
    <section className="flex flex-col items-center gap-2 bg-slate-200 py-12 dark:bg-slate-800">
      <h1 className="text-center leading-tight">{heading}</h1>
      <i className="text-lg text-zinc-800 dark:text-zinc-400">{slogan}</i>
      {children}
    </section>
  );
};

export default CallToAction;
