import type { ReactNode } from "react";

type CallToActionType = {
  heading: string;
  slogan: string;
  children: ReactNode;
};

const CallToAction = ({ heading, slogan, children }: CallToActionType) => {
  return (
    <>
      <h1 className="mb-2 text-center text-4xl leading-tight sm:text-5xl">
        {heading}
      </h1>
      <i className="text-lg text-zinc-800 dark:text-zinc-400">{slogan}</i>
      {children}
    </>
  );
};

export default CallToAction;
