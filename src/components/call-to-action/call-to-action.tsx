import type { ReactNode } from "react";

type CallToActionType = {
  heading: string;
  slogan: string;
  children: ReactNode;
};

const CallToAction = ({ heading, slogan, children }: CallToActionType) => {
  return (
    <>
      <h1 className="mb-2 text-center text-4xl leading-tight sm:text-5xl lg:text-6xl">
        {heading}
      </h1>
      <i className="text-lg text-font-primary">{slogan}</i>
      {children}
    </>
  );
};

export default CallToAction;
