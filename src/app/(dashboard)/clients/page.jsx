import "./clients.css";
import Header from "./blocks/Header";
import Projects from "./blocks/Projects";
import Feedback from "./blocks/Feedback";
import Credo from "./blocks/Credo";
import Cases from "./blocks/Cases";
import Contact from "@/components/Contact";
import { metadata } from "./clientsMetadata";

export { metadata }

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
