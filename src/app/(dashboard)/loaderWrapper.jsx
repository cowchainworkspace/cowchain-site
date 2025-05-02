"use client";
import { Loading } from "@/components/loader/Loading";
import { useLoader } from "@/hooks/useLoader";
import { cn } from "@/lib/utils";
import React from "react";

export default function LoaderWrapper({ children }) {
  const { isRendering, isLoading } = useLoader();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={cn("opacity-0", { "opacity-100": !isRendering })}>
      {children}
    </div>
  );
}
