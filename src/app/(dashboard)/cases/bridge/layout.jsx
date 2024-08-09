export const metadata = {
  title: "Cross-Chain Transfer Bridge - Our Case Study | Cowchain",
  description: "Unlock cross-chain potential with Exchange Bridge arrangement. Learn how Cowchain has created a consistent exchange of resources between diverse blockchain systems, expanding interoperability.",
  openGraph: {
    images: 'https://i.imgur.com/lFf1cEo.png',
  },
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
