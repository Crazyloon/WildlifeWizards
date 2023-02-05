import { useReducer, useState } from "react";
import { z } from "zod";

const formSchema = z.object({
  fName: z.string().trim().min(2).max(25),
  lName: z.string().trim().min(2).max(25),
  phone: z.string().min(10).max(15),
  address: z.string(),
  comment: z.string(),
  // errors: z.object({
  //   fNameError: z.string(),
  //   lNameError: z.string(),
  //   phoneError: z.string(),
  //   addressError: z.string(),
  //   commentError: z.string(),
  // }),
});

const RequestServiceForm = () => {
  const [errorMessage, setErrorMessage] = useState(
    "First Name must be filled out."
  );
  const [form, updateForm] = useReducer(formReducer, initialFormState);

  const handleSubmit = () => {
    return null;
  };

  return (
    <>
      <form className="m-auto grid max-w-2xl grid-rows-[8] px-4 sm:px-8">
        <div className="row-start-1 flex w-full flex-col py-2">
          <label>First Name</label>
          <input
            value={form.fName}
            onChange={(e) =>
              updateForm({
                type: ActionType.UPDATE_FNAME,
                data: {
                  ...form,
                  fName: e.target.value,
                  errors: { ...initialErrorState },
                },
              })
            }
            type="text"
            className="h-9 rounded-md border border-secondary bg-white px-2 py-2 text-black"
          ></input>
        </div>
        <div className="row-start-2 flex w-full flex-col py-2">
          <label>Last Name</label>
          <input
            value={form.lName}
            onChange={(e) =>
              updateForm({
                type: ActionType.UPDATE_LNAME,
                data: { ...form, lName: e.target.value },
              })
            }
            type="text"
            className="h-9 rounded-md border border-secondary bg-white px-2 py-2 text-black"
          ></input>
        </div>
        <div className="row-start-3 flex w-full flex-col py-2">
          <label>Phone Number</label>
          <input
            value={form.phone}
            onChange={(e) =>
              updateForm({
                type: ActionType.UPDATE_PHONE,
                data: { ...form, phone: e.target.value },
              })
            }
            type="tel"
            className="h-9 rounded-md border border-secondary bg-white px-2 py-2 text-black"
          ></input>
        </div>
        <div className="row-start-4 flex w-full flex-col py-2">
          <label>Address</label>
          <input
            value={form.address}
            onChange={(e) =>
              updateForm({
                type: ActionType.UPDATE_ADDRESS,
                data: { ...form, address: e.target.value },
              })
            }
            type="text"
            id="autocomplete"
            className="h-9 rounded-md border border-secondary bg-white px-2 py-2 text-black"
          ></input>
        </div>
        <div className="row-start-5 flex w-full flex-col py-2">
          <label>How can we help you?</label>
          <textarea
            value={form.comment}
            onChange={(e) =>
              updateForm({
                type: ActionType.UPDATE_COMMENT,
                data: { ...form, comment: e.target.value },
              })
            }
            className="h-36 rounded-md border border-secondary bg-white px-2 py-2 text-black sm:h-24"
          ></textarea>
        </div>
        {errorMessage ? (
          <div className="row-start-6 w-full text-red-500">{errorMessage}</div>
        ) : null}
        <div className="row-start-7">
          <button className="w-full rounded-md bg-primary px-8 py-4 text-white hover:bg-primary-hover dark:bg-primary dark:hover:bg-primary-hover">
            Submit
          </button>
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

enum ActionType {
  UPDATE_FNAME = "UPDATE_FNAME",
  UPDATE_LNAME = "UPDATE_LNAME",
  UPDATE_PHONE = "UPDATE_PHONE",
  UPDATE_ADDRESS = "UPDATE_ADDRESS",
  UPDATE_COMMENT = "UPDATE_COMMENT",
}
interface FormState {
  fName: string;
  lName: string;
  phone: string;
  address: string;
  comment: string;
  errors: {
    fNameError: string;
    lNameError: string;
    phoneError: string;
    addressError: string;
    commentError: string;
  };
}

interface FormAction {
  type: ActionType;
  data: FormState;
}

const initialErrorState = {
  fNameError: "",
  lNameError: "",
  phoneError: "",
  addressError: "",
  commentError: "",
};

const initialFormState = {
  fName: "",
  lName: "",
  phone: "",
  address: "",
  comment: "",
  errors: { ...initialErrorState },
};

function formReducer(state: FormState, action: FormAction) {
  const { type, data } = action;

  switch (type) {
    case ActionType.UPDATE_FNAME:
      return {
        ...state,
        fName: data.fName,
        errors: { ...data.errors, fNameError: "" },
      };
    case ActionType.UPDATE_LNAME:
      return {
        ...state,
        lName: data.lName,
        errors: { ...data.errors, lNameError: "" },
      };
    case ActionType.UPDATE_PHONE:
      return {
        ...state,
        phone: data.phone,
        errors: { ...data.errors, phoneError: "" },
      };
    case ActionType.UPDATE_ADDRESS:
      return {
        ...state,
        address: data.address,
        errors: { ...data.errors, addressError: "" },
      };
    case ActionType.UPDATE_COMMENT:
      return {
        ...state,
        comment: data.comment,
        errors: { ...data.errors, commentError: "" },
      };
    default:
      return state;
  }
}
