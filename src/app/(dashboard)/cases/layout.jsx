export const metadata = {
  title: "Cryptoplatform - Our Case Study | Cowchain",
  description: "Explore our victory stories. In-depth case thinks about exhibiting how Cowchain's blockchain arrangements have changed businesses over different sectors.",
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/cases"
  }
};

export default async function CasesLayout({ children }) {
  return (
    <section>
      <>
        <div className="scrollbar-none relative bg-black">{children}</div>
      </>
    </section>
  );
}
