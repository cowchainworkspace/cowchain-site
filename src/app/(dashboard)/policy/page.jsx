import "./clients.css";
import Header from "./blocks/Header";
import { metadata } from "./policyData/policyMetadata";
import { policy } from "./policyData/policyData";

export { metadata };

const Policy = () => {
  return (
    <section id="clients-wrapper">
      <div className="relative bg-black">
        <Header />
        <section className="mx-auto  border-b border-b-th-fade text-white">
          <div className="mx-auto max-w-[900px] px-5 text-white">
            {policy.map(({ title, text }, i) => (
              <div key={i} className="mb-12">
                <span className="mb-4 text-base  font-bold">{title}</span>
                <p className="whitespace-pre-wrap text-[#BBB]">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Policy;
