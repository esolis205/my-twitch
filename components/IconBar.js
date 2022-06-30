import React from "react";
import Image from "next/image";
import HeadPhones from "../public/assets/headphones.png";
import Mic from "../public/assets/mic.png";
import Paint from "../public/assets/paint.png";
import Remote from "../public/assets/remote.png";
import Trophy from "../public/assets/trophy.png";
import Icon from "./Icon";

function IconBar() {
  return (
    <div className="p-2 md:p-8">
      {/* Container */}
      
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8">
        {/* Grid Items */}
        <Icon img={Remote} text="Games" />
        <Icon img={Mic} text="IRL" />
        <Icon img={HeadPhones} text="Music" />
        <Icon img={Trophy} text="Esports" />
        <Icon img={Paint} text="Creative" />
      </div>
    </div>
  );
}

export default IconBar;
