export const metadata = {
  title: "Crypto Wallet App - Our Case Study | Cowchain",
  description: "Discover our Crypto Wallet App case, advertising secure capacity and simple administration of advanced resources. Learn how Cowchain's ability in blockchain innovation revolutionizes client encounter.",
  openGraph: {
    images: 'https://i.imgur.com/WZkJ1P4.png',
  },
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
