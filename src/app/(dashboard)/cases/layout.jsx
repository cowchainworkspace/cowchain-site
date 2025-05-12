import { metadata } from "./casesData/data";

export { metadata };

export default async function CasesLayout({ children }) {
  return (
    <section>
      <div className="scrollbar-none relative bg-black">{children}</div>
    </section>
  );
}
