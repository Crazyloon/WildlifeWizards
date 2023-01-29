import * as Accordion from "@radix-ui/react-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React, { type PropsWithChildren } from "react";

const FrequentlyAsked = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-primary py-12 dark:bg-background">
      <h2 className="mb-2 text-center text-3xl text-white sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <span className="mb-8 text-center text-gray-300 dark:text-gray-400">
        Reach out to us if you have a question not seen here
      </span>
      <Accordion.Root
        type="single"
        defaultValue="q-1"
        collapsible
        className="w-full max-w-4xl rounded-md sm:px-12 lg:w-3/4 [&>:not(:first-child)]:border-t [&>:last-child>div]:border-b"
      >
        <Accordion.Item value="q-1">
          <AccordionTrigger>Which animals do you handle?</AccordionTrigger>
          <AccordionContent>
            Raccoons, squirrels, bats, beavers (both mountain and regular)
            chipmunks, opossums, all manner of birds, snakes, rats, mice,
            weasels, otters, nutria, moles, voles, bobcats, and coyotes. Call if
            you don&apos;t see your animal on the list
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item value="q-2">
          <AccordionTrigger>Where do you take the animals?</AccordionTrigger>
          <AccordionContent>
            We follow the guidelines laid out by the Department of Fish and
            Wildlife. Relocation when the option is available, some are required
            to be euthanized due to various reasons.
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item value="q-3">
          <AccordionTrigger>
            Do you repair damage caused by animals?
          </AccordionTrigger>
          <AccordionContent>
            We offer attic and crawlspace remediation, disinfecting, and
            exclusion services. No need for multiple companies, having to call
            around to get the best price. We got you covered
          </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
};

export default FrequentlyAsked;

type AccordionTriggerType = Pick<Accordion.AccordionTriggerProps, "children">;

const AccordionTrigger: React.FC<AccordionTriggerType> = ({ children }) => {
  return (
    <Accordion.Header className="bg-black/20 text-gray-100 dark:bg-purple-800/60">
      <Accordion.Trigger
        className={
          "group flex w-full items-center justify-between gap-4 p-4 text-left"
        }
      >
        {children}
        <div
          className={`flex h-5 w-5 items-center transition-transform duration-200 group-data-[state=open]:rotate-180`}
        >
          <FontAwesomeIcon icon={faChevronDown} aria-hidden />
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  );
};

const AccordionContent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Accordion.Content className="AccordionContent pr-8 pl-4 text-zinc-300 dark:bg-purple-900/10">
      <div className="pt-2 pb-4">{children}</div>
    </Accordion.Content>
  );
};

// const AccordionTrigger: React.ForwardRefExoticComponent<
//   React.RefAttributes<HTMLButtonElement>
// > = React.forwardRef(function AccordionTrigger(
//   { children, className, ...props }: AccordionForwardedType,
//   forwardedRef
// ) {
//   return (
//     <Accordion.Header className="bg-white/10 p-4 text-gray-100">
//       <Accordion.Trigger
//         className={"flex w-full items-center justify-between gap-4 text-left"}
//         {...props}
//         ref={forwardedRef}
//       >
//         {children}
//         <div className="flex h-5 w-5 items-center">
//           <FontAwesomeIcon icon={faChevronDown} aria-hidden />
//         </div>
//       </Accordion.Trigger>
//     </Accordion.Header>
//   );
// });

// const AccordionContent: React.ForwardRefExoticComponent<
//   React.RefAttributes<HTMLDivElement>
// > = React.forwardRef(function AccordionContent(
//   { children, className, ...props }: AccordionForwardedType,
//   forwardedRef
// ) {
//   return (
//     <Accordion.Content
//       className="bg-white/5 pt-2 pb-4 pr-8 pl-4 text-zinc-300"
//       {...props}
//       ref={forwardedRef}
//     >
//       <div className="AccordionContentText">{children}</div>
//     </Accordion.Content>
//   );
// });
