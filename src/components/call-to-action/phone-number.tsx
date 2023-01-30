const PhoneNumber = ({
  phoneNumber,
  className,
}: {
  phoneNumber: string;
  className?: string;
}) => {
  return (
    <span
      className={`text-center text-sm dark:text-white md:text-lg ${
        className ? className : ""
      }`}
    >
      {phoneNumber}
    </span>
  );
};

export default PhoneNumber;
