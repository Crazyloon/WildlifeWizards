import type { ReactNode } from "react";

type CallToActionType = {
  heading: string;
  children: ReactNode;
};

const CallToAction = ({ heading, children }: CallToActionType) => {
  return (
    <>
      <h1 className="mb-2 text-center text-4xl leading-tight sm:text-5xl lg:text-6xl">
        {heading}
      </h1>
      <span className="text-lg text-font-primary">
        Making pests disappear, like <i className="text-fuchsia-500">magic!</i>
      </span>
      {children}
    </>
  );
};

export default CallToAction;
