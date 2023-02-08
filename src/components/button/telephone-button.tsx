const TelephoneButton = ({ phoneNumber }: { phoneNumber: string }) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="btn my-4 block w-fit rounded-md border border-slate-900 bg-purple-700 px-8 py-4 font-bold text-white shadow-lg shadow-purple-800/80 transition-all duration-200 hover:scale-105 hover:text-gray-50 hover:no-underline hover:drop-shadow-xl focus:text-white active:text-white active:focus:text-white dark:border-slate-100 dark:shadow-white/10 dark:hover:text-gray-50"
    >
      Call or Text Today
    </a>
  );
};

export default TelephoneButton;
