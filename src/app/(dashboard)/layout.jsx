"use client";
import homeDescTopBg from "@/assets/homepage/desctop-home.webp";
import { Loading } from "@/components/loader/Loading";
import ContactForm from "@/components/utils/ContactForm";
import { useLoader } from "@/hooks/useLoader";
import { cn } from "@/lib/utils";
import emailjs from "emailjs-com";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useOpenForm } from "../../hooks/useOpenForm";
// import LoaderWrapper from "./loaderWrapper";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => <Loading />
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <Loading />
});

export default function DashboardLayout({ children }) {
  const { setIsLoading, setIsRendering } = useLoader();
  const { openForm, setOpenForm } = useOpenForm();

  const pathname = usePathname();

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY);
    emailjs.init(process.env.NEXT_PUBLIC_REACT_APP_DEV_EMAILJS_PUBLIC_KEY);

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 500);
    // setTimeout(() => {
    //   setIsRendering(false);
    // }, 600);
  }, []);

  return (
    <section className="relative">
      <div className="scrollbar-none relative bg-black">
        {pathname === "/" && (
          <>
            <Image
              width={1455}
              height={375}
              priority
              sizes="(max-width: 640px) 100vw, 100vw"
              alt="Background decoration ellipse"
              className={cn(
                "absolute left-0 top-0 z-10 hidden w-full md:block"
              )}
              src={homeDescTopBg}
            />
            <Image
              quality={100}
              priority
              className={cn(
                "pointer-events-none absolute left-0 top-0 z-10 block h-auto w-full md:hidden"
              )}
              width={443}
              height={326}
              src={"/home-bg-header-mobile.webp"}
              alt="Background decoration ellipse"
            />
          </>
        )}
        <Navbar />
        {children}
        {/* <LoaderWrapper> {} </LoaderWrapper> */}
        <Footer footerForm={pathname !== "/blog" ? false : true} />
      </div>
      <ContactForm modalOpen={openForm} setModalOpen={setOpenForm} />
    </section>
  );
}
