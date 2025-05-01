import { metadata } from "./bridgeMetadata";

export { metadata };

export default async function BridgeCasesLayout({ children }) {
  return (
    <section>
      <>
        <div className="scrollbar-none relative bg-black">{children}</div>
      </>
    </section>
  );
}
