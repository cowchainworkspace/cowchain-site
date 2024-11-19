export const metadata = {
  title: "Blockchain Integration - Our Case Study | Cowchain",
  description: "Cowchain’s Blockchain Integration optimizes hotel operations, streamlining processes and enhancing data management.",
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/cases/hotel"
  }
};

export default async function HotelCasesLayout({ children }) {
  return (
    <section>
      <>
        <div className="scrollbar-none relative bg-black">{children}</div>
      </>
    </section>
  );
}
