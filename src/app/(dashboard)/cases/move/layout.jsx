import { metadata } from "./moveCaseData/moveCaseMetadata";

export { metadata }

export default async function MoveCasesLayout({ children }) {
  return (
    <section>
      <>
        <div className="scrollbar-none relative bg-black">{children}</div>
      </>
    </section>
  );
}
