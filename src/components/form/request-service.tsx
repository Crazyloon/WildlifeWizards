const RequestServiceForm = () => {
  return (
    <>
      <form className="grid grid-rows-[8] px-4 sm:px-8">
        <div className="row-start-1 flex w-full flex-col py-2">
          <label>First Name</label>
          <input
            type="text"
            className="h-9 rounded-md border border-secondary border-purple-800 bg-white px-2 py-2 text-black"
          ></input>
        </div>
        <div className="row-start-2 flex w-full flex-col py-2">
          <label>Last Name</label>
          <input
            type="text"
            className="h-9 rounded-md border border-secondary border-purple-800 bg-white px-2 py-2 text-black"
          ></input>
        </div>
        <div className="row-start-3 flex w-full flex-col py-2">
          <label>Phone Number</label>
          <input
            type="text"
            className="h-9 rounded-md border border-secondary border-purple-800 bg-white px-2 py-2 text-black"
          ></input>
        </div>
        <div className="row-start-4 flex w-full flex-col py-2">
          <label>Address</label>
          <input
            type="text"
            id="autocomplete"
            className="h-9 rounded-md border border-secondary border-purple-800 bg-white px-2 py-2 text-black"
          ></input>
        </div>
        {/* <div className="row-start-5 flex w-full flex-col py-2">
          <label>City</label>
          <input
            type="text"
            className="text-black h-9 rounded-md border border-secondary border-purple-800 bg-white"
          ></input>
        </div>
        <div className="row-start-6 flex w-full flex-col py-2">
          <label>State</label>
          <input
            type="text"
            className="text-black h-9 rounded-md border border-secondary border-purple-800 bg-white"
          ></input>
        </div>
        <div className="row-start-7 flex w-full flex-col py-2">
          <label>Zip</label>
          <input
            type="text"
            className="text-black h-9 rounded-md border border-secondary border-purple-800 bg-white"
          ></input>
        </div> */}
        <div className="row-start-8 flex w-full flex-col py-2">
          <label>How can we help you?</label>
          <textarea className="h-36 rounded-md border border-secondary border-purple-800 bg-white px-2 py-2 text-black sm:h-24"></textarea>
        </div>
      </form>
      {/* {process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_SECRET ? (
        <script
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_SECRET}&libraries=places&callback=initAutoComplete`}
        ></script>
      ) : null} */}
    </>
  );
};

export default RequestServiceForm;
