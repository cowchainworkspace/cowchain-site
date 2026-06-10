"use client";

import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import modal_close from "../../assets/homepage/closeButtonIcon.svg";
import dagerous from "./../../assets/dangerous.svg";
import bg from "./../../assets/homepage/form/formBg.svg";
import SelectValue from "./SelectValue";
import { track } from "@/lib/track";

const projectType = [
  "Web Development",
  "Mobile App",
  "AI Development",
  "Telegram Mini-Apps",
  "Blockchain development",
  "Other"
];

const projectPrice = ["$5-10K", "$10-50K", "$50K-$100K", "$100K+"];

export default function ContactForm({ modalOpen, setModalOpen }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    clearErrors,
    watch
  } = useForm();

  const [modalThanksOpen, setModalThanksOpen] = useState(false);

  const sendFormData = async (data) => {
    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
    } catch (e) {}
    try {
      const pages = JSON.parse(sessionStorage.getItem("cc_pages") || "[]");
      track({
        type: "form",
        fullName: data.fullName,
        email: data.email,
        company: data.company,
        projectType: data.projectType,
        projectPrice: data.projectPrice,
        details: data.details,
        pages
      });
    } catch (e) {}
    reset();
    setModalOpen(false);
    setModalThanksOpen(true);
  };

  const handleInputChange = (fieldName) => {
    clearErrors(fieldName);
  };

  const projectValue = watch("projectType");
  const projectPriceValue = watch("projectPrice");

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
        <div className="no-scrollbar overflow-y-scroll max-md:h-screen md:px-[20px] md:py-[50px] lg:p-[100px]">
          <Image
            className="pointer-events-none absolute left-[-350px] top-[-300px] z-[-1] min-h-[1100px] min-w-[900px] md:left-[-500px] md:top-[-900px] md:min-h-[2000px] md:min-w-[1500px]"
            alt="Background decoration ellipse"
            src={bg}
          />

          <div className="modal p-x-[20px] relative flex h-full  min-w-full gap-[20px] font-roc">
            <div className="flex w-[335px]  flex-col items-center gap-4 md:w-[633px] md:gap-[32px]">
              <div className="relative w-full text-center md:text-left">
                <p className="text-left  text-[36px] font-medium text-white md:text-left md:text-center md:text-5xl md:text-[60px]">
                  Let's make Web3 work for you
                </p>
              </div>

              <form
                onSubmit={handleSubmit(sendFormData)}
                className="flex w-full flex-col gap-y-[24px] max-md:gap-y-4"
                noValidate
              >
                <div className="flex h-[318px] flex-col gap-y-[12px] max-md:h-fit md:h-[170px] md:flex-row md:gap-x-[16px] md:gap-y-0">
                  <div className="flex h-full w-full flex-col justify-between gap-y-[12px] md:gap-y-[16px]">
                    <div className="relative h-full w-full max-md:h-[46px]">
                      <input
                        className={`contact-input-overlay h-full w-full`}
                        type="text"
                        placeholder="Full Name*"
                        {...register("fullName", { required: true })}
                        onChange={() => handleInputChange("fullName")}
                      />
                    </div>

                    <div className="relative h-full w-full max-md:h-[46px]">
                      <input
                        className={`contact-input-overlay h-full w-full`}
                        type="email"
                        placeholder="Email*"
                        {...register("email", {
                          required: "Please enter your email",
                          validate: {
                            maxLength: (value) =>
                              value.length <= 255 ||
                              "Email cannot exceed 255 characters",
                            pattern: (value) =>
                              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                                value
                              ) || "Please enter a valid email address"
                          }
                        })}
                        onChange={() => handleInputChange("email")}
                      />
                    </div>

                    <div className="relative h-full w-full max-md:h-[46px]">
                      <input
                        className={`contact-input-overlay h-full w-full`}
                        type="text"
                        placeholder="Company name (optional)"
                        {...register("company")}
                        onChange={() => handleInputChange("company")}
                      />
                    </div>
                  </div>

                  <div className="relative z-50 grid grid-cols-2 gap-3 md:hidden">
                    <SelectValue
                      items={projectType}
                      control={control}
                      name={"projectType"}
                      arialLabelledby={"project-type"}
                      labelName={"Project Type*"}
                      selectValue={projectValue}
                    />

                    <SelectValue
                      items={projectPrice}
                      control={control}
                      name={"projectPrice"}
                      arialLabelledby={"project-price"}
                      labelName={"Project Budget*"}
                      selectValue={projectPriceValue}
                    />
                  </div>

                  <div className="relative min-h-[144px] w-full md:h-full">
                    <textarea
                      className={`contact-input-overlay area-input h-[170px] h-full w-full resize-none`}
                      placeholder="Briefly describe your project*"
                      {...register("details", { required: true })}
                      onChange={() => handleInputChange("details")}
                    />
                  </div>
                </div>

                <div className="relative z-50 -mt-2 grid grid-cols-2 gap-3 max-md:hidden">
                  <SelectValue
                    items={projectType}
                    control={control}
                    name={"projectType"}
                    arialLabelledby={"project-type"}
                    labelName={"Project Type*"}
                    selectValue={projectValue}
                  />

                  <SelectValue
                    items={projectPrice}
                    control={control}
                    name={"projectPrice"}
                    arialLabelledby={"project-price"}
                    labelName={"Project Budget*"}
                    selectValue={projectPriceValue}
                  />
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
                  </div>

                  <button type="submit" className="h-full w-full   bg-white">
                    SUBMIT
                  </button>
                </div>
              </form>

              <div className="ml-[16px] h-[72px] w-[335px] self-end md:w-[308px]">
                {errors.fullName && (
                  <div className="flex items-center  gap-[10px]">
                    <Image src={dagerous} alt="cross icon" />
                    <div
                      className="text-bottom text-white-400 text-[12px] leading-[17px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      Please, enter your full name!
                    </div>
                  </div>
                )}

                {errors.details && (
                  <div className="flex items-center  gap-[10px]">
                    <Image src={dagerous} alt="cross icon" />
                    <div
                      className="text-bottom text-white-400 text-[12px] leading-[17px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      Please, enter your comment!
                    </div>
                  </div>
                )}
                {errors.company && (
                  <div className="flex items-center  gap-[10px]">
                    <Image src={dagerous} alt="cross icon" />
                    <div
                      className="text-bottom text-white-400 text-[12px] leading-[17px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      Please, enter your company name!
                    </div>
                  </div>
                )}
                {errors.email?.type === "required" && (
                  <div className="flex items-center  gap-[10px]">
                    <Image src={dagerous} alt="cross icon" />
                    <div
                      className="text-bottom text-white-400 text-[12px] leading-[17px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      Please, enter your email!
                    </div>
                  </div>
                )}
                {errors.email?.type === "pattern" && (
                  <div className="flex items-center  gap-[10px]">
                    <Image src={dagerous} alt="cross icon" />
                    <div
                      className="text-bottom text-white-400 text-[12px] leading-[17px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      Please, enter a correct email address!
                    </div>
                  </div>
                )}
                {errors.email?.type === "maxLength" && (
                  <div className="flex items-center gap-[10px]">
                    <Image src={dagerous} alt="cross icon" />
                    <div
                      className="text-bottom text-white-400 text-[12px] leading-[17px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      {errors.email.message}
                    </div>
                  </div>
                )}
                {errors.projectPrice && (
                  <div className="flex items-center  gap-[10px]">
                    <Image src={dagerous} alt="cross icon" />
                    <div
                      className="text-bottom text-white-400 text-[12px] leading-[17px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      Please, select project budget!
                    </div>
                  </div>
                )}

                {errors.projectType && (
                  <div className="flex items-center  gap-[10px]">
                    <Image src={dagerous} alt="cross icon" />
                    <div
                      className="text-bottom text-white-400 text-[12px] leading-[17px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      Please, select project type!
                    </div>
                  </div>
                )}

                {errors.privacyPolicy && (
                  <div className="flex items-center  gap-[10px]">
                    <Image src={dagerous} alt="cross icon" />
                    <div
                      className="text-bottom text-white-400 text-[12px] leading-[17px]"
                      style={{
                        color: "rgba(255, 255, 255, 0.5)"
                      }}
                    >
                      Please agree to the privacy policy!
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              className="absolute right-0 top-[13px] size-7 items-center justify-center md:static md:flex md:h-[50px] md:w-[50px]"
              style={{
                border: "1px rgba(255, 255, 255, 0.5) solid",
                borderRadius: "50%"
              }}
            >
              <Image
                className="cursor-pointer"
                alt="Close modal icon"
                onClick={() => setModalOpen(false)}
                src={modal_close}
              />
            </div>
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
          alt="Background decoration ellipse"
          src={bg}
        />

        <div className="modal p-x-[20px] relative flex h-full min-w-full max-w-7xl flex-col items-center gap-[44px] font-roc ">
          <div className="gap-[16px] text-center">
            <p className="mb-[16px] text-center text-[36px] font-medium uppercase leading-[38px] text-white  md:text-[60px] md:leading-[54px]">
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
