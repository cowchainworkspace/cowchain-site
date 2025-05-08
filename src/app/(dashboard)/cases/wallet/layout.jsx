import { metadata } from "./walletCaseData/walletCaseMetaData";

export { metadata };

export default async function WalletCasesLayout({ children }) {
  return (
    <section>
      <>
        <div className="scrollbar-none relative bg-black">{children}</div>
      </>
    </section>
  );
}
