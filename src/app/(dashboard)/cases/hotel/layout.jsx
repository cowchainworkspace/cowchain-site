import { metadata } from "./hotelCaseMetadata";

export { metadata };

export default async function HotelCasesLayout({ children }) {
  return (
    <section>
      <>
        <div className="scrollbar-none relative bg-black">{children}</div>
      </>
    </section>
  );
}
