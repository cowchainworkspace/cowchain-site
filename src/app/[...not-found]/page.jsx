"use client";

import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import LoaderWrapper from "../(dashboard)/loaderWrapper";
import Header from "./blocks/Header";

export default function Page() {
  notFound();
  return (
    <section>
      <Navbar isPageNotFound={true} />
      <LoaderWrapper>
        <Header />
      </LoaderWrapper>
    </section>
  );
}
