import "./clients.css";
import Contact from "@/components/Contact";
import Cases from "./blocks/Cases";
import Credo from "./blocks/Credo";
import Feedback from "./blocks/Feedback";
import Header from "./blocks/Header";
import Projects from "./blocks/Projects";
import { metadata } from "./clientsMetadata";

export { metadata };

const Clients = () => {
  return (
    <section id="clients-wrapper">
      <div className="relative bg-black">
        <Header />
        <Projects />
        <Feedback />
        <Credo />
        <Cases />
        <Contact
          className={"px-5 py-[50px] md:px-0 xl:py-[143px]"}
          titleClasses={"mb-8 md:mb-0"}
        />
      </div>
    </section>
  );
};

export default Clients;
