import type { ReactNode } from "react";

const Section = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className={`w-100 py-12 ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default Section;
