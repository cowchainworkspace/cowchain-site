export const metadata = {
  title: "Cross-Chain Transfer Bridge - Our Case Study | Cowchain",
  description: "Unlock cross-chain potential with Cowchain's Exchange Bridge, enabling seamless interoperability between blockchain systems.",
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/cases/bridge"
  }
};

export default async function BridgeCasesLayout({ children }) {
  return (
    <section>
      <>
        <div className="scrollbar-none relative bg-black">{children}</div>
      </>
    </section>
  );
}
