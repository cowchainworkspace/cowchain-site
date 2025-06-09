import { metadata } from "./casesMetadata";
export { metadata };
import dynamic from "next/dynamic";

const CasesContainer = dynamic(() => import("./components/CasesContainer"));

const Cases = () => {
  return <CasesContainer />;
};

export default Cases;
