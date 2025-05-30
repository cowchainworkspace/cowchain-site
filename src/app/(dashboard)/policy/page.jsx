import "./clients.css";
import Header from "./blocks/Header";
import { policy, policyBreadCrumbList } from "./policyData/policyData";
import { metadata } from "./policyData/policyMetadata";

export { metadata };

const Policy = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(policyBreadCrumbList)
        }}
      />
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
    </>
  );
};

export default Policy;
