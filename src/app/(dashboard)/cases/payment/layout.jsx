export const metadata = {
  title: "Exchange Wallet App - Our Case Study | Cowchain",
  description: "Investigate  the case of Cowchain, which has created a secure Exchange Wallet App, making strides trade speed and client association. Blockchain course of action optimizes crypto exchanges and energetic security.",
  openGraph: {
    images: 'https://i.imgur.com/cxK9DwR.png',
  },
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
