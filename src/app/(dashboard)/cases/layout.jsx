export const metadata = {
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
