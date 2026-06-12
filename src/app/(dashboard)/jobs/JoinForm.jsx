"use client";

import ProjectsLine from "@/app/(dashboard)/(home)/blocks/ProjectsLine";
import ProjectsLineMobile from "@/app/(dashboard)/(home)/blocks/ProjectsLineMobile";
import bg from "@/assets/homepage/form/formBg.svg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

const POSITIONS = [
  "Smart Contract Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "Mobile Developer",
  "UI/UX Designer",
  "Project Manager",
  "QA Engineer",
  "Marketing",
  "Other"
];

const EASE = { duration: 0.4, ease: "easeInOut" };

// Staggered reveal for the form fields on mount.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: EASE }
};

export default function JoinForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const positionValue = watch("position");
  const isOther = positionValue === "Other";

  const onSubmit = async (data) => {
    setLoading(true);
    const position = isOther ? data.positionOther : data.position;
    try {
      await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "job",
          fullName: data.fullName,
          telegram: data.telegram,
          position,
          skills: data.skills
        }),
        keepalive: true
      });
    } catch (e) {
      /* swallow — notifier must never block the user */
    }
    setLoading(false);
    reset();
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Decorative gradient ellipse, reused from the contact form */}
      <Image
        aria-hidden
        priority
        src={bg}
        alt=""
        className="pointer-events-none absolute left-1/2 top-[-260px] z-0 w-[680px] max-w-none -translate-x-1/2 select-none opacity-70 sm:top-[-360px] sm:w-[900px] md:left-[-360px] md:top-[-520px] md:translate-x-0 md:w-[1300px] md:opacity-100"
      />

      {/* Success notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={EASE}
            className="fixed inset-x-4 top-5 z-[100] mx-auto max-w-md border border-white bg-black/90 px-5 py-4 text-center font-roc text-xs uppercase leading-relaxed text-white shadow-lg backdrop-blur-sm sm:text-sm md:left-1/2 md:right-auto md:inset-x-auto md:-translate-x-1/2"
          >
            Application sent! We&apos;ll reach out to you on Telegram.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project cases marquee, reused from the home page */}
      <div className="relative z-10 w-full pt-20 lg:pt-24">
        <ProjectsLine keyPrefix="jobs-" />
        <ProjectsLineMobile keyPrefix="jobs-" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 pb-20 pt-10 sm:px-6 sm:pt-14 md:px-8 md:pb-28 lg:grid-cols-2 lg:gap-20 lg:px-16 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={EASE}
          className="lg:sticky lg:top-40 lg:self-start"
        >
          <h1 className="mb-4 text-left text-[34px] font-medium leading-[1.05] text-white sm:text-4xl md:text-5xl lg:text-[60px]">
            Cowchain is looking for talents!
          </h1>
          <p className="max-w-[440px] text-sm text-secondary sm:text-base">
            Fill the form and we will contact you.
          </p>
        </motion.div>

        <motion.form
          variants={container}
          initial="hidden"
          animate="show"
          onSubmit={handleSubmit(onSubmit)}
          className="userform flex w-full flex-col gap-y-5 sm:gap-y-6"
          noValidate
        >
          <input type="text" autoFocus="autofocus" className="hidden" />

          <motion.div variants={item} className="flex flex-col gap-y-2">
            <input
              className="text_input w-full"
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: true, maxLength: 60 })}
              aria-invalid={errors.fullName ? "true" : "false"}
            />
            {errors.fullName?.type === "required" && (
              <span className="error-span">Please, enter your name!</span>
            )}
            {errors.fullName?.type === "maxLength" && (
              <span className="error-span">Name is too long</span>
            )}
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-y-2">
            <input
              className="text_input w-full"
              type="text"
              placeholder="Telegram (@username)"
              {...register("telegram", { required: true, maxLength: 60 })}
              aria-invalid={errors.telegram ? "true" : "false"}
            />
            {errors.telegram?.type === "required" && (
              <span className="error-span">
                Please, enter your Telegram account!
              </span>
            )}
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-y-2">
            <select
              className="text_input w-full"
              defaultValue=""
              {...register("position", { required: true })}
              aria-invalid={errors.position ? "true" : "false"}
            >
              <option value="" disabled>
                Which position interests you?
              </option>
              {POSITIONS.map((p) => (
                <option key={p} value={p} className="bg-black">
                  {p}
                </option>
              ))}
            </select>
            {errors.position?.type === "required" && (
              <span className="error-span">Please, select a position!</span>
            )}

            {/* Manual entry when the role isn't in the list */}
            <AnimatePresence initial={false}>
              {isOther && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={EASE}
                  className="overflow-hidden"
                >
                  <input
                    className="text_input mt-3 w-full sm:mt-4"
                    type="text"
                    placeholder="Enter your position"
                    {...register("positionOther", {
                      required: isOther,
                      maxLength: 80
                    })}
                    aria-invalid={errors.positionOther ? "true" : "false"}
                  />
                  {errors.positionOther?.type === "required" && (
                    <span className="error-span mt-2 block">
                      Please, enter your position!
                    </span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-y-2">
            <textarea
              className="text_input w-full resize-none"
              rows={4}
              placeholder="What can you do in crypto?"
              {...register("skills", { required: true, maxLength: 1000 })}
              aria-invalid={errors.skills ? "true" : "false"}
            />
            {errors.skills?.type === "required" && (
              <span className="error-span">
                Please, describe your experience!
              </span>
            )}
            {errors.skills?.type === "maxLength" && (
              <span className="error-span">Description is too long</span>
            )}
          </motion.div>

          <motion.button
            variants={item}
            type="submit"
            disabled={loading}
            className="btn-submit my-2 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:my-4"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <motion.span
                  className="inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 0.8,
                    ease: "linear",
                    repeat: Infinity
                  }}
                />
                Sending…
              </span>
            ) : (
              "Send application"
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
