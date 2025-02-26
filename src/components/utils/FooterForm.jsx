"use client";

import emailjs from "@emailjs/browser";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ModalPopup from "./ModalPopup";

export default function FooterForm({ isMiddle = false }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [error, setError] = useState(null);
  const [showModalPopup, setshowModalPopup] = useState(false);

  const sendFormData = async (data) => {
    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID,
        process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY
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
    <section className="relative ">
      <form
        onSubmit={handleSubmit(sendFormData)}
        className="footerform relative z-50 mb-2 flex max-w-xl items-stretch"
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
}
