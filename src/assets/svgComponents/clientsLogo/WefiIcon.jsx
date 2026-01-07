import wefiIcon from "@/assets/icons/homepage/heroscreen/wefi.svg";
import Image from "next/image";
import React from "react";

const WefiIcon = ({ className, ...props }) => (
  <Image width={128} height={22} src={wefiIcon} alt="Step image" />
);

export default WefiIcon;