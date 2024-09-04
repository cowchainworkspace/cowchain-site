"use client";

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function ServiceContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const sendFormData = async (data) => {
    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_REACT_APP_SERVICE_ID,
        process.env.NEXT_PUBLIC_REACT_APP_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY
      );
    } catch (e) {
      /* empty */
    }
    reset();
    // setSendSuccess(true);
    setModalOpen(false);
  };

  const checkboxes = [
    "Web Development",
    "smart contracts",
    "blockchain development",
    "mobile development",
    "dapp development",
    "consultancy",
    "Other"
  ];

  const radioBtns = ["$2-3K", "$5-10K", "$10K <", "Other"];

  return (
    <div className="grid h-full min-w-full max-w-7xl border-b border-b-th-fade bg-black md:grid-cols-2 ">
      <Image
        alt=""
        width={488}
        height={480}
        className="absolute -left-2 -translate-y-72"
        src={"/assets/services/contact/mobile.png"}
      />
      <div className="z-20 border-r border-r-th-fade p-4 md:p-8 lg:p-16">
        <div className=" grid-cols-1 ">
          <h3 className=" mt-10 max-w-[400px] cursor-default text-left font-roc text-3xl  uppercase leading-none md:text-[54px]">
            have project in mind?
          </h3>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(sendFormData)}
        className="userform z-10 mt-6 flex grid-cols-1 flex-col gap-y-6 p-4 md:p-8 lg:p-16"
      >
        <div>
          <p className="text-white">Services</p>
          <div className="services_group_wrapper mt-4 flex flex-wrap gap-2">
            {checkboxes.map((checkbox, index) => (
              <label key={index} className="form_label_for_check">
                <input
                  type="checkbox"
                  name="services"
                  className="form_check"
                  value={checkbox}
                  {...register("services", { required: true })}
                />
                <div className="form_label_div">{checkbox}</div>
              </label>
            ))}
          </div>
        </div>
        {errors.services?.type === "required" && (
          <span className="error-span">
            Please, select how we can help you!
          </span>
        )}
        <div>
          <p className="text-white">Budget (optional)</p>
          <div className="services_group_wrapper mt-4 flex flex-wrap gap-2">
            {radioBtns.map((radioBtn, index) => (
              <label key={index * 10} className="form_label_for_check">
                <input
                  type="radio"
                  name="services"
                  className="form_check"
                  value={radioBtn}
                  {...register("budget", {})}
                />
                <div className="form_label_div">{radioBtn}</div>
              </label>
            ))}
          </div>
        </div>
        <input
          className="text_input"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && (
          <span className="error-span">Please, enter your email!</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="error-span">
            Please, enter correct email address!
          </span>
        )}
        <input
          className="text_input"
          placeholder="Project details (optional)"
          type="text"
          defaultValue=""
          {...register("details")}
        />
        <button type="submit" className="btn-submit my-4">
          Submit the form
        </button>
      </form>
    </div>
  );
}
