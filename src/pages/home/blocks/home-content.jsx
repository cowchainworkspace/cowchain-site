import { Suspense, lazy } from "react";
import { Footer } from "components/Footer";

import { Loading } from "components/loader/Loading";

const Benefits = lazy(() => import("../blocks/Benefits"));
const BenefitsMobiles = lazy(() => import("../blocks/BenefitMobiles"));
const Clients = lazy(() => import("../blocks/Clients"));
const Stack = lazy(() => import("components/stack"));
const Cases = lazy(() => import("../blocks/Cases"));
const FAQ = lazy(() => import("../blocks/FAQ"));
const Contact = lazy(() => import("components/Contact"));
const Team = lazy(() => import("../blocks/Team"));

export const HomeContent = () => {
  return (
    <Suspense loading={<Loading />}>
      <Benefits />
      <BenefitsMobiles />
      <Stack title={"Our Expertise"} />
      <Clients />
      <Cases />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </Suspense>
  );
};
