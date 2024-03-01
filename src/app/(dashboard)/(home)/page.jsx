"use client";

import { Loading } from "@/components/loader/Loading";
import { Suspense, lazy, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useLoader } from "@/hooks/useLoader";
import { cn } from "@/lib/utils";

const Header = lazy(() => import("./blocks/Header"));
const HomeContent = lazy(() => import("./blocks/home-content"));

export default function Page() {
  const { isLoading, isRendering, setIsLoading, setIsRendering } = useLoader();
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    emailjs.init(process.env.REACT_APP_DEV_EMAILJS_PUBLIC_KEY);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    setTimeout(() => {
      setIsRendering(false);
    }, 700);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={cn("opacity-0", { "opacity-100": !isRendering })}>
      <Header />
      <HomeContent />{" "}
    </div>
  );
}
