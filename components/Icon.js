import React from "react";
import Image from 'next/image';

function Icon( {img, text} ) {
  return (
    <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded ">
      <p className="text-2xl font-bold">{text}</p>
      <Image src={img} alt="/" />
    </div>
  );
}

export default Icon;
