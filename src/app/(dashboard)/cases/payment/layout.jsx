export const metadata = {
  title: "Exchange Wallet App - Our Case Study | Cowchain",
  description: "Cowchain’s secure Exchange Wallet App enhances transaction speed and ensures robust security for crypto exchanges.",
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/cases/payment"
  }
};

export default async function PaymentCasesLayout({ children }) {
  return (
    <section>
      <>
        <div className="scrollbar-none relative bg-black">{children}</div>
      </>
    </section>
  );
}
