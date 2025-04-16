import Image from "next/image";
import React from "react";
import step from '@/assets/clientsLogo/step.png'

const Step = ({ className, ...props }) => (
 <Image width={128} height={22} src={step} />
);

export default Step;
