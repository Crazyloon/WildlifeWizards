// this component uses a wrapper div around the Step container to make the grid gap appear to
// have a line perfectly centered between each component. Use the outer-most div to
// control the color of the grid gap

const OneByThree = () => {
  return (
    <>
      <h2 className="mb-8 text-center text-3xl text-white sm:text-4xl">
        Free of Pests in Three Easy Steps
      </h2>
      <div className="mx-8 max-w-7xl bg-gray-500 sm:mx-20 md:mx-32 lg:mx-auto">
        <div className="m-auto grid gap-[1px] lg:grid-cols-3">
          <Step
            heading="Inspection"
            content="We start with a full home inspection. Even if you know what
                animal it is and where its getting in, conducting a full
                inspection allows us to find all of the current and potential
                access points. Thorough inspections allow our Wizards to
                generate an accurate price for exclusion, and provides you and
                your family with peace of mind."
          />
          <Step
            heading="Removal"
            content="Once the animal has been identified, we can set up traps and
                provide you with a plan to prevent reentry. If traps aren't
                your speed, we can seal all entry points and install a one way
                door, allowing the animal to let itself out."
          />
          <Step
            heading="Exclusion"
            content="After your home is free of your furry friend, our Wizards will
                ensure the animal can't get back in by sealing all entry
                points discovered during inspection. We can also provide
                continued monitoring to protect your home with bait stations and
                insect sprays. This service comes with a number of perks, which
                will be discussed on site."
          />
        </div>
      </div>
    </>
  );
};

export default OneByThree;

const Step = ({ heading, content }: { heading: string; content: string }) => {
  return (
    <div className="flex justify-center bg-gray-600">
      <div className="flex max-w-[500px] flex-col items-center p-6">
        <h3 className="mb-4 text-center">{heading}</h3>
        <p className="text-center">{content}</p>
      </div>
    </div>
  );
};
