"use client";

import Navbar from "@/components/Navbar";
import LoaderWrapper from "./(dashboard)/loaderWrapper";
import Header from "./[...not-found]/blocks/Header";
export default function Page() {
  return (
    <section>
      <Navbar isPageNotFound={true} />
      <LoaderWrapper>
        <Header />
      </LoaderWrapper>
    </section>
  );
}
