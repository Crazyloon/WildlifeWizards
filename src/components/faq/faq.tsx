import * as Accordion from "@radix-ui/react-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React, { type PropsWithChildren } from "react";
import Link from "next/link";

const FrequentlyAsked = () => {
  return (
    <>
      <h2 className="mb-2 text-center text-3xl text-white sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <span className="mb-8 text-center text-gray-300 dark:text-gray-400">
        Call us if you don&apos;t see your question below.
      </span>
      <Accordion.Root
        type="single"
        collapsible
        className="w-full max-w-4xl rounded-md lg:w-3/4 [&>:not(:first-child)]:border-t [&>:last-child>div]:border-b"
      >
        <Accordion.Item value="q-1">
          <AccordionTrigger>Which animals do you handle?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-4">
              As licensed Wildlife Control Operators, we are authorized to
              handle virtually all small game and unclassified wildlife,
              including raccoons, squirrels, bats, beavers (both mountain and
              regular) chipmunks, opossums, all manner of birds, snakes, rats,
              mice, weasels, otters, nutria, moles, voles, bobcats, and coyotes.
            </p>
            <p className="mb-4">
              We are not authorized to handle big game animals, such as elk,
              deer, cougar, bear, or wolf.
            </p>
            <p>
              If you don&apos;t see your animal on this list, call us to learn
              about your options.
            </p>
          </AccordionContent>
        </Accordion.Item>
        {/* <Accordion.Item value="q-2">
          <AccordionTrigger>Are you experienced?</AccordionTrigger>
          <AccordionContent>
            <p>
              Absolutely! We&apos;ve been helping people with wildlife and
              insects in Washington State for over 7 years. All of our{" "}
              <abbr title="Wildlife Control Operator">WCO</abbr>s are fully
              licensed and certified by the{" "}
              <abbr title="Washington Department of Fish and Wildlife">
                WDFW
              </abbr>
              .
            </p>
          </AccordionContent>
        </Accordion.Item> */}
        <Accordion.Item value="q-3">
          <AccordionTrigger>Where do you take the animals?</AccordionTrigger>
          <AccordionContent>
            <p>
              We follow the guidelines laid out by the{" "}
              <a href="https://wdfw.wa.gov/species-habitats/living/nuisance-wildlife">
                Department of Fish and Wildlife
              </a>
              . We will relocate animals when advisable, however, some are
              required to be euthanized, and will be done so in accordance with
              the American Veterinary Medical Association.
            </p>
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item value="q-4">
          <AccordionTrigger>
            Do you repair damage caused by animals?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              We offer attic and crawlspace remediation, disinfecting, and
              exclusion services. You won&apos;t need to call multiple
              companies, searching for the best price. We&apos;ve got you
              covered.
            </p>
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item value="q-5">
          <AccordionTrigger>Do you remove dead animals?</AccordionTrigger>
          <AccordionContent>
            <p>
              Yes. We can remove and dispose of dead animals. Whether
              they&apos;re in your house or on your property. We can also help
              over up or remove fowl odors as well.
            </p>
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item value="q-6">
          <AccordionTrigger>How much do you charge?</AccordionTrigger>
          <AccordionContent>
            <p>
              Because every job has unique requirements, we can&apos;t offer
              flat rates. Some situations can be quoted over the phone, but in
              most cases, one of our professionals will travel to your location
              to provide a through inspection and quote you for recommended
              services.
            </p>
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item value="q-7">
          <AccordionTrigger>
            I want to trap an animal myself, can you help me?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              While the laws in Washington State provide significant allowance
              for citizens to resolve problems caused by wildlife on their own,
              It can be dangerous to handle wildlife without proper training and
              equipment. If you insist on dealing with nuisance animals on your
              own, please check out our <Link href={"/diy"}>DIY</Link> page for
              more information.
            </p>
          </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};

export default FrequentlyAsked;

type AccordionTriggerType = Pick<Accordion.AccordionTriggerProps, "children">;

const AccordionTrigger: React.FC<AccordionTriggerType> = ({ children }) => {
  return (
    <Accordion.Header className="bg-black/20 text-gray-100 dark:bg-purple-800/60">
      <Accordion.Trigger
        className={"group grid w-full grid-cols-12 items-center p-4"}
      >
        <span className="col-span-11 col-start-1 text-left">{children}</span>
        <div
          className={`h-5 w-5 justify-self-end transition-transform duration-200 group-data-[state=open]:rotate-180`}
        >
          <FontAwesomeIcon icon={faChevronDown} aria-hidden />
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  );
};

const AccordionContent: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Accordion.Content className="AccordionContent px-4 text-zinc-300 dark:bg-purple-900/10">
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
