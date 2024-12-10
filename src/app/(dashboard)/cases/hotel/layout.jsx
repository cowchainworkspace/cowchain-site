export const metadata = {
  title: "Blockchain Integration - Our Case Study | Cowchain",
  description: "Uncover how Cowchain's Blockchain Integration changes hotel operations. Our arrangement streamlines forms and optimizes information administration in the hospitality sector.",
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
