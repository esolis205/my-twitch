import React from "react";
import Image from "next/image";

function CategoriesItem({ img, title, viewers, tag1, tag2 }) {
  return (
    <div className="p-2 flex flex-col">
      <Image src={img} alt="/" width="261" height="350" />
      <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm text-gray-500 py-[2px]">{viewers} viewers</p>
          <div className="flex flex-row space-x-2">
            <div>
                <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px px-3">{tag1}</p>
            </div>
            <div>
                {tag2 ? (
                    <p className="text-sm bg-gray-700 rounded-full inline-block p-[2px px-3">{tag2}</p>
                ) : null}
            </div>
          </div>
      </div>
    </div>
  );
}

export default CategoriesItem;
