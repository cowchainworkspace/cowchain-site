import Navbar from "@/components/Navbar";
import NotFoundHeader from "../components/NotFoundHeader";
import LoaderWrapper from "./(dashboard)/loaderWrapper";

export default function NotFound() {
  return (
    <section>
      <Navbar />
      <LoaderWrapper>
        <NotFoundHeader />
      </LoaderWrapper>
    </section>
  );
}
