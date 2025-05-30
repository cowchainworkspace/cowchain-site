import step from "@/assets/clientsLogo/step.png";
import Image from "next/image";
import React from "react";

const Step = ({ className, ...props }) => (
  <Image width={128} height={22} src={step} alt="Step image" />
);

export default Step;
