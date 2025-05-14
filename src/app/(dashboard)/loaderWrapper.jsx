"use client";
import { Loading } from "@/components/loader/Loading";
import { useLoader } from "@/hooks/useLoader";
import { cn } from "@/lib/utils";
import React from "react";

export default function LoaderWrapper({ children }) {
  const { isRendering, isLoading } = useLoader();

  return (
    <div className="relative">
      {/* Render main content always, even if hidden initially */}
      <div
        className={cn(
          "transition-opacity duration-700",
          isRendering ? "opacity-0" : "opacity-100"
        )}
      >
        {children}
      </div>

      {/* Loader overlay, visually on top */}
      {isLoading && (
        <div className="absolute inset-0 -top-24 z-[100] flex h-dvh items-center justify-center bg-black md:-top-16">
          <Loading />
        </div>
      )}
    </div>
  );
}
