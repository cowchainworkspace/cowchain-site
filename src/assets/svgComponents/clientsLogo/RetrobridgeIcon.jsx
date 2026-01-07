import retrobridgeIcon from "@/assets/icons/homepage/heroscreen/retrobridge.svg";
import Image from "next/image";
import React from "react";

const RetrobridgeIcon = ({ className, ...props }) => (
  <Image width={148} height={42} src={retrobridgeIcon} alt="RetroBridge image" />
);

export default RetrobridgeIcon;