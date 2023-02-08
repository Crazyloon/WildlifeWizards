import { type FormEvent, useReducer, useState } from "react";
import { z } from "zod";

const RequestServiceForm = () => {
  const [errorMessages, setErrorMessages] = useState(initialErrorState);
  const [form, updateForm] = useReducer(updateFormReducer, initialFormState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData: formType;
    try {
      formData = formSchema.parse(form);

      // Submit formData
      //api.send(formData);
      updateForm({
        type: ActionType.RESET_FORM,
        data: { ...form },
      });
    } catch (error) {
      // If we get some zod errors, we parse them and notify the user
      let errors = { ...errorMessages };
      if (error instanceof z.ZodError) {
        if (error.issues.length) {
          error.issues.forEach((iss) => {
            // get name of the input that caused the error
            const [path] = iss.path;
            // apply the error matching the path to our temp error object
            // if we already added an error for this path do not overwrite it
            if (path && !errors[path.toString() + "Error"]) {
              errors = {
                ...errors,
                [path.toString() + "Error"]: iss.message,
              };
            }
          });

          errors.formError =
            "One or more errors occurred while processing the form. Please review them and try again.";

          // Apply the errors to the form
          setErrorMessages(errors);
        }
      }
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    // Check for errors in the input we just blurred
    const name = e.target.name;
    const result = formSchema.safeParse(form);

    if (!result.success) {
      const error = result.error.issues.find((iss) => iss.path.includes(name));
      if (error != undefined) {
        setErrorMessages({ ...errorMessages, [name + "Error"]: error.message });
      }
    }
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    // Clear errors for the currently focused input
    const name = e.target.name;
    setErrorMessages({ ...errorMessages, [name + "Error"]: "" });
  };

  function updateFormReducer(state: FormState, action: FormAction) {
    const { type, data } = action;

    switch (type) {
      case ActionType.UPDATE_FNAME:
        setErrorMessages({ ...errorMessages, fNameError: "", formError: "" });

        return {
          ...state,
          fName: data.fName,
        };
      case ActionType.UPDATE_LNAME:
        setErrorMessages({ ...errorMessages, lNameError: "", formError: "" });

        return {
          ...state,
          lName: data.lName,
        };
      case ActionType.UPDATE_PHONE:
        setErrorMessages({ ...errorMessages, phoneError: "", formError: "" });

        return {
          ...state,
          phone: data.phone,
        };
      case ActionType.UPDATE_EMAIL:
        setErrorMessages({ ...errorMessages, emailError: "", formError: "" });

        return {
          ...state,
          email: data.email,
        };
      case ActionType.UPDATE_ADDRESS:
        setErrorMessages({ ...errorMessages, addressError: "", formError: "" });

        return {
          ...state,
          address: data.address,
        };
      case ActionType.UPDATE_COMMENT:
        setErrorMessages({ ...errorMessages, commentError: "", formError: "" });

        return {
          ...state,
          comment: data.comment,
        };
      case ActionType.RESET_FORM:
        setErrorMessages({ ...initialErrorState });

        return { ...initialFormState };
      default:
        return state;
    }
  }

  return (
    <>
      <form
        className="m-auto grid max-w-2xl grid-rows-[8] px-4 sm:px-8"
        onSubmit={(e) => handleSubmit(e)}
        aria-label="Request service"
      >
        <div className="row-start-1 my-2 flex w-full flex-col">
          <label htmlFor="fName">
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            placeholder="First Name (Required)"
            required
            aria-required="true"
            name="fName"
            id="fName"
            value={form.fName}
            onChange={(e) =>
              updateForm({
                type: ActionType.UPDATE_FNAME,
                data: {
                  ...form,
                  fName: e.target.value,
                },
              })
            }
            onBlur={(e) => handleBlur(e)}
            onFocus={(e) => handleFocus(e)}
            type="text"
            className="h-9 rounded-md border border-secondary bg-white px-2 py-2 text-black"
          ></input>
          {errorMessages && errorMessages.fNameError ? (
            <div className="w-full text-red-600 dark:text-red-500">
              {errorMessages.fNameError}
            </div>
          ) : null}
        </div>
        <div className="row-start-2 my-2 flex w-full flex-col">
          <label htmlFor="lName">
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            placeholder="Last Name (Required)"
            required
            aria-required="true"
            name="lName"
            id="lName"
            value={form.lName}
            onChange={(e) =>
              updateForm({
                type: ActionType.UPDATE_LNAME,
                data: { ...form, lName: e.target.value },
              })
            }
            onBlur={(e) => handleBlur(e)}
            onFocus={(e) => handleFocus(e)}
            type="text"
            className="h-9 rounded-md border border-secondary bg-white px-2 py-2 text-black"
          ></input>
          {errorMessages && errorMessages.lNameError ? (
            <div className="w-full text-red-600 dark:text-red-500">
              {errorMessages.lNameError}
            </div>
          ) : null}
        </div>
        <div className="row-start-3 my-2 flex w-full flex-col">
          <label htmlFor="phone">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            placeholder="Phone Number (Required)"
            required
            aria-required="true"
            name="phone"
            id="phone"
            value={form.phone}
            onChange={(e) =>
              updateForm({
                type: ActionType.UPDATE_PHONE,
                data: { ...form, phone: e.target.value },
              })
            }
            onBlur={(e) => handleBlur(e)}
            onFocus={(e) => handleFocus(e)}
            type="tel"
            className="h-9 rounded-md border border-secondary bg-white px-2 py-2 text-black"
          ></input>
          {errorMessages && errorMessages.phoneError ? (
            <div className="w-full text-red-600 dark:text-red-500">
              {errorMessages.phoneError}
            </div>
          ) : null}
        </div>
        <div className="row-start-4 my-2 flex w-full flex-col">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            name="email"
            id="email"
            value={form.email}
            onChange={(e) =>
              updateForm({
                type: ActionType.UPDATE_EMAIL,
                data: { ...form, email: e.target.value },
              })
            }
            onBlur={(e) => handleBlur(e)}
            onFocus={(e) => handleFocus(e)}
            type="email"
            className="h-9 rounded-md border border-secondary bg-white px-2 py-2 text-black"
          ></input>
          {errorMessages && errorMessages.emailError ? (
            <div className="w-full text-red-600 dark:text-red-500">
              {errorMessages.emailError}
            </div>
          ) : null}
        </div>
        <div className="row-start-5 my-2 flex w-full flex-col">
          <label htmlFor="address">Address, City, State, Zip</label>
          <input
            placeholder="Address, City, State, Zip"
            name="address"
            id="address"
            value={form.address}
            onChange={(e) =>
              updateForm({
                type: ActionType.UPDATE_ADDRESS,
                data: { ...form, address: e.target.value },
              })
            }
            onBlur={(e) => handleBlur(e)}
            onFocus={(e) => handleFocus(e)}
            type="text"
            className="h-9 rounded-md border border-secondary bg-white px-2 py-2 text-black"
          ></input>
          {errorMessages && errorMessages.addressError ? (
            <div className="w-full text-red-600 dark:text-red-500">
              {errorMessages.addressError}
            </div>
          ) : null}
        </div>
        <div className="row-start-6 my-2 flex w-full flex-col">
          <label htmlFor="comment">How can we help you?</label>
          <textarea
            placeholder="I hear scratching noises in my walls"
            name="comment"
            id="comment"
            value={form.comment}
            onChange={(e) =>
              updateForm({
                type: ActionType.UPDATE_COMMENT,
                data: { ...form, comment: e.target.value },
              })
            }
            onBlur={(e) => handleBlur(e)}
            onFocus={(e) => handleFocus(e)}
            className="h-36 rounded-md border border-secondary bg-white px-2 py-2 text-black sm:h-24"
          ></textarea>
          {errorMessages && errorMessages.commentError ? (
            <div className="w-full text-red-600 dark:text-red-500">
              {errorMessages.commentError}
            </div>
          ) : null}
        </div>
        {errorMessages && errorMessages.formError ? (
          <div className="row-start-7 mt-4 mb-4 w-full rounded-md border border-red-400 bg-red-200 p-4 text-red-600 dark:text-red-500">
            {errorMessages.formError}
          </div>
        ) : null}
        <div className="row-start-8 mt-2">
          <button className="w-full rounded-md bg-primary px-8 py-4 text-white hover:bg-primary-hover dark:bg-primary dark:hover:bg-primary-hover">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default RequestServiceForm;

const formSchema = z.object({
  fName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(50, "Please use a nickname instead"),
  lName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .max(50, "Please use an initial instead"),
  phone: z
    .string()
    .trim()
    .min(10, "Full 10-digit phone number is required")
    .max(15, "Your phone number is longer than it should be")
    .regex(
      /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
      "Check your format and try again"
    ),
  email: z
    .string()
    .trim()
    .email("Invalid email format")
    .optional()
    .or(z.literal("")),
  address: z
    .string()
    .trim()
    .max(
      100,
      "Your address is unreasonably long. Please call us if this seems in error"
    )
    .optional(),
  comment: z
    .string()
    .trim()
    .max(
      500,
      "Please limit your description to 500 characters. We can discuss details in person, or on the phone"
    )
    .optional(),
});

type formType = z.infer<typeof formSchema>;

enum ActionType {
  UPDATE_FNAME = "UPDATE_FNAME",
  UPDATE_LNAME = "UPDATE_LNAME",
  UPDATE_PHONE = "UPDATE_PHONE",
  UPDATE_EMAIL = "UPDATE_EMAIL",
  UPDATE_ADDRESS = "UPDATE_ADDRESS",
  UPDATE_COMMENT = "UPDATE_COMMENT",
  RESET_FORM = "RESET_FORM",
}
interface FormState {
  fName: string;
  lName: string;
  phone: string;
  email: string;
  address: string;
  comment: string;
}

interface FormAction {
  type: ActionType;
  data: FormState;
}

type InitialErrorStateType = {
  [index: string]: string;
};

const initialErrorState: InitialErrorStateType = {
  fNameError: "",
  lNameError: "",
  phoneError: "",
  emailError: "",
  addressError: "",
  commentError: "",
  formError: "",
};

const initialFormState = {
  fName: "",
  lName: "",
  phone: "",
  email: "",
  address: "",
  comment: "",
};
