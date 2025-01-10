import React from "react";
import Image from 'next/image'
import gsxImage from '@/assets/clientsLogo/GMX.png'

const GBC = ({ className, ...props }) => (
  <Image width={196} height={43} src={gsxImage}/>
);

export default GBC;
