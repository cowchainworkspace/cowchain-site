export const metadata = {
  title: "Crypto Wallet App - Our Case Study | Cowchain",
  description:
    "Explore Cowchain’s Crypto Wallet App for secure and simple digital asset management, enhancing user experience.",
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/cases/wallet"
  }
};

export default async function WalletCasesLayout({ children }) {
  return (
    <section>
      <>
        <div className="scrollbar-none relative bg-black">{children}</div>
      </>
    </section>
  );
}
