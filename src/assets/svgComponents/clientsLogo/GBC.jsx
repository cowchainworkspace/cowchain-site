import React from "react";
import Image from 'next/image'
import gbcImage from '@/assets/clientsLogo/gbc.png'

const GBC = ({ className, ...props }) => (
  <Image width={196} height={43} src={gbcImage}/>
);

export default GBC;
