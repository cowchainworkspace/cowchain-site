"use client";

import Popup from "reactjs-popup";
import modal_close from "../../assets/homepage/modal_close.svg";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import bg from "./../../assets/homepage/form/formBg.svg";

export default function ContactForm({ modalOpen, setModalOpen }) {
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
      console.log(process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY);
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

  const radioBtns = ["$10-15K", "$25-35K", "$50K +", "Other"];
  return (
    <Popup
      open={modalOpen}
      closeOnDocumentClick
      onClose={() => setModalOpen(false)}
      className="modal-form relative"
      lockScroll
      nested
    >
      <Image
        className="absolute left-[-900px] top-[-900px] z-[-1] min-h-[2000px] min-w-[2000px]"
        alt=""
        src={bg}
      />

      <div className="modal relative h-full min-w-full max-w-7xl overflow-y-auto">
        <div className="flex">
          <Image
            className="ml-auto w-8 cursor-pointer"
            alt=""
            onClick={() => setModalOpen(false)}
            src={modal_close}
          />
        </div>

        <div className="flex w-[633px] flex-col items-center gap-[32px]">
          <div className="">
            <p className="mb-[16px] text-center text-[60px] font-bold text-white md:text-5xl lg:text-left">
              CONTACT US
            </p>
            <p
              style={{
                color: "rgba(187, 187, 187, 0.8)"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(sendFormData)}
            className="flex w-full flex-col gap-y-[32px] "
          >
            <div className="flex h-[170px] gap-x-[16px] ">
              <div className="flex w-full flex-col justify-between gap-y-[16px]">
                <input
                  className="contact-input-overlay h-full"
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="error-span">
                    Please, enter your full name!
                  </span>
                )}
                <input
                  className="contact-input-overlay h-full"
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                  })}
                />
                {errors.email?.type === "required" && (
                  <span className="error-span">Please, enter your email!</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="error-span">
                    Please, enter a correct email address!
                  </span>
                )}
                <input
                  className="contact-input-overlay h-full"
                  type="text"
                  placeholder="Your Company"
                  {...register("company")}
                />
              </div>

              <div className="w-full">
                <textarea
                  className="contact-input-overlay area-input h-[170px] h-full w-full"
                  placeholder="Your Comment"
                  {...register("details")}
                />
                {errors.comment && (
                  <span className="error-span">
                    Please, enter your comment!
                  </span>
                )}
              </div>
            </div>

            <div className="flex h-[46px] gap-[16px]">
              <div className="flex w-full items-center justify-center gap-[10px]">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  className="h-[19px] w-[19px]"
                  {...register("privacyPolicy", { required: true })}
                />
                <label
                  htmlFor="privacyPolicy"
                  className="w-[235px] text-sm text-white"
                  style={{
                    color: "rgba(255, 255, 255, 0.25)"
                  }}
                >
                  By checking this field I agree to the terms of Privacy Policy
                </label>
              </div>

              <button type="submit" className="h-full w-full  bg-white">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </Popup>
  );
}
