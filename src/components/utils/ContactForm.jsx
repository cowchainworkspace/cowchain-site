"use client";

import Popup from "reactjs-popup";
import modal_close from "../../assets/homepage/closeButtonIcon.svg";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import bg from "./../../assets/homepage/form/formBg.svg";
import { useState } from "react";
import ThankYouWindow from "./ThankYouWindow";

export default function ContactForm({ modalOpen, setModalOpen }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors
  } = useForm();

  const [modalThanksOpen, setModalThanksOpen] = useState(false);

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
    setModalThanksOpen(true);
  };

  const handleInputChange = (fieldName) => {
    clearErrors(fieldName); // Clears the error for the specified field
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
    <>
      <Popup
        open={modalOpen}
        closeOnDocumentClick
        onClose={() => setModalOpen(false)}
        className="modal-form relative"
        lockScroll
        nested
      >
        <Image
          className="pointer-events-none absolute left-[-350px] top-[-300px] z-[-1] min-h-[1100px] min-w-[900px] md:left-[-500px] md:top-[-900px] md:min-h-[2000px] md:min-w-[1500px]"
          alt=""
          src={bg}
        />

        <div className="modal p-x-[20px] relative flex h-full  min-w-full gap-[20px] font-roc">
          <div className="flex w-[335px]  flex-col items-center gap-[32px] md:w-[633px]">
            <div className="text-center md:text-left">
              <p className="mb-[16px] text-center text-[36px] font-medium text-white md:text-left md:text-5xl md:text-[60px]">
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
              <div className="flex h-[318px] flex-col gap-y-[12px] md:h-[170px] md:flex-row md:gap-x-[16px] md:gap-y-0">
                <div className="flex h-full w-full flex-col justify-between gap-y-[12px] md:gap-y-[16px]">
                  <div className="relative h-full w-full">
                    <input
                      className={`contact-input-overlay h-full w-full`}
                      type="text"
                      placeholder="Full Name"
                      {...register("fullName", { required: true })}
                      onChange={() => handleInputChange("fullName")}
                    />
                    {errors.fullName && (
                      <div className="absolute left-0 top-[-20px] text-red-500">
                        Please, enter your full name!
                      </div>
                    )}
                  </div>

                  <div className="relative h-full w-full">
                    <input
                      className={`contact-input-overlay h-full w-full`}
                      type="email"
                      placeholder="Email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                      })}
                      onChange={() => handleInputChange("email")}
                    />
                    {errors.email?.type === "required" && (
                      <div className="absolute left-0 top-[-20px] text-red-500">
                        Please, enter your email!
                      </div>
                    )}
                    {errors.email?.type === "pattern" && (
                      <div className="absolute left-0 top-[-20px] text-red-500">
                        Please, enter a correct email address!
                      </div>
                    )}
                  </div>

                  <div className="relative h-full w-full">
                    <input
                      className={`contact-input-overlay h-full w-full`}
                      type="text"
                      placeholder="Your Company"
                      {...register("company")}
                      onChange={() => handleInputChange("company")}
                    />
                    {errors.company && (
                      <div className="absolute left-0 top-[-20px] text-red-500">
                        Please, enter your company name!
                      </div>
                    )}
                  </div>
                </div>

                <div className="relative min-h-[144px] w-full md:h-full">
                  <textarea
                    className={`contact-input-overlay area-input h-[170px] h-full w-full`}
                    placeholder="Your Comment"
                    {...register("details", { required: true })}
                    onChange={() => handleInputChange("details")}
                  />
                  {errors.details && (
                    <div className="absolute left-0 top-[-20px] text-red-500">
                      Please, enter your comment!
                    </div>
                  )}
                </div>
              </div>

              <div className="flex h-[108px] flex-col gap-[16px] md:h-[46px] md:flex-row">
                <div className="relative flex h-full w-full items-center justify-center gap-[10px]">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    className="h-[19px] w-[19px] bg-transparent text-black checked:border-transparent checked:bg-transparent"
                    {...register("privacyPolicy", { required: true })}
                    onChange={() => handleInputChange("privacyPolicy")}
                  />
                  <label
                    htmlFor="privacyPolicy"
                    className="w-[260px] text-[12px] text-white md:w-[235px] md:text-sm"
                    style={{
                      color: "rgba(255, 255, 255, 0.25)"
                    }}
                  >
                    By checking this field I agree to the terms of Privacy
                    Policy
                  </label>

                  {errors.privacyPolicy && (
                    <div className="absolute left-0 top-[-25px] text-red-500">
                      Please agree to the privacy policy!
                    </div>
                  )}
                </div>

                <button type="submit" className="h-full w-full   bg-white">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>

          <div
            className="hidden h-[50px] w-[50px] items-center justify-center md:flex"
            style={{
              border: "1px rgba(255, 255, 255, 0.5) solid",
              borderRadius: "50%"
            }}
          >
            <Image
              className="cursor-pointer"
              alt=""
              onClick={() => setModalOpen(false)}
              src={modal_close}
            />
          </div>
        </div>
      </Popup>

      <Popup
        open={modalThanksOpen}
        closeOnDocumentClick
        onClose={() => setModalThanksOpen(false)}
        className="modal-thanks relative"
        lockScroll
        nested
      >
        <Image
          className="pointer-events-none absolute left-[-350px] top-[-1400px] z-[-1] min-h-[3100px] min-w-[900px] md:left-[-500px] md:top-[-900px] md:min-h-[2000px] md:min-w-[1500px]"
          alt=""
          src={bg}
        />

        <div className="modal p-x-[20px] relative flex h-full min-w-full max-w-7xl flex-col items-center gap-[44px] font-roc ">
          <div className="gap-[16px] text-center">
            <p className="mb-[16px] text-center text-[36px] font-medium uppercase leading-[38px] text-white  md:text-[54px] md:text-[60px]">
              Thank you for <br /> contacting us!
            </p>
            <p
              style={{
                color: "white"
              }}
            >
              Our manager will get in contact with you shortly
            </p>
          </div>

          <button
            type="submit"
            onClick={() => setModalThanksOpen(false)}
            className="h-[46px] w-[335px] border-[1px] border-white bg-transparent text-[16px] font-medium uppercase text-white md:w-[308px]"
          >
            Back to website
          </button>
        </div>
      </Popup>
    </>
  );
}
