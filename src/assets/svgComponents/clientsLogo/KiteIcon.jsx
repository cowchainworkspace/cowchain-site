import kiteIcon from "@/assets/icons/homepage/heroscreen/kite.svg";
import Image from "next/image";
import React from "react";

const KiteIcon = ({ className, ...props }) => (
  <Image width={128} height={22} src={kiteIcon} alt="Step image" />
);

export default KiteIcon;