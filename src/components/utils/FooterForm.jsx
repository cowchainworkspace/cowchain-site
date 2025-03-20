"use client";

import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ModalPopup from "./ModalPopup";

export default function FooterForm({ classes = "" }) {
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
    <section className={classes}>
      <form
        onSubmit={handleSubmit(sendFormData)}
        className={cn("footerform mb-2 flex h-12 max-w-xl items-stretch")}
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
        <button type="submit" className={cn("btn-submit")}>
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
