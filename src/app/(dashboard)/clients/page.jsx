import "./clients.css";
import Header from "./blocks/Header";
import Projects from "./blocks/Projects";
import Feedback from "./blocks/Feedback";
import Credo from "./blocks/Credo";
import Cases from "./blocks/Cases";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Discover Our Clients and Success Stories | Cowchain",
  description: "Find our differing portfolio of satisfied clients. See how Cowchain has made a difference businesses over businesses use blockchain technology.",
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/clients"
  }
};

const Clients = ({ setBurgerOpen }) => {
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
