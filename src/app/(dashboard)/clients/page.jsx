import "./clients.css";
import Contact from "@/components/Contact";
import Cases from "./blocks/Cases";
import Credo from "./blocks/Credo";
import Feedback from "./blocks/Feedback";
import Header from "./blocks/Header";
import Projects from "./blocks/Projects";

export const metadata = {
  title: "Discover Our Clients and Success Stories | Cowchain",
  description:
    "Find our differing portfolio of satisfied clients. See how Cowchain has made a difference businesses over businesses use blockchain technology.",
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/clients"
  }
};

const Clients = () => {
  return (
    <section id="clients-wrapper">
      <div className="relative bg-black">
        <Header />
        <Projects />
        <Feedback />
        <Credo />
        <Cases />
        <Contact />
      </div>
    </section>
  );
};

export default Clients;
