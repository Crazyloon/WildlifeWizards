const BusinessHours = () => {
  return (
    <>
      <h2 className="mb-2 text-center text-3xl text-white sm:text-4xl">
        Business Hours
      </h2>
      <i className="text-lg text-gray-300">
        Honestly, feel free to call anytime before 10pm
      </i>
      <div className="mt-8 grid grid-cols-2 [&>*]:px-4 [&>:nth-child(even)]:text-left [&>:nth-child(odd)]:text-right">
        <span>Monday - Saturday:</span>
        <span>8:00AM – 6:30PM</span>
        <span>Sunday:</span>
        <span>8:00AM – 12:00PM</span>
      </div>
    </>
  );
};

export default BusinessHours;
