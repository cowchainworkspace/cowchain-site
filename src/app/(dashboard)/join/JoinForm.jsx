"use client";

import { AnimatePresence, motion } from "framer-motion";
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
    <section className="relative min-h-screen bg-black">
      {/* Success notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={EASE}
            className="fixed left-1/2 top-6 z-[100] -translate-x-1/2 border border-white bg-black px-6 py-4 text-center font-roc text-sm uppercase text-white shadow-lg"
          >
            Заявку надіслано! Ми звʼяжемось з тобою в Telegram.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-24 md:px-8 lg:grid-cols-2 lg:gap-20 lg:px-16 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={EASE}
        >
          <h1 className="mb-5 text-left text-4xl uppercase text-white md:text-5xl">
            Приєднуйся до Cowchain
          </h1>
          <p className="max-w-[420px] text-sm text-secondary lg:text-base">
            Залиш заявку — розкажи, яка позиція тобі цікава та що вмієш у крипті.
            Якщо підходиш, ми звʼяжемось з тобою в Telegram.
          </p>
        </motion.div>

        <motion.form
          variants={container}
          initial="hidden"
          animate="show"
          onSubmit={handleSubmit(onSubmit)}
          className="userform flex flex-col gap-y-6"
          noValidate
        >
          <input type="text" autoFocus="autofocus" className="hidden" />

          <motion.div variants={item} className="flex flex-col gap-y-2">
            <input
              className="text_input"
              type="text"
              placeholder="Імʼя"
              {...register("fullName", { required: true, maxLength: 60 })}
              aria-invalid={errors.fullName ? "true" : "false"}
            />
            {errors.fullName?.type === "required" && (
              <span className="error-span">Будь ласка, вкажіть імʼя!</span>
            )}
            {errors.fullName?.type === "maxLength" && (
              <span className="error-span">Занадто довге імʼя</span>
            )}
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-y-2">
            <input
              className="text_input"
              type="text"
              placeholder="Telegram (@username)"
              {...register("telegram", { required: true, maxLength: 60 })}
              aria-invalid={errors.telegram ? "true" : "false"}
            />
            {errors.telegram?.type === "required" && (
              <span className="error-span">
                Будь ласка, вкажіть Telegram-акаунт!
              </span>
            )}
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-y-2">
            <select
              className="text_input"
              defaultValue=""
              {...register("position", { required: true })}
              aria-invalid={errors.position ? "true" : "false"}
            >
              <option value="" disabled>
                Яка позиція цікава?
              </option>
              {POSITIONS.map((p) => (
                <option key={p} value={p} className="bg-black">
                  {p}
                </option>
              ))}
            </select>
            {errors.position?.type === "required" && (
              <span className="error-span">Будь ласка, оберіть позицію!</span>
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
                    className="text_input mt-4 w-full"
                    type="text"
                    placeholder="Вкажіть позицію"
                    {...register("positionOther", {
                      required: isOther,
                      maxLength: 80
                    })}
                    aria-invalid={errors.positionOther ? "true" : "false"}
                  />
                  {errors.positionOther?.type === "required" && (
                    <span className="error-span mt-2 block">
                      Будь ласка, вкажіть позицію!
                    </span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-y-2">
            <textarea
              className="text_input resize-none"
              rows={4}
              placeholder="Що вмієш у крипті?"
              {...register("skills", { required: true, maxLength: 1000 })}
              aria-invalid={errors.skills ? "true" : "false"}
            />
            {errors.skills?.type === "required" && (
              <span className="error-span">
                Будь ласка, опишіть свій досвід!
              </span>
            )}
            {errors.skills?.type === "maxLength" && (
              <span className="error-span">Занадто довгий опис</span>
            )}
          </motion.div>

          <motion.button
            variants={item}
            type="submit"
            disabled={loading}
            className="btn-submit my-4 disabled:cursor-not-allowed disabled:opacity-60"
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
                Надсилаємо…
              </span>
            ) : (
              "Надіслати заявку"
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
