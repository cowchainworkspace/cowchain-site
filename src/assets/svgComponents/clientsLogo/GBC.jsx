import gsxImage from "@/assets/clientsLogo/GMX.png";
import Image from "next/image";
import React from "react";

const GBC = ({ className, ...props }) => (
  <Image width={196} height={43} src={gsxImage} alt="GBC image" />
);

export default GBC;
