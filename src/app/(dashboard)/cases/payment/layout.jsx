import { metadata } from "./paymentCase";

export { metadata }

export default async function PaymentCasesLayout({ children }) {
  return (
    <section>
      <>
        <div className="scrollbar-none relative bg-black">{children}</div>
      </>
    </section>
  );
}
