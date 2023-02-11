const BusinessHours = ({
  lightBackground = false,
  includeSubHeading = true,
}) => {
  return (
    <>
      <h2
        className={`mb-2 text-center text-3xl sm:text-4xl ${
          lightBackground ? "text-font-primary" : "text-white"
        }`}
      >
        Business Hours
      </h2>
      {includeSubHeading ? (
        <SubHeading lightBackground={lightBackground} />
      ) : null}
      <div className="mt-8 grid grid-cols-2 [&>*]:px-4 [&>:nth-child(even)]:text-left [&>:nth-child(odd)]:text-right">
        <span>Monday - Saturday:</span>
        <span>8:00AM – 6:30PM</span>
        <span>Sunday:</span>
        <span>8:00AM – 12:00PM</span>
      </div>
    </>
  );
};

const SubHeading = ({ lightBackground = false }) => {
  return (
    <i
      className={`block text-center text-lg ${
        lightBackground ? "text-font-primary" : "text-gray-300"
      }`}
    >
      Honestly, feel free to call anytime before 10pm
    </i>
  );
};

export default BusinessHours;
