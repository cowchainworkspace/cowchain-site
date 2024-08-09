export const metadata = {
  title: "Decentralized Crypto Exchange - Our Case Study | Cowchain",
  description: "Explore Cowchain's Decentralized Crypto Trade case study. Learn how blockchain innovation powers a secure and revolutionizing decentralized back operations.",
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/cases/finance"
  }
};

export default async function FinanceCasesLayout({ children }) {
  return (
    <section>
      <>
        <div className="scrollbar-none relative bg-black">{children}</div>
      </>
    </section>
  );
}
