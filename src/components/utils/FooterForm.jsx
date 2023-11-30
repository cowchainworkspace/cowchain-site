import React from "react";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";
import { useState } from "react";
import ModalPopup from "./ModalPopup";

const FooterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [error, setError] = useState(null);
  const [showModalPopup, setshowModalPopup] = useState(false);

  const sendFormData = async (data, error) => {
    try {
      send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      reset();
      setshowModalPopup(true);
    } catch (e) {
      setError(e);
      reset();
      setshowModalPopup(true);
    }
  };
  return (
    <section>
      <form
        onSubmit={handleSubmit(sendFormData)}
        className="footerform mb-2 flex max-w-xl items-stretch"
      >
        <input
          type="email"
          className="text_input flex-1"
          placeholder="E-mail"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        <button type="submit" className="btn-submit xl:px-12">
          Submit
        </button>
      </form>
      {errors.email?.type === "required" && (
        <span className="error-span">Please, enter your email!</span>
      )}
      {errors.email?.type === "pattern" && (
        <span className="error-span">Please, enter a valid email address!</span>
      )}
      <ModalPopup
        isOpen={showModalPopup}
        toggleOpen={() => setshowModalPopup(!showModalPopup)}
        isError={error !== null}
      />
    </section>
  );
};

export default FooterForm;
