"use client";

import homeDescTopBg from "@/assets/homepage/desctop-home.webp";
import homeMobileBg from "@/assets/homepage/home-bg-header-mobile.webp";
import { Loading } from "@/components/loader/Loading";
import { useLoader } from "@/hooks/useLoader";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LoaderWrapper from "./loaderWrapper";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => <Loading />
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <Loading />
});

export default function DashboardLayout({ children }) {
  const { isRendering } = useLoader();

  const pathname = usePathname();
  return (
    <section>
      <div className="scrollbar-none relative bg-black">
        {!isRendering && pathname === "/" && (
          <>
            <Image
              width={1455}
              height={375}
              priority
              sizes="(max-width: 640px) 100vw, 100vw"
              alt=""
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
              src={homeMobileBg}
              alt=""
            />
          </>
        )}
        <Navbar />
        <LoaderWrapper>{children}</LoaderWrapper>
        <Footer footerForm={pathname !== "/blog" ? false : true} />
      </div>
    </section>
  );
}
