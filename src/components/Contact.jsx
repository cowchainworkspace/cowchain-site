import React, { useState } from "react";
import Popup from "reactjs-popup";
import modal_close from "../assets/homepage/modal_close.svg";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";
import bg from "../assets/bg/contact_bg.png";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [sendError, setSendError] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const sendFormData = async (data, error) => {
    try {
      send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
    } catch (e) {
      setSendError(true);
    }
    reset();
    setSendSuccess(true);
  };

  const checkboxes = [
    "Web Development",
    "UI/UX",
    "Branding",
    "Consultation",
    "Marketing",
    "SEO",
    "Other",
  ];

  const radioBtns = ["$2-3K", "$5-10K", "$10K <", "Other"];

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="relative">
      <img
        className="hidden md:block absolute bottom-0 top-0 w-3/4 m-auto left-0 right-0 text-center"
        src={bg}
        alt=""
      ></img>
      <div className="grid grid-cols-1 relative">
        <div className="border-b border-b-th-fade py-16 md:py-24 xl:py-36 text-center px-4 flex flex-col gap-y-8 md:gap-y-24">
          <h3 className="text-center lg:max-w-xl mx-auto">
            HAVE PROJECT IN MIND?
          </h3>
          <button
            className="btn-contact mx-auto lg:w-48 lg:h-48"
            onClick={() => setModalOpen(true)}
          >
            Get in touch
          </button>
          <Popup
            open={modalOpen}
            closeOnDocumentClick
            onClose={() => setModalOpen(false)}
            className="popup-modal"
            lockScroll
          >
            <div className="modal max-h-[95vh] min-w-full h-full p-4 md:p-8 lg:p-16 bg-black max-w-5xl border-2 border-white">
              <div className="flex">
                <img
                  className="cursor-pointer w-8 ml-auto"
                  alt=""
                  onClick={() => setModalOpen(false)}
                  src={modal_close}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <p className="font-roc text-4xl md:text-5xl font-bold text-white text-center lg:text-left lg:mt-6">
                  let`s work <br></br> together
                </p>
                <form
                  onSubmit={handleSubmit(sendFormData)}
                  className="userform flex flex-col gap-y-6 mt-6"
                >
                  <div>
                    <p className="text-white">Services</p>
                    <div className="services_group_wrapper flex flex-wrap gap-2 mt-4">
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
                    <div className="services_group_wrapper flex flex-wrap gap-2 mt-4">
                      {radioBtns.map((radioBtn, index) => (
                        <label
                          key={index * 10}
                          className="form_label_for_check"
                        >
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
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email?.type === "required" && (
                    <span className="error-span">
                      Pleasae, enter your email!
                    </span>
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
            </div>
          </Popup>
        </div>
      </div>
    </section>
  );
};

export default Contact;
