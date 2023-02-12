const PhoneNumber = ({
  phoneNumber,
  className,
}: {
  phoneNumber: string;
  className?: string;
}) => {
  return (
    <span
      className={`text-center dark:text-white ${className ? className : ""}`}
    >
      {phoneNumber}
    </span>
  );
};

export default PhoneNumber;
