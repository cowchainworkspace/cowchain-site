import { Loading } from "@/components/loader/Loading";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => <Loading />
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <Loading />
});

export default async function DashboardLayout({ children }) {
  return (
    <section>
      <>
        <div className="scrollbar-none relative bg-black">
          <Navbar />
          {children}
          <Footer />
        </div>
      </>
    </section>
  );
}
