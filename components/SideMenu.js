import React from "react";
import { rec_channels, top_channels } from "../data/mock-data";
import { RiMovieLine } from "react-icons/ri";
import Image from "next/dist/client/image";
import { BsDot } from "react-icons/bs";

function SideMenu() {
  return (
    <div className="fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#0e0e10]">
        <div className=" pb-4">
          <p className="hidden xl:flex uppercase font-bold text-sm">Recommended Channels</p>
          <p>
            <RiMovieLine size={20} className=" xl:hidden justify-center w-full" />
          </p>
        </div>
        {rec_channels.map((item, index) => (
            <div key={index} className="inline-flex items-center w-full py-[2px] border-t-gray-800 border-t-[.5px]">
                <div>
                    <Image src={item.avatar} width='50' height='50' alt='avatar' />
                </div>
                <div className="hidden xl:flex justify-between w-full pl-1 ">
                    <div>
                        <p>{item.userName}</p>
                        <p className=" text-blue-500">{item.game_name}</p>
                    </div>
                    <p className="flex items-center"><BsDot size={40} className=" text-red-600"/>{item.rank}K</p>
                </div>
            </div>
        ))}
        <div>
          <p className="hidden xl:flex uppercase font-bold text-sm py-4">Top Channels</p>
          <p>
            <RiMovieLine size={20} className=" xl:hidden justify-center w-full" />
          </p>
        </div>
        {top_channels.map((item, index) => (
            <div key={index} className="inline-flex items-center w-full py-[2px] border-t-gray-800 border-t-[.5px]">
                <div>
                    <Image src={item.avatar} width='50' height='50' alt='avatar' />
                </div>
                <div className="hidden xl:flex justify-between w-full pl-1 ">
                    <div>
                        <p>{item.userName}</p>
                        <p className=" text-blue-500">{item.game_name}</p>
                    </div>
                    <p className="flex items-center"><BsDot size={40} className=" text-red-600"/>{item.rank}K</p>
                </div>
            </div>
        ))}
    </div>
  );
}

export default SideMenu;
