import { metadata } from "./financeCaseMetaData";

export { metadata };

export default async function FinanceCasesLayout({ children }) {
  return (
    <section>
      <>
        <div className="scrollbar-none relative bg-black">{children}</div>
      </>
    </section>
  );
}
