"use client";

import Navbar from "@/components/Navbar";
import Header from "./blocks/Header";
import LoaderWrapper from "../(dashboard)/loaderWrapper";
import { notFound } from "next/navigation";

export default function Page() {
  notFound();
  return (
    <section>
      <Navbar isPageNotFound={true} />
      <LoaderWrapper>
        <Header />;
      </LoaderWrapper>
    </section>
  );
}
