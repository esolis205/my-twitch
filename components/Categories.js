import React from "react";
import CategoriesItem from "./CategoriesItem";

function Categories() {
  return (
    <div id="categories" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className=" text-[#9147ff]">Top Categories</span> we think you
        would like
      </h2>
      {/* Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2">
        <CategoriesItem 
        img='https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg'
        title='Valorant'
        viewers='38K'
        tag1='FPS'
        tag2='Shooter'
        />
        <CategoriesItem 
        img='https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg'
        title='Fortnite'
        viewers='54.6K'
        tag1='Action'
        tag2='Shooter'
        />
        <CategoriesItem 
        img='https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg'
        title='Minecraft'
        viewers='34.3K'
        tag1='Adventure'
        />
        <CategoriesItem 
        img='https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg'
        title='Apex Legends'
        viewers='71.5K'
        tag1='FPS'
        tag2='Shooter'
        />
        <CategoriesItem
        img='https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg'
        title='Call of Duty: Warzone'
        viewers='77.2K'
        tag1='FPS'
        tag2='Shooter'
        />
        <CategoriesItem 
        img='https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg'
        title='Grand Theft Auto V'
        viewers='224K'
        tag1='Adventure'
        />
        <CategoriesItem 
        img='https://static-cdn.jtvnw.net/ttv-boxart/491487-188x250.jpg'
        title='Dead by Daylight'
        viewers='34.8K'
        tag1='Action'
        tag2='Horror'
        />
      </div>
    </div>
  );
}

export default Categories;
